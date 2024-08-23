const fs=require("fs")
const path=require("path")
let text=""
let arr=[]
let arr2=[]
let arr3=[]
fs.readFile(__dirname+"/puzzle.txt",{encoding:"UTF-8"},function(err,data){
if(!err){
text=data
sol(text)}
else
console.log(err)


})

function sol(text){
text.split("\n").map(z=>{
	arr=[]
	let X=0
	let Y=0
	z.split("").map(x=>{

	if(x=="^"){
		Y+=1
		arr.push([X,Y])
	}

	if(x==">"){
		X+=1
		arr.push([X,Y])
	}
	if(x=="<"){
		X-=1
		arr.push([X,Y])
	}
	if(x=="v"){
		Y-=1
		arr.push([X,Y])
	}

})

cond(arr)

})

function cond(arr){
arr2=[]
arr=arr.sort((x,y)=>{
if(x[0]-y[0])
return x[0]-y[0]

return x[1]-y[1]

})
arr.map(x=>{
x=x.join("")
if(!arr2.includes(x))
arr2.push(x)
})

console.log(arr2)
arr3.push(arr.length-arr2.length)

}




console.log(arr,2,arr3)
}
