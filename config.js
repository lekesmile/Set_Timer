// Adding an event function to the aseta button


aseta.addEventListener("click", function(e){
    
let infoObject = {
    "otsikkoValue": document.getElementById("otsikko").value,
    "dateValue": document.getElementById("date").value,
    "kloValue" : document.getElementById("klo").value,
    "messageValue" :document.getElementById("message").value
    }
    
    localStorage.setItem('configsetting', JSON.stringify(infoObject));

   e.preventDefault();
   window.location.href = "index.html";
});


