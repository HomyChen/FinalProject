$(document).ready(function(){
    console.log("ready");

    var store_gold = document.getElementById("store_gold");
    var store_silver = document.getElementById("store_silver");
    var store_rose = document.getElementById("store_rose");
    var store_img = document.getElementById("store_img");
    var place_order = document.getElementById("place_order");
    
    var order_next = document.getElementById("order_next");
    var order_exit = document.getElementById("order_exit");
    
    store_gold.onclick = function(){
        store_silver.style.backgroundColor = 'white';
        store_rose.style.backgroundColor = 'white';
        store_gold.style.backgroundColor = 'rgb(255, 240, 195)';
        store_img.src = 'aurum_gold.png';
        user_selection = 'Aurous Gold';
    }
    
    store_silver.onclick = function(){
        store_silver.style.backgroundColor = 'rgb(218, 219, 224)';
        store_rose.style.backgroundColor = 'white';
        store_gold.style.backgroundColor = 'white';
        store_img.src = 'ar_silver.jpg';
        user_selection = 'Argentum Silver';
    }
    
    store_rose.onclick = function(){
        store_silver.style.backgroundColor = 'white';
        store_gold.style.backgroundColor = 'white';
        store_rose.style.backgroundColor = 'rgb(254, 200, 190)';
        store_img.src = 'rose_gold2.png';
        user_selection = 'Rose Gold';
    }
    
    place_order.onclick = function(){
        order_confirm.style.marginLeft = '15vw';
        order_confirm.style.transition = '0.5s';
    }
    
    order_exit.onclick = function(){
        order_confirm.style.marginLeft = '100vw';
        order_confirm.style.transition = '0s';
    }
    
    var visa = document.getElementById("visa");
    var mastercard = document.getElementById("mastercard");
    
    var store_name_input = document.getElementById("store_name_input");
    
    var store_email_input = document.getElementById("store_email_input");
    
    var store_address_input1 = document.getElementById("store_address_input1");
    
    var store_address_input2 = document.getElementById("store_address_input2");
    
    var store_city_input = document.getElementById("store_city_input");
    
    var store_state_input = document.getElementById("store_state_input");
    
    var store_zip_input = document.getElementById("store_zip_input");
    
    var store_country_input = document.getElementById("store_country_input");
    
    var store_telephone_input = document.getElementById("store_telephone_input");
    
    var name_card = document.getElementById("name_card");
    var card_num = document.getElementById("card_num");
    var card_exp = document.getElementById("card_exp");
    
    var address_error = document.getElementById("address_error");
    var payment_error = document.getElementById("payment_error");
    
    var email_check = /^[a-zA-Z0-9\-_\.]{3,20}@[a-zA-Z0-9\-]{3,20}\.(com|ca|info|org)$/;
    var num_check = /^[0-9]{1,100}$/;
    var alpha_check = /^[a-zA-Z' ]{1,100}$/;
    var alphanum_check = /^[a-zA-Z0-9'. ]{1,200}$/;
    
    var card_check = false;
    
    visa.onclick = function(){
        visa.style.backgroundColor = 'orange';
        visa.style.color = 'white';
        mastercard.style.backgroundColor = 'white';
        mastercard.style.color = 'dimgrey';
        card_check = true;
    }
    
    mastercard.onclick = function(){
        mastercard.style.backgroundColor = 'orange';
        mastercard.style.color = 'white';
        visa.style.backgroundColor = 'white';
        visa.style.color = 'dimgrey';
        card_check = true;
    }
    
    var store_email_check = false;
    
    store_email_input.onkeyup = function(){
        if (email_check.test(store_email_input.value)== true){
            store_email_input.style.color ="green";
            address_error.innerHTML = ""; 
            store_email_check = true;
        }else if (store_email_input.value == ''){
            address_error.innerHTML = "Email is required.";
            store_email_check = false;
        }else{
            store_email_input.style.color ="red";
            address_error.innerHTML = "Email can only be 3-20 characters long and must end in .com/.ca/.info/.org";
            store_email_check = false;
        }
    }
    
    var store_name_check = false;
    
    store_name_input.onkeyup = function(){
        if (alpha_check.test(store_name_input.value)==true){
            store_name_input.style.color = 'green';
            address_error.innerHTML = ""; 
            store_name_check = true;
        }else if (store_name_input.value == ''){
            address_error.innerHTML = "Full name is required.";
            store_name_check = false;
        }else{
            store_name_input.style.color ="red";
            address_error.innerHTML = "Your name may only contain letters.";
            store_name_check = false;
        }
    }
    
    var store_address1_check = false;
    
     store_address_input1.onkeyup = function(){
        if (alphanum_check.test(store_address_input1.value)==true){
            store_address_input1.style.color = 'green';
            address_error.innerHTML='';
            store_address1_check = true;
        }else if (store_address_input1.value == ''){
            address_error.innerHTML= "Address Line 1 is required.";
            store_address1_check = false;
        }else{
            store_address_input1.style.color = 'red';
            address_error.innerHTML = 'Address Line 1 cannot contain any special characters.';
            store_address1_check = false;
        }
    }
     
    store_address_input2.onkeyup = function(){
        if (num_check.test(store_address_input2.value)==true){
            store_address_input2.style.color = 'green';
            address_error.innerHTML='';
        }else if (store_address_input2.value == ''){
            address_error.innerHTML= "";
        }else{
            store_address_input2.style.color = 'red';
            address_error.innerHTML = 'Address Line 2 must contain only numbers or left blank';
        }
    }
    
    var store_city_check = false;
    
    store_city_input.onkeyup = function(){
        if (alpha_check.test(store_city_input.value)==true){
            store_city_input.style.color = 'green';
            address_error.innerHTML = ""; 
            store_city_check = true;
        }else if (store_city_input.value == ''){
            address_error.innerHTML = "City is required.";
            store_city_check = false;
        }else{
            store_city_input.style.color ="red";
            address_error.innerHTML = "City name may only contain letters.";
            store_city_check = false;
        }
    }
    
    var store_state_check = false;
    
    store_state_input.onkeyup = function(){
        if (alpha_check.test(store_state_input.value)==true){
            store_state_input.style.color = 'green';
            address_error.innerHTML = ""; 
            store_state_check = true;
        }else if (store_state_input.value == ''){
            address_error.innerHTML = "State/Province/Region is required.";
            store_state_check = false;
        }else{
            store_state_input.style.color ="red";
            address_error.innerHTML = "State/Province/Region name may only contain letters.";
            store_state_check = false;
        }
    }
    
    var store_zip_check = false;
    
    store_zip_input.onkeyup = function(){
        if (alphanum_check.test(store_zip_input.value)==true){
            store_zip_input.style.color = 'green';
            address_error.innerHTML='';
            store_zip_check = true;
        }else if (store_zip_input.value == ''){
            address_error.innerHTML= "ZIP/Postal Code is required.";
            store_zip_check = false;
        }else{
            store_zip_input.style.color = 'red';
            address_error.innerHTML = 'ZIP/Postal Code cannot contain any special characters.';
            store_zip_check = false;
        }
    }
    
    var store_country_check = false;
    
    store_country_input.onkeyup = function(){
        if (alpha_check.test(store_country_input.value)==true){
            store_country_input.style.color = 'green';
            address_error.innerHTML = ""; 
            store_country_check = true;
        }else if (store_country_input.value == ''){
            address_error.innerHTML = "Country is required.";
            store_country_check = false;
        }else{
            store_country_input.style.color ="red";
            address_error.innerHTML = "Country name may only contain letters.";
            store_country_check = false;
        }
    }
    
    store_telephone_input.onkeyup = function(){
        if (num_check.test(store_telephone_input.value)==true){
            store_telephone_input.style.color = 'green';
            address_error.innerHTML='';
        }else if (store_telephone_input.value == ''){
            address_error.innerHTML= "";
        }else{
            store_telephone_input.style.color = 'red';
            address_error.innerHTML = 'Telephone number must contain only numbers';
        }
    }
    
    var card_num_check = /^[0-9]{16}$/;
    var card_num_input_check = false;
    
    card_num.onkeyup = function(){
        if(card_num_check.test(card_num.value)==true){
            card_num.style.color = 'green';
            payment_error.innerHTML='';
            card_num_input_check = true;
        }else if (card_num.value == ''){
            payment_error.innerHTML= "Card number is required";
            card_num_input_check = false;
        }else{
            card_num.style.color = 'red';
            payment_error.innerHTML = 'Card number must contain only numbers and be 16 digits long. Enter your number with no spaces or dashes';
            card_num_input_check = false;
        }
    }
    
    var card_name_check = false;
    
    name_card.onkeyup = function(){
        if (alpha_check.test(name_card.value)==true){
            name_card.style.color = 'green';
            payment_error.innerHTML = ""; 
            card_name_check = true;
        }else if (name_card.value == ''){
            payment_error.innerHTML = "Your full name, as written on the card, is required.";
            card_name_check = false;
        }else{
            name_card.style.color ="red";
            payment_error.innerHTML = "Your name may only contain letters.";
            card_name_check = false;
        }
    }
    
    var card_exp_check = /^[0-1][1-9]\/[0-9][0-9]$/;
    var card_exp_input_check = false;
    
    card_exp.onkeyup = function(){
        if (card_exp_check.test(card_exp.value)==true){
            card_exp.style.color = 'green';
            payment_error.innerHTML = ""; 
            card_exp_input_check = true;
        }else if (card_exp.value == ''){
            payment_error.innerHTML = "Credit card expiration date is required.";
            card_exp_input_check = false;
        }else{
            card_exp.style.color ="red";
            payment_error.innerHTML = "Credit card expiration date must be written in the format mm/yy. For example, 03/15 for March 2015";
            card_exp_input_check = false;
        }
    }
    
    var final_page = document.getElementById("final_page");
    
    var over_back = document.getElementById("over_back");
    
    over_back.onclick = function(){
        order_confirm.style.marginLeft = '15vw';
        final_page.style.marginLeft = '100vw';
    }
    
    var inputted_name = document.getElementById("inputted_name");
    var inputted_email = document.getElementById("inputted_email");
    var inputted_address = document.getElementById("inputted_address");
    var order_item_name = document.getElementById("order_item_name");
    var order_item_img = document.getElementById("order_item_img");
    
    order_next.onclick = function(){
        if (card_check == true && store_email_check == true && store_name_check == true && store_address1_check == true && store_city_check == true && store_state_check == true && store_zip_check == true && store_country_check == true && card_num_input_check == true && card_name_check == true && card_exp_input_check == true){
            final_page.style.marginLeft = '15vw';
            order_confirm.style.marginLeft = '100vw';
            order_confirm.style.transition = '0s';
            inputted_name.innerHTML = store_name_input.value;
            inputted_email.innerHTML = store_email_input.value;
            inputted_address.innerHTML = store_address_input2.value+' '+store_address_input1.value+' '+store_city_input.value+', '+store_state_input.value+', '+store_country_input.value+' '+store_zip_input.value;
        }else{
            payment_error.innerHTML = 'Please ensure the form is filled out properly.';
            }
    }
    
     order_exit.onclick = function(){
        order_confirm.style.marginLeft = '100vw';
        order_confirm.style.transition = '0s';
        address_error.innerHTML = '';
        payment_error.innerHTML = '';
        store_email_input.value = '';
        store_name_input.value = '';
        store_address_input1.value = '';
        store_address_input2.value = '';
        store_city_input.value = '';
        store_state_input.value = '';
        store_zip_input.value = '';
        store_country_input.value = '';
        store_telephone_input.value = '';
        name_card.value = '';
        card_num.value = '';
        card_exp.value = '';
        card_check = false;
        store_email_check = false;
        store_name_check = false;
        store_address1_check = false;
        store_city_check = false;
        store_state_check = false;
        store_zip_check = false;
        store_country_check = false;
        card_num_input_check = false;
        card_name_check = false;
        card_exp_input_check = false;
    }
    
    store_gold.onclick = function(){
        store_silver.style.backgroundColor = 'white';
        store_rose.style.backgroundColor = 'white';
        store_gold.style.backgroundColor = 'rgb(255, 240, 195)';
        store_img.src = 'aurum_gold.png';
        order_item_name.innerHTML = 'Aurous Gold LookFit';
        order_item_img.src = 'aurum_gold.png'
    }
    
    store_silver.onclick = function(){
        store_silver.style.backgroundColor = 'rgb(218, 219, 224)';
        store_rose.style.backgroundColor = 'white';
        store_gold.style.backgroundColor = 'white';
        store_img.src = 'ar_silver.jpg';
        order_item_name.innerHTML = 'Argentum Silver LookFit';
        order_item_img.src = 'ar_silver.jpg'
    }
    
    store_rose.onclick = function(){
        store_silver.style.backgroundColor = 'white';
        store_gold.style.backgroundColor = 'white';
        store_rose.style.backgroundColor = 'rgb(254, 200, 190)';
        store_img.src = 'rose_gold2.png';
        order_item_name.innerHTML = 'Rose Gold LookFit';
        order_item_img.src = 'rose_gold2.png';
    }
    
    var order_submit = document.getElementById("order_submit");
    var order_done = document.getElementById("order_done");
    
    order_submit.onclick = function(){
        final_page.style.marginLeft = '100vw';
        order_done.style.marginLeft = '30vw';
    }
})