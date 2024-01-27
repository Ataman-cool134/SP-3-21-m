// const arr=[1,2,3,4,5,6,7]
// for(let i=0;i<=arr.length;i++){
//     let result = arr[i]
//     console.log(result)
// }
let arr=[['tom',39,1,3], ['bob',18,1,3],['stan',17,1,3]  ,['stan',17,1,3] ];
for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < arr.length; j++){
        let result = arr[i][j];
        console.log(result);

    }
    console.log('-------------------');
}