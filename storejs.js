$(document).ready(function(){
    console.log("ready");

    var store_gold = document.getElementById("store_gold");
    var store_silver = document.getElementById("store_silver");
    var store_rose = document.getElementById("store_rose");
    var store_img = document.getElementById("store_img");
    var place_order = document.getElementById("place_order");
    
    var order_confirm = document.getElementById("order_confirm");
    var order_exit = document.getElementById("order_exit");
    
    store_gold.onclick = function(){
        store_silver.style.backgroundColor = 'white';
        store_rose.style.backgroundColor = 'white';
        store_gold.style.backgroundColor = 'rgb(255, 240, 195)';
        store_img.src = 'aurum_gold.png';
    }
    
    store_silver.onclick = function(){
        store_silver.style.backgroundColor = 'rgb(218, 219, 224)';
        store_rose.style.backgroundColor = 'white';
        store_gold.style.backgroundColor = 'white';
        store_img.src = 'ar_silver.jpg';
    }
    
    store_rose.onclick = function(){
        store_silver.style.backgroundColor = 'white';
        store_gold.style.backgroundColor = 'white';
        store_rose.style.backgroundColor = 'rgb(254, 200, 190)';
        store_img.src = 'rose_gold2.png';
    }
    
    place_order.onclick = function(){
        order_confirm.style.marginLeft = '15vw';
        order_confirm.style.transition = '0.5s';
    }
    
    order_exit.onclick = function(){
        order_confirm.style.marginLeft = '100vw';
        order_confirm.style.transition = '0s';
    }
})