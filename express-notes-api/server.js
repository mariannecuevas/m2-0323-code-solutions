import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
const app = express();

app.use(express.json());

async function readNotes(filepath) {
  try {
    const data = await readFile(filepath, { encoding: 'utf8' });
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (err) {
    console.error(err);
    throw new Error('Internal Server Error');
  }
}

async function writeNotes(filepath, notesData) {
  try {
    const jsonData = await readFile(filepath, { encoding: 'utf8' });
    const data = JSON.parse(jsonData);

    data.notes = notesData.notes;
    data.nextId = notesData.nextId;

    await writeFile('data.json', JSON.stringify(data, null, 2), { encoding: 'utf8' });
  } catch (err) {
    console.error(err);
    throw new Error('Internal Server Error');
  }
}

app.get('/api/notes', async (req, res) => {
  try {
    const jsonData = await readNotes('data.json');
    const notesData = jsonData.notes;
    const notesArray = [];
    for (const id in notesData) {
      notesArray.push(notesData[id]);
    }
    res.status(200).send(notesArray);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(Number(id)) || id <= 0) {
    res.status(400).json({ error: 'Id must be a positive integer' });
  }

  try {
    const jsonData = await readNotes('data.json');
    const notesData = jsonData.notes;
    const note = notesData[id];

    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ error: `Cannot find note with id ${id}` });
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
);

app.post('/api/notes', async (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ error: 'Content is a required field' });
  }

  try {
    const jsonData = await readNotes('data.json');
    const nextId = jsonData.nextId;

    const newNote = {
      id: nextId,
      content: req.body.content
    };
    jsonData.notes[nextId] = newNote;
    jsonData.nextId = nextId + 1;

    await writeNotes(jsonData);

    res.status(201).json(newNote);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const id = req.params.id;

  if (isNaN(id) || id <= 0) {
    res.status(400).json({ error: 'Id must be a positive integer' });
  }

  try {
    const jsonData = await readNotes('data.json');
    const notesData = jsonData.notes;
    const note = notesData[id];

    if (note) {
      delete notesData[id];
      await writeNotes(jsonData);
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: `Cannot find note with id ${id}` });
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ error: 'Id must be a positive integer' });
  } else if (!req.body.content) {
    return res.status(400).json({ error: 'Content is a required field' });
  }

  try {
    const jsonData = await readNotes('data.json');
    const notesData = jsonData.notes;
    const note = notesData[id];

    if (note) {
      note.content = req.body.content;
      await writeNotes(jsonData);
      res.sendStatus(200);
    } else {
      res.status(404).json({ error: `Cannot find note with id ${id}` });
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
