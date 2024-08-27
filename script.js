const form=document.querySelector("form")

form.addEventListener("submit",e=>{
   e.preventDefault()
  const user=parseInt(document.querySelector("#guess").value)
  const comp=Math.floor(Math.random()*6+1)
const ans=document.querySelector("#answer")
  

if(user==" " ||  user<0 || isNaN(user) || user>6){
   ans.innerHTML="Invalid input"
  }
else if(user==comp){
 ans.innerHTML="You guessed correct"
  }
  else{
   ans.innerHTML=`Your guess in incorrect, actual value is ${comp}`
}
  }
)