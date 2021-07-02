var button = document.getElementById("butSubmit")

button.addEventListener("click", function() {
    var ourReq = new XMLHttpRequest();

    ourReq.open("GET", "https://catfact.ninja/fact");

    ourReq.onload = function(){
        var fact = document.createElement("div");
        fact.setAttribute("id","fact");
        
        fact.innerHTML = JSON.parse(ourReq.responseText)["fact"];

        fact.style = 'text-align: center;color: green;font-family: "Comic Sans MS", cursive, sans-serif;'

        var element = document.getElementsByClassName("wrapper");

        element[0].appendChild(fact)
    }
    
    ourReq.send()
})

