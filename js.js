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
            "<div id='desc_title'>Product Specification</div><p><div id='desc_subtitle'>CONNECTIVITY</div>3G/4G <br> Wi-Fi: 802.11 b/g/n/e (2.4GHz) <br> Bluetooth: v4.1<p><div id='desc_subtitle'>BODY</div>Dimensions 42.5 x 36.4 x 11.4 mm (1.67 x 1.43 x 0.45 in) <br>Weight 52.4 g body (1.83 oz) <p><div id='desc_subtitle'>DISPLAY</div> Type	AMOLED capacitive touchscreen, 16M colors <br> Size	1.65 inches (~55.4% screen-to-body ratio) <br>Resolution	390 x 312 pixels (~303 ppi pixel density) <br>Multi-touch	Yes <br> Protection	Sapphire crystal glass <p><div id='desc_subtitle'>PLATFORM	</div> OS, Tizen <p> CPU	<br> Dual-core 1.0 GHZ <p><div id='desc_subtitle'>MEMORY</div>16 GB Internal Memory ";
        circle1But.src="product_specs_over.png";
    }
    circle1But.onmouseout = function(){
        circle1But.src="product_specs.png";
    }
    
    circle2But.onmouseover = function(){
        infoDesc.innerHTML = 
            "<div id='desc_title'>Product Description</div><div id='desc_text'><p>Our mission statement is to provide people with an affordable fitness tracker to complement their healthy lifestyle. <p>For LookFit, we wanted a watch that is not redundant. <br>A watch that suits your active lifestyle. <br>A watch that is affordable. <p>The main features of LookFit are: Fitness Tracking, Activity Log, and GPS Navigation. <p> Lookfit also offer a wide variety of quality of life conveniences built in, including: <p>-	Notification syncing <br>-	Alarms and reminders <br>-	Music player control <br>-	Answer calls</div>";
        circle2But.src="product_desc_over.png";
    }
    
    circle2But.onmouseout = function(){
        circle2But.src="product_desc.png";
    }
    circle3But.onmouseover = function(){
        infoDesc.innerHTML = 
            "<div id='desc_title'>Fitness Tracking</div><div id='desc_text'> <p>The LookFit watch take in your physical parameters such as height, weight and gender. As you wear it, it will count the number of steps you have taken throughout the day. <p>It display information such as the calories you have burned so far in your exercise, and your heartrate. <p>LookFit is able to predict what activity you are doing (for example, swimming or jogging) based on the data it receives.</div>";
        circle3But.src="fitness_tracking_over.png";
    }
    
    circle3But.onmouseout = function(){
        circle3But.src="fitness_tracking.png";
    }
    circle4But.onmouseover = function(){
        infoDesc.innerHTML = 
            "<div id='desc_title'>Navigation</div><div id='desc_text'><p>The LookFit will utilize GPS navigation and display the directions you need to go to get to your destination. <p> Whether you are jogging or cycling, the LookFit GPS system can store and calculate the calories that you would burn if you took a certain route. <p> With this system, you can search for a nearby route you would like to take, based on your fitness goals for the day. Alternatively, you can also customize your own route.</div>";
        circle4But.src="navigation_over.png";
    }
    
    circle4But.onmouseout = function(){
        circle4But.src="navigation.png";
    }
    
    circle5But.onmouseover = function(){
        infoDesc.innerHTML = 
            "<div id='desc_title'>Activity Log</div><div id='desc_text'><p>The LookFit activity log keep tracks of your physical activity progress. <p>As you do an exercise, for example jogging, the LookFit can save all the fitness data it has collected and store it in the activity log <p>The activity log can then be accessed from your smart phone, and as the months go by, you can keep track of the improvements you have accomplished over time. </div>";
        circle5But.src="calendar_over.png";
    }
    circle5But.onmouseout = function(){
        circle5But.src="calendar.png";
    }
    circle6But.onmouseover = function(){
        infoDesc.innerHTML = 
            "<div id='desc_title'>Testimonials</div><img class='profile' src='profile1.jpg' /><div id='profile_text'><p>Luke Chapman <br><q>LookFit make fitness part of your daily routine easy, allowing you to track your own data and integrates with the navigation feature to meet your exercise fitness goals.</div></q><img class='profile' src='profile2.jpg' /><div id='profile_text'><p>Amy Tan <br><q>LookFit made me aware of how much I am exercising and motivates me to exercise more. More importantly the fitness tracker and activity log display accurate information of my progress.</div></q> <img class='profile' src='profile3.jpg' /><div id='profile_text'> Lily Schiller <br> <q>The LookFit is beautifully constructed. It is a solid fitness tracker that meet my physical exercise needs. It is able to send and receive voice calls via a smartphone. LookFit is offered in several stylish colors. </q></div>";
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
