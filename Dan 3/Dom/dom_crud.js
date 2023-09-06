let newItem = document.createElement("li");
console.log(newItem);
// newItem.innerText = "Item 5";
let newItemText = document.createTextNode("Item 5");
newItem.appendChild(newItemText);

let list = document.getElementById("items");
list.appendChild(newItem);

newItem.classList.add("list-group-item");

// list.querySelector("li").classList.remove("list-group-item");

// let secondItem = list.children[1];
// list.insertBefore(newItem, secondItem);

// list.innerHTML = "<li class='list-group-item'>Item 5</li>"

// list.remove();
// list.removeChild(list.firstElementChild);