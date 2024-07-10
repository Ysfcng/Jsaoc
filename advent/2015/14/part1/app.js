const fs=require("fs")
let text=fs.readFileSync("puz.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")

let reg=/(\S+)\D+(\d+)\D+(\d+)\D+(\d+)/
let res=[]
text.map(x=>{
let matched=x.match(reg)
let rest=+matched[4],speed=matched[2],time=+matched[3]
let lap=parseInt(2503/(time+rest))
//matched[2]*matched[3]*lap +ekstra


console.log(time,speed,rest,matched)
if(2503%(time+rest)>=time)
    res.push(lap*time*speed+time*speed)
    else
res.push(lap*time*speed+(2503%(time+rest))*speed)
})
console.log(res.sort((a,b)=>a-b))
