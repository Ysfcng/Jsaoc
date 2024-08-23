const fs=require("fs")
let text=fs.readFileSync("puz.txt",{encoding:"utf-8"})
text=text.split("\n").filter(x=>x!="").sort((a,b)=>a-b).reverse()
let arr=[]

function rec(tex,t=0,str=""){
for(let i in tex){
console.log("str",str,"i",i,"tex i",text[i],"tex",tex)

if(t+(+tex[i])<150){
temp=tex.filter((k,l)=>l>i)
rec(temp,t+(+tex[i]),str+" "+tex[i])
}
if(t+(+tex[i])==150){
//if(!arr.includes(" "+str+" "+tex[i]+" "))
arr.push(" "+str+" "+tex[i]+" ")
}
}
}
rec(text)




arr=arr.map(x=>{
x=x.trim()
return x.split(" ").length
}).sort((a,b)=>a-b)


console.log(arr)
