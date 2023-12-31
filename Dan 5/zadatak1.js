function addItem(event) {
    event.preventDefault();
    let newItemName = document.getElementById("unos").value;
    console.log(newItemName);
    if (newItemName) {
        document.getElementById("items").innerHTML +=
            "<li class='list-group-item'>" + newItemName + "<button>x</button>" + "</li>";
           
    document.getElementById("unos").value="";
    }
}

document.querySelector("#submit").addEventListener("click", addItem);

var itemsList = document.getElementById("items");

itemsList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        var listItem = event.target.parentElement;
        itemsList.removeChild(listItem);
    }
});

const searchInput = document.getElementById('pretraga');
const suggestionList = document.getElementById('suggestion-list');
const itemList = document.getElementById('items');

searchInput.addEventListener("input", searchSuggestions);

function searchSuggestions() {
    console.log(searchInput.value.toLowerCase())
    const searchText = searchInput.value.toLowerCase();
    suggestionList.innerHTML = ""; 
    for (let i = 0; i < itemList.children.length; i++) {
        const itemText = itemList.children[i].textContent.toLowerCase();
        if (itemText.startsWith(searchText)) {
            const suggestionItem = document.createElement('option');
            suggestionItem.textContent = itemList.children[i].textContent.substring(0,itemList.children[i].textContent.length-1);
            suggestionList.appendChild(suggestionItem);
        
        }
    
    }
}

document.getElementById("suggestion-list").addEventListener("change", function(event){
    let selectedValue = event.target.value;
    console.log(selectedValue)
    searchInput.value = selectedValue;
    const searchText = searchInput.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase();
        if (itemText.includes(searchText)) {
            items[i].style.backgroundColor = "grey";
        } else {
        items[i].style.backgroundColor = "white";
        }
    }


})

// searchInput.addEventListener("input", Search);

// function Search() {
//     const searchText = searchInput.value.toLowerCase();
//     const items = itemList.getElementsByTagName('li');

//     for (let i = 0; i < items.length; i++) {
//         const itemText = items[i].textContent.toLowerCase();
//         if (itemText.includes(searchText)) {
//             items[i].style.display = 'block';
//         } else {
//             items[i].style.display = 'none';
//         }
//     }
// }


//Jovana Ikovic
//Aleksa Radnic