$(document).ready(function () {
    let naming ,Product, Rating, discount, details, Pricing;
    let idNumber = 0;
$("#add").click(function() {
    // e.preventDefault();
     Pricing = $("#Price").val();
     naming = $("#name").val();
     Product = $("#Product").val();
     Rating = $("#Rating").val();
     discount = $("#discount").val();
     details = $("#details").val();
    //  console.log(discount.slice)
    Pricing = Pricing.replace(/[A-z#@%$]+/g, "");
    discount = discount.replace(/[A-z#@%$]+/g, "");
    // console.log(Number(discountNumber));
    // console.log(name + Product + Rating + discount + details);
    if(Pricing && naming && Product && Rating && details ){
        createBox();
            $(".trash").click(function(e) {
                let gettingId = e.target.id;
                let gettingIdParent = $(`#${gettingId}`).parent();
                gettingIdParent.parent().remove();
            });
     
    }else{
        return alert("You need to fill information first");
    }
});

function createBox(){
    const shopListContainer = $("<div>");
    shopListContainer.addClass("shopListContainer");
    shopListContainer.html(`<div class="bin"> <i class="fa-solid fa-trash trash" id="${idNumber}"></i></div>`);

    const imageContainer = $("<div>");
    imageContainer.addClass("imgContainer");
    if (Product == "hoodie"){
        imageContainer.html('<img src="./img/adidas.png">');   
    }else if (Product == "bag"){
        imageContainer.html('<img src="./img/gucci.png">');   
    }else if (Product == "shoes"){
        imageContainer.html('<img src="./img/nike.png">');   
    }else if (Product == "shirt"){
        imageContainer.html('<img src="./img/levi\'s.png">');   
    }

    const textContainer = $("<div>");
    textContainer.addClass("textContainer");
    textContainer.html(`<div class="textAndIcon"><h3>${naming}</h3><i class="fa-regular fa-heart"></i></div><p>${details}</p>`);
    
    const starRating = $("<div>");
    starRating.addClass("starRating");
    for(let i=0; i< Number(Rating); i++){
        const stars = $("<i>");
        stars.addClass("fa-solid");
        stars.addClass("fa-star");
        starRating.append(stars);
    }
   
    const price = $("<div>");
    price.addClass("price");
    if(discount){
        let dis = Number(Pricing) - (Number(Pricing) * discount)/100;
        price.html(` <span>$ ${dis}</span> <span class="discountPrice">$ ${Pricing}</span> `)
    }else{
        price.html(`<span>$ ${Pricing}</span>`)
    }

    const addCart = $("<div>");
    addCart.addClass("addCart");
    addCart.html(`<button>Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>`);

    shopListContainer.append(imageContainer, textContainer, starRating, price, addCart);
    $(".allShopcontainer").append(shopListContainer);
   idNumber += 1;
};

})
