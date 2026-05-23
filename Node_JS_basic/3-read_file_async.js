const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve('Number of students: 0');
        return;
      }

      lines.shift(); // Remove the header

      const output = [];
      const msg1 = `Number of students: ${lines.length}`;
      console.log(msg1);
      output.push(msg1);

      const fields = {};
      for (const line of lines) {
        const student = line.split(',');
        const field = student[3];
        const firstName = student[0];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      for (const [field, students] of Object.entries(fields)) {
        const msg = `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
        console.log(msg);
        output.push(msg);
      }

      resolve(output.join('\n'));
    });
  });
}

module.exports = countStudents;
