addToCartBtn = document.getElementsByClassName('addToCartBtn');
cartContainer = document.getElementsByClassName('cartContainer')[0];

for (var i = 0;i<addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener('click',updateCartContainer);
}



function updateCartContainer(e) {
    currentaddtoCardBtn = e.target;
    productContainer = currentaddtoCardBtn.parentElement;
    productTitle = productContainer.getElementsByClassName('productTitle')[0].innerText;
    productPrice = productContainer.getElementsByClassName('productPrice')[0].innerText;
    productImage = productContainer.getElementsByClassName('img')[0].src;

    cartTitles = cartContainer.getElementsByClassName('cartTitle');
    for (var i = 0; i < cartTitles.length; i++) {
        if (cartTitles[i].innerText == productTitle) {
            alert('Product already to cart');
            return;
        }
    }


  AddnewRowCard(productTitle,productPrice,productImage);
  }


function AddnewRowCard(productTitle,productPrice,productImage) {
    div = document.createElement('div');
    div.classList.add('row');
    

    insideDivContent =`<div class="row">
    <div class="col-xs-3 cartImage"> <img src="${productImage}"></div>
    <div class="col-xs-3 cartTitle"> ${productTitle} </div>
    <div class="col-xs-3 cartPrice"> ${productPrice}</div>
     <div class="col-xs-3 removeButton"> Remove</div>
</div>`;
     div.innerHTML = insideDivContent;
     cartContainer.appendChild(div);

     totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('৳', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');;




     removeButton = cartContainer.getElementsByClassName('removeButton');
     for(var i= 0; i<removeButton.length;i++){
        removeButton[i].addEventListener('click',removeFrmCart);
     }
    
}

function removeFrmCart(e) {
    e.target.parentElement.remove();
    updatePriceAfterRemove();
    
}
function updatePriceAfterRemove() {
    totalPrice = 0;
    //cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('৳', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');


}