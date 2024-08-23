const fs=require("fs")
let text=fs.readFileSync("./puzzle.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x!="")
let arr=[]
let arr1=[]
for(let i=0;i<1000;i++){
for(let j=0;j<1000;j++){
arr1[j]=0
}
arr[i]=arr1
arr1=[]
}
let arr2=["turn on","turn off","toggle"]



text.map(x=>{
let op=""
let x1,x2,y1,y2
arr2.map(y=>{
if(x.includes(y))
op=y
})

x=x.split(" ")
if(op=="turn on"){

x1=+(x[2].split(",")[0])
y1=+(x[2].split(",")[1])
x2=+(x[4].split(",")[0])
y2=+(x[4].split(",")[1])
if(x1>x2){
let temp=x1
x1=x2
x2=temp
}
if(y1>y2){
let temp=y1
y1=y2
y2=temp
}
fill([x1,x2,y1,y2],1)
}
if(op=="turn off"){
x1=+(x[2].split(",")[0])
y1=+(x[2].split(",")[1])
x2=+(x[4].split(",")[0])
y2=+(x[4].split(",")[1])
if(x1>x2){
let temp=x1
x1=x2
x2=temp
}
if(y1>y2){
let temp=y1
y1=y2
y2=temp
}
fill([x1,x2,y1,y2],0)

}
if(op=="toggle"){

x1=+(x[1].split(",")[0])

y1=+(x[1].split(",")[1])
x2=+(x[3].split(",")[0])
y2=+(x[3].split(",")[1])
if(x1>x2){
let temp=x1
x1=x2
x2=temp
}
if(y1>y2){
let temp=y1
y1=y2
y2=temp
}
fill([x1,x2,y1,y2],-1)
}

})
function fill(arrs,n){
console.log(n,arrs)
let t="",t2
if(n==-1){
	for(t=arrs[0];t<=arrs[1];t++){
		for(t2=arrs[2];t2<=arrs[3];t2++){
		
	arr[t2][t]=1-arr[t2][t]

		}


	}	


}
else{
arrs=arrs.map(x=>+x)
for(t=arrs[0];t<=arrs[1];t++){
                for(t2=arrs[2];t2<=arrs[3];t2++){
arr[t2][t]=n
                }


        }


}


}

function fin(arr){
let res=0
arr.map(x=>{
x.map(y=>{
if(y==1)
res+=1
})

})
return res
}
console.log(fin(arr))
