const fs=require("fs")
let text=fs.readFileSync("./puzzle.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")

let num,ob={},op

while(text.length>=1){
text=text.map(x=>{
let arr=x.match(/(.*) -> (.*)/)
console.log(arr)
if(arr[1].split(" ").length==1){
	if(/[0-9]+/.test(x)){
		num=+(arr[1])
		ob[arr[2]]=num
		fs.appendFileSync("newpuzzle.txt",x+"\n")
		return false;
	}
	else if(ob[arr[1]]!=undefined){
		num=+(ob[arr[1]])
		ob[arr[2]]=num
		fs.appendFileSync("newpuzzle.txt",x+"\n")
		return false
	}
}
else if(arr[1].split(" ").length==2){
num=arr[1].split(" ")[1]
op=arr[1].split(" ")[0]

	if(/[0-9]/.test(num)){
	ob[arr[2]]=2**16+~(+num)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
	else{
	if(ob[num]!=undefined){
	ob[arr[2]]=2**16+~(+ob[num])
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}

	}
}
else if(arr[1].split(" ").length==3){
op=arr[1].split(" ")[1]

let num1=arr[1].split(" ")[0]
let num2=arr[1].split(" ")[2]
if(ob[num1]!=undefined&&ob[num2]!=undefined){
	if(op=="AND"){ ob[arr[2]]=+(ob[num1])&+(ob[num2])
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
	else if(op=="RSHIFT"){ob[arr[2]]=+(ob[num1])>>+(ob[num2])
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
	else if(op=="LSHIFT"){ob[arr[2]]=+(ob[num1])<<+(ob[num2])
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
	else if(op=="OR"){ob[arr[2]]=+(ob[num1])|+(ob[num2])
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
	else{
	console.log("eksik op ",op)
	}
}
if(ob[num1]!=undefined&&/[0-9]+/.test(num2)){
if(op=="AND"){ob[arr[2]]=+(ob[num1])&+(num2)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else if(op=="OR"){ob[arr[2]]=+(ob[num1])|+(num2)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else if(op=="RSHIFT"){ob[arr[2]]=+(ob[num1])>>+(num2)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else if(op=="LSHIFT"){ob[arr[2]]=+(ob[num1])<<+(num2)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else {}
}
if(ob[num2]!=undefined&&/[0-9]+/.test(num1)){
if(op=="AND"){ob[arr[2]]=+(ob[num2])&+(num1)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else if(op=="OR"){ob[arr[2]]=+(ob[num2])|+(num1)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else if(op=="RSHIFT"){ob[arr[2]]=+(num1)>>+(ob[num2])
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else if(op=="LSHIFT"){ob[arr[2]]=+(num1)<<+(ob[num2])
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else {}
}
if(/[0-9]+/.test(num1)&&/[0-9]+/.test(num2)){
if(op=="AND"){ob[arr[2]]=+(num1)&+(num2)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else if(op=="OR"){ob[arr[2]]=+(num1)|+(num2)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else if(op=="RSHIFT"){ob[arr[2]]=+(num1)>>+(num2)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else if(op=="LSHIFT"){ob[arr[2]]=+(num1)<<+(num2)
fs.appendFileSync("newpuzzle.txt",x+"\n")
return false;
}
else {}
}

console.log(arr[1],arr[1].split(" "),op,num1 ,num2)
}


return x

})
text=text.filter(x=>x!=false)

}
console.log(ob)

