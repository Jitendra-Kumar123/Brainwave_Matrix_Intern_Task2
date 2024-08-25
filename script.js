// show real products

var products = [
    { name: "white chair", headline: "soft like cloud", price: "$299", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    { name: "blue chair", headline: "happy feeling", price: "$199", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww" },
    { name: "Traditional chair", headline: "feeling like greenary", price: "$99", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww" }

];


var popular = [
    { name: "Red chair", headline: "Painted Blood Red", price: "$299", image: "https://images.unsplash.com/photo-1583161904954-d292590713e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlZCUyMGNoYWlyfGVufDB8fDB8fHww" },
    { name: "blue chair", headline: "happy feeling", price: "$199", image: "https://images.unsplash.com/photo-1638285852125-c6ed00ff2065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwY2hhaXJzfGVufDB8fDB8fHww" },
    { name: "Traditional chair", headline: "feeling like greenary", price: "$99", image: "https://plus.unsplash.com/premium_photo-1711651344613-58629bed4f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0aWZ1bCUyMGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D" }

];
// cart functionlity
var cart = [];

function addProduct() {
    var clutter = "";
    products.forEach(function (product, index) {
        clutter += `   <div class="product w-fit rounded-xl p-2 bg-white">
<div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow">
<img class="w-full h-full object-cover"  src="${product.image}" />
</div>
<div class="data w-full px-2 py-5">
    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
    <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
            <h3 class="font-semibold opacity-20">${product.headline}</h3>
            <h4 class="font-semibold mt-2">${product.price}</h4>
        </div>
        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
             data-index="${index}"   class="add ri-add-line"></i></button>
    </div>
</div>
</div>`;
    })

    document.querySelector(".products").innerHTML = clutter;
}

addProduct();

function addPopularProducts() {
    var clutter = "";
    popular.forEach(function (product) {
        clutter += ` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
<div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
    <img class="w-full h-full object-cover"
        src="${product.image}"
        alt="">
</div>
<div class="data py-2 w-full">
    <h1 class="leading-none font-semibold">${product.name}</h1>
    <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
    <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
</div>
</div>`;
    })

    document.querySelector(".populars").innerHTML = clutter;
}

addPopularProducts();

// cart functionlity

function addToCart() {
    document.querySelector(".products")
        .addEventListener("click", function (details) {
            if (details.target.classList.contains('add')) {

                cart.push(products[details.target.dataset.index])
            }
        })
}

addToCart();

function showCart() {
    document.querySelector(".carticon")
        .addEventListener("click", function () {
            document.querySelector(".cartexpnd").style.display = "block";


            var clutter = "";
            cart.forEach(function (prod, index) {
                clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class= "w-10 h-10 flex-shrink-0 rounded-lg  overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.image}" />
                </div>
                <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                </div>
                </div>`;
            })

            document.querySelector(".cartexpnd")
                .innerHTML = clutter;

        });
}

showCart();