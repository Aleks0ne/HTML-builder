const fs = require('fs');
const path = require('path');
const process = require('process');

const textPath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(textPath, 'utf8');

process.stdout.write('Hello! Write your message please: \n\n');
process.stdin.resume()
process.stdin.on('data', (data) => {
  (String(data).toLowerCase().trim() == 'exit') ? process.exit() : writeStream.write(data);
})
process.on('SIGINT', () => process.exit());
process.on('exit', () => console.log('\n Thanks for your time)'));
