import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      resolve({});
      return;
    }
    lines.shift(); // remove header
    const fields = {};
    for (const line of lines) {
      const student = line.split(',');
      const field = student[3];
      const firstName = student[0];
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    }
    resolve(fields);
  });
});

export default readDatabase;
