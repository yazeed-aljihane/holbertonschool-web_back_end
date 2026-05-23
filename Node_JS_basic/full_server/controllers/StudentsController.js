import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((fields) => {
        const output = ['This is the list of our students'];
        const keys = Object.keys(fields);
        const sortedFields = keys.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        for (const field of sortedFields) {
          const count = fields[field].length;
          const list = fields[field].join(', ');
          output.push(`Number of students in ${field}: ${count}. List: ${list}`);
        }
        response.status(200).send(output.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((fields) => {
        const students = fields[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
