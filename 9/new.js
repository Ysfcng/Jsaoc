let arr=[1,2,3,4,5,6,7,8],arr2=[]
let f=+arr.join("")
let l=+arr.reverse().join("")
for(f;f<=l;f+=9){
if(arr.every(x=>(f+"").includes(x)))
arr2.push(f)
console.log(f)
}
