const fs=require("fs")
let text = fs.readFileSync("./puz.txt",{encoding:"UTF-8"}).split("\n").filter(x=>x.length!=0)
let vow=/[aeiou]/g
let  forb=["xy","ab","cd","pq"]
console.log(text)
text=text.map(x=>{
	//forbidden  filter
	if(forb.some(y=>x.includes(y))){
	return false;
	}
console.log("forb")
	//vowel filter
	if((x.match(vow)||"").length<=2){
return false
	}

console.log("vow")

	//repeat filter
let pat=/([a-z])\1+/g
let n=x.match(pat)||""

console.log("n",n)

        if(n.length){
return true

	}
	return false

})
console.log(text.filter(x=>x).length,text)
