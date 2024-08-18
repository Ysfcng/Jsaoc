const fs=require("fs")
let text=fs.readFileSync("puzzle.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
let old=0,newest=0,arr=[]
text.map(x=>{
old=x.length
x=x.split("")
x[0]=""
x[x.length-1]=""
x=x.join("")

let mat=x.match(/\\x([0-9a-fA-F][0-9a-fA-F])/g)
if(mat){
mat.map(y=>{
x=x.replace(y,String.fromCharCode(parseInt(y[2]+y[3],16)))
})
}

x=x.replaceAll("\\\"","\"")
x=x.replaceAll("\\\'","\'")
x=x.replaceAll("\\\\","%20")
x=x.replaceAll("\\","")
x=x.replaceAll("%20","\\")
console.log(x)
newest =x.length
arr.push(old-newest)
//while(x.includes("\\")){console.log("a")}
})
console.log(arr)
console.log(arr.reduce((x,y)=>x+y))
