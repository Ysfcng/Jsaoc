const fs=require("fs")
let text=fs.readFileSync("./puzzle.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
let old=0,newest=0,arr=[]

text.map(x=>{
let old=x.length
x=x.split("")
x[0]=""
x[x.length-1]=""
x=x.join("")
x=x.replaceAll("\\","\\\\")
x=x.replaceAll("\"","\\\"")
x=x.replaceAll("\'","\\\'")
x="\"\\\""+x+"\\\"\""

let newest=x.length
arr.push(newest-old)
console.log(old,newest,x)




})

console.log(arr)
console.log(arr.reduce((x,y)=>x+y))
