const products=[
    {id: 1,name:"Radio",Image:"https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/08/full/1694194932-5021.png",price:800},
    {id: 2,name:"Mobile",Image:"https://image01-in.oneplus.net/media/202412/19/a912a30aabb4719a7052a16e3ac77765.png?x-amz-process=image/format,webp/quality,Q_80",price:40000},
    {id: 3,name:"Laptop",Image:"https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg",price:60000},
    {id: 4,name:"smart Watch",Image:"https://m.media-amazon.com/images/I/61icsCcbdKL.jpg",price:1500},
    {id: 5,name:"cycle",Image:"https://vescocycles.com/cdn/shop/files/IMG01_195aaa11-13a5-49ad-b76b-c4576eb0b7d3.jpg?v=1708425263",price:3000},
    {id: 6,name:"Toy",Image:"https://www.jiomart.com/images/product/original/rv1ownrvnr/hug-n-feel-soft-toys-brown-polyester-and-fabric-teddy-bear-soft-toy-6-feet-product-images-orv1ownrvnr-p591552907-0-202205240428.jpg?im=Resize=(1000,1000)",price:500},
    {id: 7,name:"Radio",Image:"https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/08/full/1694194932-5021.png",price:800},
    {id: 8,name:"Mobile",Image:"https://image01-in.oneplus.net/media/202412/19/a912a30aabb4719a7052a16e3ac77765.png?x-amz-process=image/format,webp/quality,Q_80",price:40000},
    {id: 9,name:"Laptop",Image:"https://image01-in.oneplus.net/media/202412/19/a912a30aabb4719a7052a16e3ac77765.png?x-amz-process=image/format,webp/quality,Q_80",price:40000},
    {id: 10,name:"smart watch",Image:"https://m.media-amazon.com/images/I/61icsCcbdKL.jpg",price:1500},
    {id: 11,name:"cycle",Image:"https://vescocycles.com/cdn/shop/files/IMG01_195aaa11-13a5-49ad-b76b-c4576eb0b7d3.jpg?v=1708425263",price:3000},
    {id: 12,name:"Toy",Image:"https://www.jiomart.com/images/product/original/rv1ownrvnr/hug-n-feel-soft-toys-brown-polyester-and-fabric-teddy-bear-soft-toy-6-feet-product-images-orv1ownrvnr-p591552907-0-202205240428.jpg?im=Resize=(1000,1000)",price:500},
    {id: 13,name:"bike",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Zv3_6VPji7Z1Uy89qI9LRDA_Nw-6_CzgA&s",price:50000},
    {id: 14,name:"Thar",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzoZWB1noYdlDpIMG79jvfbJ6JUO4-ZUZ3g&s",price:70000},
    {id: 15,name:"books",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihHs27RhbEozWAS9KzYQI-g_0vcjJh0WGlw&s",price:200},
    {id: 16,name:"bike",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Zv3_6VPji7Z1Uy89qI9LRDA_Nw-6_CzgA&s",price:50000},
]
//Render Products

function renderProducts(products,productList){
    const container = document.getElementById(productList);
    container.innerHTML="";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");
        productDiv.innerHTML= `
        <img src = "${product.Image}"/>
        <h3>${product.name}</h3>
        <h2>${product.price}</h2>
        <button onclick = "addToCart(${product.id})">Add to Cart</button>
        `
        container.appendChild(productDiv);
    })
}

//search functionality
function searchProducts(query){
    const filterProducts = products.filter(product => 
        product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    renderProducts(filterProducts,"productList");
}
//Add EventListener to button
document.getElementById("searchButton")?.addEventListener("click",() => {
    const query = document.getElementById("productSearch").value;
    searchProducts(query);
})

//Sorting
function sortProducts(criteria){
    if(criteria === "price"){
        return products.sort((a,b) => a.price-b.price);
    }
    return products;
}

//Adding Event listners
document.getElementById("sortOptions")?.addEventListener("change",(event)=>{
    const sortedProducts = sortProducts(event.target.value);
    renderProducts(sortedProducts,"productList");
})
//Add to cart
function addToCart(productId){
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(`${product.name} is added to cart`)
    renderCart();
}
//Render items in cart

function renderCart(){
    const cart = JSON.parse(localStorage.getItem("cart"))||[];
    const container = document.getElementById("cartItems");
    container,innerHTML="";
    if(cart.length == 0){
        container.innerHTML="<h1>Your cart is Empty</h1>"
    }
    cart.forEach(item =>  {
    const cartDiv = document.createElement("div");
    cartDiv.classList.add("cart-item");
    cartDiv.innerHTML= `
    <img src = "${item.Image}"/>
    <h3>${item.name}</h3>
    <h2>${item.price}</h2>
    <button onclick="removeFromCart(${item.id})">Remove</button>
    `
    container.appendChild(cartDiv);
})
}
//Remove from cart

function removeFromCart(productId){
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    cart =cart.filter(item => item.id !== productId);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product is removed successfully");
    renderCart();
}

//calculate subtotal
function renderSubtotal(cart){
    const subtotal = cart.reduce((total,item) => total + item.price,0);
    const subtotalContainer = document.getElementById("subtotal");
    if(cart.length > 0){
        subtotalContainer.innerHTML = `Subtotal : Rs.${subtotal}`
    }else{
        subtotalContainer.innerHTML = `No items in the cart`
    }
}

if(document.getElementById("productList"))renderProducts(products,"productList");
if(document.getElementById("cartItems"))renderCart();