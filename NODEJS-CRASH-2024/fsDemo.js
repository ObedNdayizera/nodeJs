// import fs from 'fs';
import fs from 'fs/promises';



//readFile() - Callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });



//readFileSync() - Synchronous Version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data, "from Sychronous version");



//readFile() - Promise .then()
// fs.readFile('./test.txt', 'utf8')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));



// readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}




//writting to a file - Callback
// fs.writeFile('./test.txt', "I'm writting in test.txt file", (err) => {
//     if (err) throw err;
//     console.log("written to a file");
// })



//writting to a file - Synchronous Version
// const data = fs.writeFileSync('./test.txt', "hellow");



//writting to a file - Promise .then()
// fs.writeFile('./test.txt', "writting to a file using promise", 'utf8')
//     .then(() => {
//         console.log('File has been written successfully.');
//     })
//     .catch(err => {
//         console.error('An error occurred:', err);
//     });


//writting  to a file - async/await
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, I am witting to this file');
        console.log("File writtend to...");
    } catch (error) {
        console.log(error);
    }
}


//appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended file');
        console.log("File appended to...");
    } catch (error) {
        console.log(error);
    }
}

writeFile();
appendFile();
readFile();