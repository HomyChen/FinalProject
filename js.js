$(document).ready(function(){
    console.log("ready");
    
    var circle1But = document.getElementById("circle1");
    var circle2But = document.getElementById("circle2");
    var circle3But = document.getElementById("circle3");
    var circle4But = document.getElementById("circle4");
    var circle5But = document.getElementById("circle5");
    var circle6But = document.getElementById("circle6");
    
    var infoDesc = document.getElementById("infograph_desc");
    
    var submitBut = document.getElementById("submit_But");
    var cusBody = document.getElementById("cusBody");
    var cusImage = document.getElementById("cusImage");
    
    var thankyou = document.getElementById("thankyou");
    
    
    circle1But.onmouseover = function(){
        infoDesc.innerHTML = 
            "Product Specification: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur eleifend enim, nec laoreet magna ultrices ut. Aenean eu elit ac velit laoreet convallis. Sed in vehicula ipsum. Duis malesuada mauris a quam gravida, vel efficitur nibh condimentum. Proin interdum massa ipsum, nec porttitor orci aliquet et. Nullam sollicitudin ex eu tincidunt tristique. Nam imperdiet porttitor sem in gravida. Phasellus eu posuere augue. Nam ut enim scelerisque, hendrerit tellus elementum, semper nisi. Ut diam lorem, fermentum nec enim sit amet, sodales porta lorem. Phasellus semper, ipsum a laoreet luctus, arcu ligula sodales leo, ac egestas ante elit vitae urna. Integer vulputate tempor mauris id rhoncus. Nunc mattis eu ligula in mollis.";
        circle1But.src="product_specs_over.png";
    }
    circle1But.onmouseout = function(){
        circle1But.src="product_specs.png";
    }
    
    circle2But.onmouseover = function(){
        infoDesc.innerHTML = 
            "Product Description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur eleifend enim, nec laoreet magna ultrices ut. Aenean eu elit ac velit laoreet convallis. Sed in vehicula ipsum. Duis malesuada mauris a quam gravida, vel efficitur nibh condimentum. Proin interdum massa ipsum, nec porttitor orci aliquet et. Nullam sollicitudin ex eu tincidunt tristique. Nam imperdiet porttitor sem in gravida. Phasellus eu posuere augue. Nam ut enim scelerisque, hendrerit tellus elementum, semper nisi. Ut diam lorem, fermentum nec enim sit amet, sodales porta lorem. Phasellus semper, ipsum a laoreet luctus, arcu ligula sodales leo, ac egestas ante elit vitae urna. Integer vulputate tempor mauris id rhoncus. Nunc mattis eu ligula in mollis.";
        circle2But.src="product_desc_over.png";
    }
    
    circle2But.onmouseout = function(){
        circle2But.src="product_desc.png";
    }
    circle3But.onmouseover = function(){
        infoDesc.innerHTML = 
            "Fitness Tracking: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur eleifend enim, nec laoreet magna ultrices ut. Aenean eu elit ac velit laoreet convallis. Sed in vehicula ipsum. Duis malesuada mauris a quam gravida, vel efficitur nibh condimentum. Proin interdum massa ipsum, nec porttitor orci aliquet et. Nullam sollicitudin ex eu tincidunt tristique. Nam imperdiet porttitor sem in gravida. Phasellus eu posuere augue. Nam ut enim scelerisque, hendrerit tellus elementum, semper nisi. Ut diam lorem, fermentum nec enim sit amet, sodales porta lorem. Phasellus semper, ipsum a laoreet luctus, arcu ligula sodales leo, ac egestas ante elit vitae urna. Integer vulputate tempor mauris id rhoncus. Nunc mattis eu ligula in mollis.";
        circle3But.src="fitness_tracking_over.png";
    }
    
    circle3But.onmouseout = function(){
        circle3But.src="fitness_tracking.png";
    }
    circle4But.onmouseover = function(){
        infoDesc.innerHTML = 
            "Navigation: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur eleifend enim, nec laoreet magna ultrices ut. Aenean eu elit ac velit laoreet convallis. Sed in vehicula ipsum. Duis malesuada mauris a quam gravida, vel efficitur nibh condimentum. Proin interdum massa ipsum, nec porttitor orci aliquet et. Nullam sollicitudin ex eu tincidunt tristique. Nam imperdiet porttitor sem in gravida. Phasellus eu posuere augue. Nam ut enim scelerisque, hendrerit tellus elementum, semper nisi. Ut diam lorem, fermentum nec enim sit amet, sodales porta lorem. Phasellus semper, ipsum a laoreet luctus, arcu ligula sodales leo, ac egestas ante elit vitae urna. Integer vulputate tempor mauris id rhoncus. Nunc mattis eu ligula in mollis.";
        circle4But.src="navigation_over.png";
    }
    
    circle4But.onmouseout = function(){
        circle4But.src="navigation.png";
    }
    
    circle5But.onmouseover = function(){
        infoDesc.innerHTML = 
            "Activity Log: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur eleifend enim, nec laoreet magna ultrices ut. Aenean eu elit ac velit laoreet convallis. Sed in vehicula ipsum. Duis malesuada mauris a quam gravida, vel efficitur nibh condimentum. Proin interdum massa ipsum, nec porttitor orci aliquet et. Nullam sollicitudin ex eu tincidunt tristique. Nam imperdiet porttitor sem in gravida. Phasellus eu posuere augue. Nam ut enim scelerisque, hendrerit tellus elementum, semper nisi. Ut diam lorem, fermentum nec enim sit amet, sodales porta lorem. Phasellus semper, ipsum a laoreet luctus, arcu ligula sodales leo, ac egestas ante elit vitae urna. Integer vulputate tempor mauris id rhoncus. Nunc mattis eu ligula in mollis.";
        circle5But.src="calendar_over.png";
    }
    circle5But.onmouseout = function(){
        circle5But.src="calendar.png";
    }
    
    circle6But.onmouseover = function(){
        infoDesc.innerHTML = 
            "Testimonial: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur eleifend enim, nec laoreet magna ultrices ut. Aenean eu elit ac velit laoreet convallis. Sed in vehicula ipsum. Duis malesuada mauris a quam gravida, vel efficitur nibh condimentum. Proin interdum massa ipsum, nec porttitor orci aliquet et. Nullam sollicitudin ex eu tincidunt tristique. Nam imperdiet porttitor sem in gravida. Phasellus eu posuere augue. Nam ut enim scelerisque, hendrerit tellus elementum, semper nisi. Ut diam lorem, fermentum nec enim sit amet, sodales porta lorem. Phasellus semper, ipsum a laoreet luctus, arcu ligula sodales leo, ac egestas ante elit vitae urna. Integer vulputate tempor mauris id rhoncus. Nunc mattis eu ligula in mollis.";
        circle6But.src="testimonials_over.png";
    }
    circle6But.onmouseout = function(){
        circle6But.src="testimonials.png";
    }
    
    var watchdisplay = document.getElementById("watchdisplay");
    var watchscreen = document.getElementById("watchscreen");
    
    var name_colour = document.getElementById("name_colour");
    
    var gold = document.getElementById("gold");
    var silver = document.getElementById("silver");
    var rose = document.getElementById("rose");
    
    var tracker_text = document.getElementById("tracker_text");
    var nav_text = document.getElementById("nav_text")
    var music_text = document.getElementById("music_text");
    var answercall_text = document.getElementById("answercall_text");
    
    var highlightcolour = 'rgb(218,219,224)';
    
    gold.onmouseover = function(){
        name_colour.innerHTML = 'Aurous Gold'
        watchdisplay.src = 'gold.png';
        name_colour.style.backgroundColor = 'rgb(255,240,195)';
        highlightcolour = 'rgb(255,240,195)';
    }
    
    silver.onmouseover = function(){
        name_colour.innerHTML = 'Argentum Silver';
        watchdisplay.src = 'silver.png';
        name_colour.style.backgroundColor = 'rgb(218,219,224)';
        highlightcolour = 'rgb(218,219,224)';
    }
    
    rose.onmouseover = function(){
        name_colour.innerHTML = 'Rose Gold';
        watchdisplay.src = 'rose.png';
        name_colour.style.backgroundColor = 'rgb(254,200,190)';
        highlightcolour = 'rgb(254,200,190)';
    }
    
    tracker_text.onmouseover = function(){
        watchscreen.src = 'tracker_screen.png';
        tracker_text.style.backgroundColor = highlightcolour;
    }
    
    tracker_text.onmouseout = function(){
        watchscreen.src = '';
        tracker_text.style.backgroundColor = 'white';
        tracker_text.style.color = 'grey';
    }
    
    nav_text.onmouseover = function(){
        watchscreen.src = 'nav_screen.png';
        nav_text.style.backgroundColor = highlightcolour;
        
    }
    
    nav_text.onmouseout = function(){
        watchscreen.src = '';
        nav_text.style.backgroundColor = 'white';
        nav_text.style.color = 'grey';
    }
    
    music_text.onmouseover = function(){
        watchscreen.src = 'music_player.png';
        music_text.style.backgroundColor = highlightcolour;
        
    }
    
    music_text.onmouseout = function(){
        watchscreen.src = '';
        music_text.style.backgroundColor = 'white';
        music_text.style.color = 'grey';
    }
    
    answercall_text.onmouseover = function(){
        watchscreen.src = 'answer_call.png';
        answercall_text.style.backgroundColor = highlightcolour;
        
    }
    
    answercall_text.onmouseout = function(){
        watchscreen.src = '';
        answercall_text.style.backgroundColor = 'white';
        answercall_text.style.color = 'grey';
    }
    
    
    
    
    
})
