const fs=require("fs")
let text = fs.readFileSync("puz.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!=""),arr1=[]

let kisi=[],nums=[],sira=[]

let arr=[]
text.map(x=>{
let reg=/(\S+)\swould\s(gain|lose)\s(\d+)\s.*\s(\S+)\./
 arr1=x.match(reg)
if(!kisi.includes(arr1[1]))kisi.push(arr1[1])
if(!kisi.includes(arr1[4]))kisi.push(arr1[4])
arr.push([arr1[1],arr1[2],+arr1[3],arr1[4]])

})

for(let i=12345678;i<=87654321;i+=9){
if(["1","2","3","4","5","6","7","8"].every(x=>(i+"").includes(x))&&!nums.includes(i))
nums.push(i)
}

nums.map(x=>{
let temp=[]
let nem=((x+"").split(""))
nem.map((y,i)=>temp.push(kisi[+y-1]))
sira.push(temp)


})
let res=[]

for(let i=0;i<sira.length;i++){
let s=0
for(let j=0;j<sira[i].length;j++){
let b=sira[i][((j-1)>=0?j-1:sira[i].length-1)]
let c=sira[i][j]
let n=sira[i][((j+1)<sira[i].length?j+1:0)]

let newa=arr.find(z=>z.includes(b)&&z.includes(c)&&z[0]==c)




if(newa[1]=="lose")
s-=newa[2]
else
s+=newa[2]
let newa1=arr.find(z=>z.includes(n)&&z.includes(c)&&z[0]==c)
if(newa1[1]=="lose")
s-=newa1[2]
else
s+=newa1[2]

console.log(newa,newa1)
}
res.push(s)
}

console.log(res.sort(function(a, b){return b-a}))


