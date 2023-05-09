import { readFile } from 'node:fs/promises';

const files = process.argv.slice(2);

async function cat(files) {
  try {
    const contents = await Promise.all(files.map(filePath => readFile(filePath, { encoding: 'utf8' })));
    console.log(contents.join('\n'));
  } catch (error) {
    console.error(error);
  }
}

cat(files);
