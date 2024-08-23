const fs=require("fs")
let text=fs.readFileSync("puzzle.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
let alp="abcdefghijklmnopqrstuvwxyz1"
text=text.map(x=>{
let ob={}
x.split("").map((z,y)=>ob[y]=0)
let k=Object.keys(ob).length
while(1){
let str=""
x.split("").map((y,i)=>{
let n=alp[(alp.indexOf(y)+ob[i])%27]
if(ob[i]!=0&&n=="i"||ob[i]!=0&&n=="o"||ob[i]!=0&&n=="l"){
n=alp[(alp.indexOf(y)+ob[i]+1)%27]
ob[i]+=1
}
if(n=="1"){
n="a"
ob[i-1]=ob[i-1]+1
ob[i]+=1
for(let j=i+1;j<k;j++)
ob[j]=27-alp.indexOf(x[j])
}
str+=n
})
console.log(str)
if(str!=x&&check(str))
return str
ob[k-1]=ob[k-1]+1

}
//w
})

console.log(text)


function check(x){
if(x.includes("1"))return false
if(x.includes("l"))return false
if(x.includes("i"))return false
if(x.includes("o"))return false
let num=0,cond=false
let matched=x.match(/([A-z])\1+/g)
matched?.map(x=>{
if(x.length==2&&x[0]==x[1])
num+=1

})

for(let i=0;i<alp.length-2;i++){

if(x.includes(alp[i]+alp[i+1]+alp[i+2]))
cond=true
}
if(cond&&num==2){
console.log(x,"true")
return true
}

}
