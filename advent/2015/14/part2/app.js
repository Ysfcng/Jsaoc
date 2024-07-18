const fs=require("fs")
let text=fs.readFileSync("puz1.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")

let ob={},duration=2503



for(let i=0;i<=duration;i++){
let arr=[]
text.map(x=>{
let matched=x.match(/(\S+)\D+(\d+)\D+(\d+)\D+(\d+)/)

let time=+matched[3]
let name=matched[1]
let speed=+matched[2]
let rest=+matched[4]

if(ob[name]==undefined)
ob[name]={}
if(ob[name]["road"]==undefined)
ob[name]["road"]=0
if(ob[name]["points"]==undefined)
ob[name]["points"]=0

if(i%(time+rest)<time){
arr.push([name,ob[name]["road"]+speed])
ob[name]["road"]+=speed
}
else{
arr.push([name,ob[name]["road"]])
}

})
arr=arr.sort((j,k)=>{
return j[1] - k[1] 
}).reverse()
let max=arr[0][1]

arr.map(m=>{
if(m[1]>=max)
ob[m[0]]["points"]+=1
})
console.log(arr,i)

}
console.log(ob)
