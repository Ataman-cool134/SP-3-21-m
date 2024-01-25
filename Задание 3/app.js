const college = [
    {
        namestudent: 'Bogdan',
        cours: '3',
        speciality: 'programm',
        GradePointAverage: '4',

        couples: {
            morning: 'физра',
            day: 'мдк',
            evening: 'доп уроки'
        }
    },
    {
        namePrepod: 'tixon',
        speciality: 'преподаватель физкультуры',
        age: 30,
        DopCours: ['обж','история']
    }
]

console.log(college[0]["namestudent"],college[0]["speciality"]);
console.log(college[1]["namePrepod"],college[1]["DopCours"], college[1]["speciality"]);