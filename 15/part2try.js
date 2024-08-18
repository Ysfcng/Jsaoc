const fs = require('fs');
let text=fs.readFileSync("new.txt",{encoding:"utf-8"}).split("\n").filter(x=>x!="")
let arr1=text.map(x=>x.match(/\d+/).filter((k,l)=>l==2))

let myarr=[]
for(let frosting=0;frosting<100;frosting++){
let sugar=100-frosting
console.log(frosting,sugar)
sol([frosting,sugar])





}
let t=""
function sol(arr){
let temp=0,cal=0
let mul=1
for(let i=0;i<5;i++){
for(let j=0;j<2;j++){
if(i!=4){
temp+=((text[j].match(/-?\d+/g)[i])*arr[j])

}
else cal+=((text[j].match(/-?\d+/g)[i])*arr[j])
console.log(cal,arr)
}
if(temp>0)
mul*=temp
temp=0
}
if(cal==500)
myarr.push(mul)
mul=1
cal=0
}

myarr=myarr.sort((a,b)=>a-b).reverse()
console.log(myarr)




