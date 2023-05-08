import { writeFile } from 'node:fs/promises';

async function writeRandomNum() {
  try {
    const randomNum = Math.random() + '\n';
    await writeFile('random.txt', randomNum, { encoding: 'utf8' });
  } catch (error) {
    console.error(error);
  }
}

writeRandomNum();
