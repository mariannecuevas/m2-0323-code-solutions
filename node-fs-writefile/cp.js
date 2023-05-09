import { readFile, writeFile } from 'node:fs/promises';

async function copyFile() {
  try {
    const sourceFile = process.argv[2];
    const duplicateFile = process.argv[3];
    const contents = await readFile(sourceFile, { encoding: 'utf8' });
    await writeFile(duplicateFile, contents, { encoding: 'utf8' });
  } catch (error) {
    console.error(error);
  }
}

copyFile();
