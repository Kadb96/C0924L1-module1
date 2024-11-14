class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

function showAddProductForm() {
    addProductForm.classList.toggle("show");
}

function showProductList() {
    productList.classList.toggle("hide");
}

function updateProductList() {
    let update = "<tr>" +
        "<th>Number</th>\n" +
        "<th>Id</th>\n" +
        "<th>Name</th>\n" +
        "<th>Price</th>\n" +
        "<th>Adjust</th>\n" +
        "<th>Delete</th>\n" +
        "</tr>"
    for (let i = 0; i < product.length; i++) {
        update += "<tr>\n" +
            "<td>" + i + 1 + "</td>\n" +
            "<td>" + productArray[i].id + "</td>\n" +
            "<td>" + productArray[i].name + "</td>\n" +
            "<td>" + productArray[i].price + "</td>\n" +
            "<td><button onclick='adjustProduct(" + i + ")'>Adjust</button></td>\n" +
            "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>\n" +
            "</tr>"
    }
    productList.innerHTML = update;
}

function addNewProduct() {
    if (id.value !== "" && name.value !== "" && price.value !== "") {
        let newProduct = new Product(id.value, name.value, price.value);
        productArray.push(newProduct);
    } else {
        alert(`Please fill all the information`);
    }
    updateProductList();
}

function adjustProduct(index) {
    let nameAdjust = prompt(`Please enter new ID`);
    let priceAdjust = prompt(`Please enter new price`);
    productArray[index].setName(nameAdjust);
    productArray[index].setPrice(priceAdjust);
    updateProductList();
}

function deleteProduct(index) {
    productArray.splice(index, 1);
    updateProductList();
}

let addProductForm = document.getElementById("addProductForm");
let productList = document.getElementById("productList");
let id = document.getElementById("id");
let name = document.getElementById("name");
let price = document.getElementById("price");
let productArray = [];
