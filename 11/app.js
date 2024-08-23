const fs=require("fs")
let text=fs.readFileSync("puzzle.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
let alp="abcdefghjkmnpqrstuvwxyz"
let alp1="abcdefghijklmnopqrstuvwxyz"

text=text.map(x=>{
let ob={}
x.split("").map((z,y)=>ob[y]=0)
console.log(ob)
let i=0
while(1){
ob[0]=ob[0]+1

for(let i in ob){
if(ob[i]==23){
ob[+i+1]=ob[+i+1]+1
ob[i]=0
}
console.log(i,"ob!")
}

console.log(ob)
let str=""
for(let i=0;i<x.length;i++){
console.log(i,Object.keys(ob).length,i)
str+=alp[(alp1.indexOf(x[i])+ob[Object.keys(ob).length-1-i])%22]


}
console.log(str)
if(check(str))
return str
}
//t oluştur t check gonder
//for
//if(check(x)){
//return x
//}



//}


})

function check(x){
let matched=x.match(/([A-z])\1/g)
let num=0,cond
matched?.map(x=>{
if(x.length==2&&x[1]==x[1])
num+=1
})

for(i=0;i<20;i++){
if(x.includes(x[i]+x[i+1]+x[i+2]))
cond=true
}
if(cond&&num==2)
return true
console.log(cond,num,x)

}

check("abcdeffaa")
check("abcdefg")

