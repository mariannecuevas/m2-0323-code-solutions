import express from 'express';
import pg from 'pg';
const app = express();

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
   SELECT *
      from "grades"
  `;
    const result = await db.query(sql);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const name = req.body.name;
    const course = req.body.course;
    const score = req.body.score;

    if (!name || !course || score === undefined) {
      res.status(400).json({ error: 'Name, course, and score are required fields.' });
    } else if (!Number.isInteger(Number(score)) || score < 0) {
      res.status(400).json({ error: 'Score must be a non negative integer' });
    }

    const sql = `
    INSERT into "grades" ("name", "course", "score")
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
);

app.put('/api/grades/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const course = req.body.course;
    const score = req.body.score;

    if (!Number.isInteger(Number(id)) || id <= 0) {
      res.status(400).json({ error: 'Id must be a positive integer' });
    } else if (!name || !course || score === undefined) {
      res.status(400).json({ error: 'Name, course, and score are required fields.' });
    } else if (!Number.isInteger(Number(score)) || (score < 0 && score !== 0)) {
      res.status(400).json({ error: 'Score must be a non negative integer' });
    }

    const sql = `
    UPDATE "grades"
      SET "name" = $1,
          "course" = $2,
          "score" = $3
      WHERE "gradeId" = $4
      RETURNING *
    `;

    const params = [name, course, score, id];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    if (grade) {
      res.status(200).json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${id}` });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/grades/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!Number.isInteger(Number(id)) || id <= 0) {
      res.status(400).json({ error: 'Id must be a positive integer' });
    }

    const sql = `
      DELETE
        from "grades"
        WHERE "gradeId" = $1
        RETURNING *
    `;

    const params = [id];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    if (grade) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${id}` });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
