const students = [
{ name: 'мишка', codeStudents: 19, predmets: ['история', 'обж']},
{ name: 'бодя', codeStudents: 17, predmets: ['литература', 'география']},
{ name: 'славик', codeStudents: 20, predmets: ['история', 'математика']},
{ name: 'вова', codeStudents: 21, predmets: ['спать', 'есть',]},
{ name: 'гена', codeStudents: 17, predmets: ['русский язык', 'литература']},
{ name: 'ростик', codeStudents: 18, predmets: ['спит', 'смотреть порно']},
{ name: 'радик', codeStudents: 19, predmets: ['история', 'география']},
{ name: 'игорек', codeStudents: 17, predmets: ['математика', 'обж']},
{ name: 'степа', codeStudents: 16, predmets: ['литература', 'русский язык']},
{ name: 'диана', codeStudents: 16, predmets: ['обж', 'литература']},
];
function filterstudents(targetArray, targetpredmets) {
    return targetArray.filter(person => person.predmets.includes(targetpredmets));
}

let resultFilter = filterstudents(students, 'география' )

console.log(resultFilter);