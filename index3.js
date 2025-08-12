


let a = 8
let b
let remainder
function getRemainder(){
    for(let i=2; i<a; i++){
       
        remainder = a - ((Math.floor(a/i)) * i + i  - i)
        // remainder = a - ((parseInt(a/i)) * i + i - i)
        if(remainder === 0){
            break
        }
        
        // i = i+1
        // if( i == a){
        //     remainder = 0
        //     return remainder
        // }
        // else if( remainder === 0 ){
        //     return remainder
        // }
        // if(remainder === 0){
        //     // return remainder
        //     // continue

        // }
        // else{
            
        //     remainder = a - ((Math.floor(a/i)) * i + i  - i)
        //     // return remainder
        // }
        // if( i == a-1){
        //     return remainder
        // }
        
    }
    return remainder
}

// console.log(getRemainder())

function isPrime(){
    if(a === 1){
        console.log(`${a} is not a prime`)
    }
    else if(a === 2){
        console.log(`${a} is prime`)
    }
    else if(getRemainder() === 0){
        console.log(`${a} is not a prime`)
    }
    else if(getRemainder() !== 0){
        console.log(`${a} is prime`)
    }
    else{
        console.log("something wrong")
    }
    console.log("finished")
}
isPrime()



// 



