const fs=require("fs")

let text=fs.readFileSync("puz.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
let ob={},arr=[],prob=[],j="",i
text.map(x=>{
if(!arr.includes(x.match(/\S+/)[0])){
arr.push(x.match(/\S+/)[0])
}


})
for( i=arr.length;i>0;i-=1){
j=j+i
}


for(i=10;i<=j;i+=9){
if(!prob.includes(i)&&[...j.split("")].every(x=>(i+"").includes(x)))
prob.push(i)
}

for(i=0;i<arr.length;i++){



}


console.log(arr,text,j,prob)
