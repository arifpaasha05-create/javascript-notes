let Name = prompt("Enter the costumer name:")
let price = Number(prompt("Enter the product price"))
let quantity = Number(prompt("Enter quantity"))
let coupon = prompt("Enter the coupon code ")
let member = prompt("Enter the membership statusv?(yes/no)")
let total;
let discount;
let delivery;
let finalbill;
let amount;
amount = price*quantity;

if(coupon == "save10"){
    discount=amount*10/100;
}
else if (coupon == "world20"){
    discount = amount*20/100;
}
else {
    discount =0;

}
if( member=="yes"){
    discount=discount+amount*5/100;
}
else{
    discount=discount+0;
}
total=amount-discount;
if(total>2000){
    delivery=0;
}
else{
    delivery=100;
}
finalbill = total+delivery;
document.getElementById("bill").innerText=`Coustomer Name:`+Name+`\n`+`Total amount:`+total+`\n`+`Discount:`+discount+`\n`+`Delivary charges:`+delivery+`\n`+`Final bill:`+finalbill ;