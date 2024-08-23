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

 }

 if(x.includes("tree")){
  let tr=x.match(/trees: \d+/g)[0].match(/\d+/g)[0]
  console.log(tr,"tr")
  if(tr<=3)
   bool=false
 }
if(x.includes("cat")){
let cat=x.match(/cats: \d+/g)[0].match(/\d+/g)[0]
console.log(cat,"cat")

if(cat<=7)
bool=false
}
if(x.includes("goldfish")){
let goldfish=x.match(/goldfish: \d+/g)[0].match(/\d+/g)[0]
console.log(goldfish,"goldfish")
if(goldfish>=5)
bool=false
}
if(x.includes("pomeranians")){
let pom=x.match(/pomeranians: \d+/g)[0].match(/\d+/g)[0]
console.log(pom,"pom")
if(pom>=3)
bool=false
}






} //for bitti
if(bool)
arr.push(x)
})

console.log(arr)
