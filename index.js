console.log("Ready")

var getBtn = document.getElementById('btn')

var editPart = document.getElementById('result')

var firName = document.getElementById('name1')

var secName = document.getElementById('name2')


getBtn.onclick = function(e){

    if(firName.value == "" || secName.value ==""){
        editPart.innerHTML="Put Some Names First!!!" 
    }

else{
  
        editPart.innerHTML = "Love Percentage is " + Math.floor(Math.random() * 100)

    e.preventDefault()
}  
  



}