let products = [
    { item: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { item: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { item: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


function displayProducts() {
    let container = document.getElementById('product-container');

    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';

        let productName = document.createElement('h2');
        productName.textContent = product.item;

        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        container.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);


function handleSubmit(event){
    event.preventDefault();

    const formElements = event.target.elements;
    const userInfo = [];
    for (let element of formElements){
        if (element.checked){
            userInfo.push(element.value)
        }
    }


    const data = {
        name: formElements.username.value,
        email: formElements.email.value,
        message: formElements.message.value,
    }
    console.log(data);
    event.target.reset();
}



function changeColor() {
    document.getElementById('box').style.color = randomColors();
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



function handleMouseOver() {
    document.getElementById('mouse').style.color = randomColors();
}

