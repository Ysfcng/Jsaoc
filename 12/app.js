const fs=require("fs")

let text=fs.readFileSync("puzzle.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
let arr=[]
text.map(x=>{
x=JSON.parse(x)

flat(x)
arr=arr.filter(z=>typeof z =="number")
console.log("arr",arr,arr.reduce((k,l)=>k+l))
})


function flat(str){
for(let i in str){
console.log(str,i,str[i],typeof str[i])
if(typeof str[i]=="object")
 flat(str[i])
else if(typeof str[i]=="number")
arr.push(str[i])
else arr.push(str[i])
}


}






