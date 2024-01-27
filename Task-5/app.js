//degeneratabobovich@gmail.com maide this code
// const arr=[1,2,3,4,5,6,7]
// for(let i=0;i<=arr.length;i++){
//     let result = arr[i]
//     console.log(result)
// }
// let arr=[['tom',39,1,3], ['bob',18,1,3],['stan',17,1,3]  ,['stan',17,1,3] ];
// for (let i = 0; i < arr.length ; i++) {
//     for (let j = 0; j < arr.length; j++){
//         let result = arr[i][j];
//         console.log(result);

//     }
//     console.log('-------------------');
// // }
// let arr =[1,2,3,4,5,6]
// for( const num in arr){//of
//     console.log(num);
// }

// let stud={name:"qwerty",age:13,course:3,}
// for( const stu in stud){
//     console.log(stu);
// }

// const personArr = [
// {name:'t',age: 24},
// {name:'b',age: 14},
// {name:'s',age: 34},
// {name:'r',age: 32},

// ];
// for(let person of personArr) {
//     for(let key in person){
//         console.log(key + ':' + person[key]);
//     }
// }
const students = [
    { name: 'мишка', codeStudents: 19, predmets: ['история', 'обж'], year:2007,group:103,courses: 1, gender:'M'},
    { name: 'мишка', codeStudents: 19, predmets: ['матеша', 'обж'], year:2004,group:203,courses: 1, gender:'M'},
    { name: 'мишка', codeStudents: 19, predmets: ['история', 'бж'], year:2005,group:153,courses: 1, gender:'M'},
    { name: 'мишка', codeStudents: 19, predmets: ['русский язык', 'обж'], year:2009,group:403,courses: 1, gender:'M'},
    { name: 'мишка', codeStudents: 19, predmets: ['история', 'география'], year:2002,group:203,courses: 1, gender:'M'},
    { name: 'мишка', codeStudents: 19, predmets: ['физ.ра', 'обж'], year:2006,group:303,courses: 1, gender:'M'},
    { name: 'мишка', codeStudents: 19, predmets: ['история', 'технология'], year:2003,group:203,courses: 1, gender:'M'}
]
for(let student of students) {
    for(let key in student){
        console.log(key + ':' + students[key]);
    }
}
//help