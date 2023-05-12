import express from 'express';
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = {
    id: nextId++,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  grades[grade.id] = grade;
  res.status(201).json(grade);
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
