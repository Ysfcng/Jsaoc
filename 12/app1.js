const fs=require("fs")

let text=fs.readFileSync("puzzle.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
let arr=[]
text.map(x=>{
x=JSON.parse(x)

flat(x)
})


function flat(str){
for(let k in str){
if((!Array.isArray(str))&&typeof str =="object"&&str!=null){
if(str[k]=="red"||k=="red"){
str[k]={}
return ""
}
}
}
let temp=[]
for(let i in str){

if(typeof i=="object"){
flat(i)
}
if(typeof str[i]=="object"){
flat(str[i])
}
else{
if(parseInt(str[i])!=NaN)
temp.push(str[i])
else if(parseInt(i)!=NaN)
temp.push(i)
}

}
temp.map(s=>arr.push(s))
}






arr=arr.filter(y=>parseInt(y)).map(k=>parseInt(k))
console.log(arr.reduce((k,l)=>k+l))
