import fs from 'fs';


//readFile() -callback
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//readFileSync() - Synchronous Version
const data = fs.readFileSync('./test.txt', 'utf8');
console.log(data, "from Sychronous version");