const fs=require("fs")
let text=fs.readFileSync("./puz2.txt",{encoding:"UTF-8"}).split("\n")
text=text.map(x=>{
for(let i=0;i<x.length;i++){
if(x[i]==x[i+2])
break
if(i==x.length-2)return false
}

x=rem(x)

return fin(x)
})

function rem(x){
let arr=x.match(/(.)\1+/g)||[]
arr=arr.filter(x=>x.length>2)
arr.map(y=>{
let pat=new RegExp(y,"g")
x=x.replace(pat,"")})
return x
}

function fin(x){
for(let i=0;i<x.length-1;i++){
let str=x[i]+x[i+1]
let se=new RegExp(str,"g")
if(x.match(se).length>1)
return true
}
return false

}
console.log(text,text.filter(x=>x).length)
