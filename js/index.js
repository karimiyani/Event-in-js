const addProductBtn = document.querySelector("button");
addProductBtn.addEventListener("click", (e) => {
    console.log(e);
});
// PointerEvent {isTrusted: true, pointerId: 2147483647, width: 1, height: 1, pressure: 0, …}

addProductBtn.addEventListener("click", (e) => {
    console.log(e.target.textContent);
});
// add product


// How change text of button
addProductBtn.addEventListener("click", (e) => {
    e.target.textContent = "clicked";
});

//how we can click on button then all the prouct remove??
//first select product
const pTags = document.querySelectorAll(".product");
//step two get button
const removeBtn = document.querySelector("#remove-product");
//step three  remove item
removeBtn.addEventListener("click", (e) => {
    pTags.forEach ((item) => {
        item.remove();
    })
})