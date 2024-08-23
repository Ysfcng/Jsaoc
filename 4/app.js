const fs=require("fs")
const crypt=require("crypto-js/md5")
let text=fs.readFileSync("./puz.txt",{encoding:"UTF-8"})
console.log(text)
let arr=[]

text.split("\n").map(x=>{
if(x!="")
{let i=6473463
while(1){
	if(crypt(x+i).toString().startsWith("000000")){
		arr.push(i)
		break;
	}
	i+=1;
	console.log(i)
}
}
})
console.log(arr)
