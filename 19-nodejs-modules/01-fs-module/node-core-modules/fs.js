// const fs = require('fs')
const fs = require('fs/promises')

// write to a file


// Callback version
// fs.writeFile('file1.txt', 'hello World', (err) => {
//   if (err) throw err;
//   console.log('File created');

// })


// ==========================
// Promise version
// fs.writeFile('file2.txt', 'Hello World 2')

//   .then(() => console.log('File created'))
//   .catch((err) => console.log(err));


// ======================
// Sync version
// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File created');


// ==========The best Option ======
// Async/Await
// async function createFile(filename, content){
//   try {
//     await fs.writeFile(filename, content);
//     console.log('File Created');
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// createFile('file4.txt', 'Hello World 4')

// Read from a file
// async function readFile(filename) {
//   try {
//     const data = await fs.readFile(filename, 'utf-8');
//     console.log(data);
    
//   } catch (error) {
//     console.log(error);
    
//   }
  
// }

// readFile('file1.txt')
// readFile('file4.txt')
// readFile('file2.txt')
// readFile('file3.txt')

// Delete File
// async function deleteFile(filename) {
//   try {
//     await fs.unlink(filename);
//     console.log(`File ${filename} Deleted`);
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// deleteFile('file2.txt')

// Rename a File
// async function renameFile(oldName, newName) {
//   try {
//     await fs.rename(oldName, newName)
//     console.log(`File ${oldName} renamed to ${newName}`);

    
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// renameFile('file3.txt', 'fileThree.txt')


// ===================== //
// Create a Folder //
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName)
    console.log(`Folder ${folderName} created`);
    
  } catch (error) {
    console.log(error);
    
  }
  
}

createFolder('SarahFolder')
