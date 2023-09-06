function addItem(event){
    event.preventDefault();
    let itemToAdd = document.getElementById("newItem").value;
    if (itemToAdd){
        document.getElementById("items").innerHTML 
        += "<li>" + itemToAdd + " <button class='del-btn'>X</button></li>"; 
        document.getElementById("newItem").value = "";
    }   
}

document.querySelector("input[type=submit]").addEventListener("click", addItem);

function removeItem(event){
    event.target.parentElement.remove();
}

let delbtns = document.getElementsByClassName("del-btn");
for (btn of delbtns){
    btn.addEventListener("click", removeItem);
}

document.get