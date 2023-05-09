import { writeFile } from 'node:fs/promises';

async function writeNote(content) {
  try {
    const content = process.argv[2] + '\n';
    await writeFile('note.txt', content, { encoding: 'utf8' });
  } catch (error) {
    console.error(error);
  }
}

writeNote();
