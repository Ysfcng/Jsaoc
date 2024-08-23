const fs=require("fs")
let text=fs.readFileSync("puzzle1.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
for(let i=0;i<40;i++){

text=text.map(x=>{
let str=x[0],txt=""
for(let i=1;i<=x.length;i++){
if(x[i]==x[i-1])
str+=x[i]
else{
txt+=str.length+str[0]
str=x[i]
}
}
return txt
})
}
console.log(text[0].length)
