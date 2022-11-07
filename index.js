
function SumEquation(a,b){
    
    try{
        console.log("This is try ")
        throw("This through some Error")
        
    }
    catch(err){
        console.log("This is is "+err)
    }
    finally{
        return a+b;
    }
    
}
let x=5;
let y=10;
console.log(`The sum of ${x} and ${y} is  = ${SumEquation(x,y)}`)