// console.log(document);
// console.log(document.title);
// console.dir(document);

document.title = "Novi title";

// console.log(document.body);

let list = document.getElementById("items");
// console.log(list);

// list.innerHTML = "<p>Ovo je test.</p>";

let items = document.querySelectorAll("#items li");
// let items = list.getElementsByClassName("list-group-item");
// console.log(items);

for (let item of items) {
    // data-name -> dataName
    item.setAttribute("style", "background-color: blue");
    item.style.color = "white";
}

items[0].removeAttribute("style");
items[0].setAttribute("id", "first-item");

let header = document.getElementById("header-title");
header.innerText = "Novi naslov";
// console.log(header.textContent);
// console.log(header.innerHTML);
// console.log(header.innerText);

let darkButtons = document.getElementsByClassName("btn-dark");
// console.log(darkButtons);

// console.log(darkButtons[0].value);
darkButtons[0].setAttribute("disabled", true);
darkButtons[0].value = "Prihvati";

let form = document.getElementsByTagName("form")[0];
// console.log(form.firstElementChild);
// console.log(form.lastChild);

let inputs = form.querySelectorAll("input");
// console.log(inputs);

// console.log(form.children);
// console.log(form.childNodes);