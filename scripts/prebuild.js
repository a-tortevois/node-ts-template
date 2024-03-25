import { exec as child_process_exec } from 'node:child_process';
// import fs from 'node:fs/promises';
import { promisify } from 'node:util';

const exec = promisify(child_process_exec);

async function main() {
  console.log('Cleaning up previous builds...');
  await exec(`rm -rf ./build`);
  
  // console.log('Build index.ts...');
  // const dirents = await fs.readdir('./src', {withFileTypes:true});
  // const dirs = dirents.filter(dirent => dirent.isDirectory()).sort();
  // await fs.writeFile('./src/index.ts', '', {flush:true});
  // for(const dir of dirs) {
  //   await fs.appendFile('./src/index.ts', `export * from "./${dir.name}";\n`);
  // }

  console.log('Exec linter...');
  await exec(`npx eslint --fix`);
}

main();
