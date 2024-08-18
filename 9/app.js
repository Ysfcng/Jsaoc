const fs=require("fs")
let text=fs.readFileSync("puzzle1.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
let arr=[],numarr=[],num1arr=[],textarr=[],sol=[]
text.map(x=>{
let cur =x.split(" ")[0]
let next =x.split(" ")[2]
if(!arr.includes(cur)){
arr.push(cur)
}
if(!arr.includes(next)){
arr.push(next)
}
})

for(i=1;i<=arr.length;i++){
numarr.push(i)
}

let s=+numarr.join("")
let e=+numarr.reverse().join("")

for(s;s<=e;s+=9){
if(numarr.every(y=>(s+"").includes(y)))
num1arr.push(s)

}
console.log(num1arr.length)
num1arr.map(y=>{
y=(y+"").split("")
let str=""
y.map(z=>{
str=str+" to "+arr[z-1]

})
str=str.replace(" to ","")
textarr.push(str)

})
textarr.map(x=>{
let s=0
text.map(y=>{
let revx=y.split(" ")
let num=revx[revx.length-1]
tempx=revx[2]
revx[2]=revx[0]
revx[0]=tempx
revx[revx.length-1]=""
revx[revx.length-2]=""
revx=revx.join(" ").trim()

y=y.split(" ")
y[y.length-1]=""
y[y.length-2]=""
y=y.join(" ").trim()

if(x.includes(revx)){
s+=+num
}
if(x.includes(y)){
s+=+num
}


})
sol.push([x,s])
})
sol.sort((x,y)=>x[1]-y[1])
fs.writeFileSync("sol",sol.join("\n"),{flag:"a+"})

