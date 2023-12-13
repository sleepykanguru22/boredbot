

const btn = document.getElementById('btn')

function getAct(){
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        document.getElementById("act").textContent = data.activity
    })}

    
btn.addEventListener('click',getAct)
    
