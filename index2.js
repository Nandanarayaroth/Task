
let a = 4
let b = 3

function getRemainder(){
    // let b = 3
    // let b
    // let c
    let result 
    let j = 0
    let remainder 
    // if( a === b){
    //     j = 0
    // }
    // if( a/2 === 0 ){
    //     b = 2
    //     c = 2
    // }
    // else{
    //     b = 3
    //     c = 3
    // }
    for( let i = 0; i <= a; i+=b ){
        
        if( b+i <= a){
           
            result = b + i
            j ++
        }
        else if(result === a){
            j=0
            return j
            // return
        }
        else if( b+i > a){
            j = b+i - a
            // return j 
        }
        // else{
        //     break
        // }
        
       
    }
    if(result !== a){

        // let remainder 
        remainder = a - (((j) * b + b ) - b)
        return remainder
    }

}
// console.log(getRemainder())

function isPrime(){
    // let a = 10
    if(a === 1){
        console.log(`${a} is not a prime`)
    }
    else if(a === b){
        console.log(`${a} is prime`)
    }
    else if (a=== 2){
        console.log(`${a} is prime`)
    }
    else if(getRemainder() <= 0){
        console.log(`${a} is not prime`)
    }
    else if(getRemainder() === 1 || getRemainder() === 2){
        console.log(`${a} is prime`)
    }
    else if(getRemainder() < 2){
        console.log(`${a} is not a prime`)
    }
    else{
        console.log(`${a} is prime`)
        console.log("error")
    }

}
isPrime()

//                    