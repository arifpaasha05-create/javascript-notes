
let products = [
    {
        name: "Laptop",
        price: 50000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bGZquTmyZtrsQTPSy9OX9FAazU_OvKS-LaBweiKNkw&s=10",
        stock: true,
        discount: "10%"
    },

    {
        name: "Apple MacBook Air M3",
        price: 150000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRg_aPEz1A1et_r1gF94fKY6Zt8lDfKsuS8NqEvwKW0Q&s=10",
        stock: false,
        discount: "5%"
    },

    {
        name: "Samsung Galaxy S24 Ultra",
        price: 80000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_z8iuZnQsHQfH_vobPRFv-igScGHCPXgbx6DLq5UZaQ&s",
        stock: false,
        discount: "8%"
    },

    {
        name: "Anker PowerCore 24K Power Bank",
        price: 18000,
        imageUrl: "data:image/webp;base64,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",
        stock: true,
        discount: "20%"
    },

    {
        name: "watch",
        price: 15000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYM5TzPYRdtuyWz5A_DyNePtIBwULIf_mup44DcvJcgw&s",
        stock: true,
        discount: "15%"
    },

    {
        name: "LG C4 65-Inch OLED 4K TV",
        price: 40000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFuAY_4kT6cP2gRFgDA3Ezg6GidpE9UuI4M92RNU_lA&s=10",
        stock: false,
        discount: "6%"
    },

     {
        name: "Wireless Noise-Canceling Headphones",
        price: 249.99,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0Hl78-hLRQHCXgzThitpxsk2Dh7-3JPyIjjz6Jf41g&s=10",
        stock: true,
        discount: "5%"
    },

     {
        name: "Mechanical Gaming Keyboard",
        price: 6499,
        imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQocLSrl85ESFY-B0A0TStu2a77mhwzWeRIFFo1MMbjgN4VhGPO6huxq9dR5KE9isBQFxQMJf2_s4EvFB8XnL8fPXfjUwxRCJFHZR9Nf4NOkVWgaCtpBilE8I8ZFdppM8cG7H7v8s5wZY4&usqp=CAc",
        stock: true,
        discount: "10%"
    },

     {
        name: "Portable Bluetooth Speaker",
        price: 15000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fPOGHQUOYzqerXfC-2qL4NwW51ZGATG0xXd3_v1sUA&s=10",
        stock: true,
        discount: "15%"
    },

     {
        name:" Whirlpool 1 Ton Split AC Indoor Unit Copper with Remote " ,
        price: 10700,
        imageUrl: "https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/w/h/whirlpool-split-ac-indoor-unit-1-ton.jpg",
        stock: false,
        discount: "12%"
    },

     {
        name: "Croma 185L Direct Cool Refrigerator Energy Efficient",
        price: 12500,
        imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlvzOmG5570jko_hyJStFQEzp5xEZVMmpXPiT1gQCWVWPKdE4N7gZFR5mgJF7twFO7Y_zmkdqPWuZK1_NhgO2u9NkXZp-xvsTpYBsuxh1Ly7cmWn4XhaQaTmg",
        stock: false,
        discount: "2%"
    },

     {
        name: "Samsung 12 kg/7 kg Front Load Washer Dryer Combo",
        price: 82000,
        imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFSeF_VP4Fi90FtyZ0x98gGZkViyxwDl8CYETrpFIFB5kmXokAzf-y9EQgoZgaDY2VnVJbmzsDDgFskDwIEyk5ww2eR7NM6Kmd-Ibjto4DCjoPzmKVM11l",
        stock: false,
        discount: "20%"
    },
]

let Container = document.getElementById("Container");
for (let i = 0; i < products.length; i++) {
    let discount = parseFloat(products[i].discount)

    let afterdiscount = products[i].price - products[i].price * discount / 100;
    Container.innerHTML += `
    <div class="products">
    <img src="${products[i].imageUrl}"/>
    <h2> products Name:${products[i].name}</h2>
    <p>Price:${products[i].price}</P>
    <p>${products[i].stock ? "Available" : "out of stock"}</p>
    <p>Discount:${products[i].discount}</p>
    <p>afterdiscount:${afterdiscount}</p>
    
    
    </div>
    
    
    `

}

      