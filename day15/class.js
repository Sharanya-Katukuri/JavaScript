// function sum(a,b,c){
//     if (a==13 || b==13 ||c==13){
        
//     }
//     if(a==13){
//         return 0
//     }
//     if(b==13){
//         return a
//     }
// }
// console.log(sum(13,12,4))
// console.log(sum(10,13,2))

function sum1(a,b,c){
    if(a==13){
        return 0
    }
    else if(b==13){
        return a
    }
    else if(a==13||b==13||c==13){
        return "nothing"
    }
}
console.log(sum1(1,1,13))
