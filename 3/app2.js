const fs=require("fs")
const path=require("path")

let text=""
let arr=[[0,0]]
let arr1=[]
let arr2=[]



fs.readFile(__dirname+"/puz2.txt",{encoding:"UTF-8"},function(err,data){
if(!err){
text=data
sol(data)
}
else
console.log(err)
})


function sol(text){
	let sant=text.split("").map((x,y)=>{
	if(y%2==0)
	return x
	return ""

	}).join("")

	let rob= text.split("").map((x,y)=>{
	if(y%2==1)
	return x
	return 
	}).join("")

	cond(sant)
	cond(rob)
	y()


}
function cond(text){
	let X=0
	let Y=0
	text.split("").map(x=>{
		if(x=="^"){
		Y+=1
		arr.push([X,Y])
		}
		if(x=="v"){
		Y-=1
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


	})	

}
function y(){
arr.sort((x,y)=>{
if(x[0]-y[0])
return x[0]-y[0]
return x[1]-y[1]
})
arr.map(x=>{
x=x.join("")
if(!arr1.includes(x)){
arr1.push(x)
}
else{
if(!arr2.includes(x))
arr2.push(x)
}
})

console .log(arr,arr1,arr2,arr1.length)
}




