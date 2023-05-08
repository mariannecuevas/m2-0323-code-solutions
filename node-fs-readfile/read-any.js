import { readFile } from 'node:fs/promises';

const filePath = process.argv[2];

async function readAny(filePath) {
  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (error) {
    console.error(error.message);
  }
}

readAny(filePath);
