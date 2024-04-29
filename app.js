let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function () {

    if(input.value.trim() === "") {
        alert("Please Type Something in input field");
        return;
    }
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);

    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    li.appendChild(delBtn);
    input.value = "";
});

//EVENT DELEGATION

ul.addEventListener('click', function (event) {
    if(event.target.nodeName == 'BUTTON') {
        let Item = event.target.parentNode;
        Item.remove();
        console.log("deleted");
    }
});