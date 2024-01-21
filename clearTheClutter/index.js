import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname, join } from 'path';

// Get the current module's URL
const currentModuleURL = import.meta.url;

// Convert the URL to a file path
const currentModulePath = fileURLToPath(currentModuleURL);

// Get the directory name from the file path
const currentDirectoryPath = dirname(currentModulePath);

async function createAndMoveFiles() {
  try {
    let files = await fs.readdir(currentDirectoryPath);

    for (const file of files) {
      let fileExt = file.split('.').pop();
      const fileStat = await fs.stat(file);

      if (fileExt !== 'js' && fileExt !== 'json' && fileStat.isFile()) {
        const extDirectory = join(currentDirectoryPath, fileExt);

        try {
          await fs.access(extDirectory);
        } catch (error) {
          if (error.code === 'ENOENT') {
            // Directory doesn't exist, create it
            await fs.mkdir(extDirectory);
            console.log(`Directory "${extDirectory}" created.`);
          } else {
            throw error;
          }
        }

        const newFilePath = join(extDirectory, file);

        // Move the file to the new directory
        await fs.rename(join(currentDirectoryPath, file), newFilePath);
        console.log(`File "${file}" moved to "${extDirectory}".`);
      }
    }
  } catch (error) {
    console.error(`Error processing files: ${error.message}`);
  }
}

// Call the function to create directories and move files
createAndMoveFiles();
