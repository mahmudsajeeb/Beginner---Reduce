// const mutlFn = (x) =>{
//   return  x.reduce((a,b)=> a * b)
// }
// console.log(mutlFn(2,3))
// function grow(x){
  
//   return  x.reduce((a,b)=> a * b)
// }
// console.log(grow(3,3))

// const grow = x=>saji(x.join("*"))

// function arrayPlusPooint(a,b){
//   const sum = 0;

//   for(let i=0; i<a.length; i++){
//     sum +=a[i]
//   }
//   for(let j=0; j<b.length; j++){
//     sum +=b[j]
//   }
// }

// function rePeat(s,n){
//   return n.repeat(s)
// }
// console.log(rePeat(3, "*"))
const  bom = (a, b)=>{
  [...b].sort((A,B)=>{
    if(a === "R") return A-B
    if(a === "L") return B-A
  })

}
console.log(bom('R', [3, 2, 1, 2]))