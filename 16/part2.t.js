const fs=require("fs")
let text=fs.readFileSync("puz.txt",{encoding:"utf-8"}).split("\n").filter(x=>x!="\n")
let arr=[]
let myaunt={children: 3,
samoyeds: 2,
akitas: 0,
vizslas: 0,
cars: 2,
perfumes: 1,
}

text.map(x=>{
let bool=true
for(let i in myaunt){
if(x.includes(i)){
let reg=i+": \\d+"
reg=new RegExp(reg,"g")

if((x.match(reg)[0]).match(/\d+/g)[0]!=myaunt[i])
bool=false

console.log((x.match(reg)[0]).match(/\d+/g)[0],myaunt[i])
}

}
if(bool)
arr.push(x)
})

console.log(arr)
