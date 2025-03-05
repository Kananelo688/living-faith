(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true
		});
	});

	$(window).load(function(){

	});

})(jQuery, document, window);
/**processes bible  verses*/
var refTagger = {
	settings: {
		bibleVersion: "ESV",
		enabled: true
	}
};


(function(d, t) {
	var g = d.createElement(t),
		s = d.getElementsByTagName(t)[0];
	g.src = "https://api.reftagger.com/v2/RefTagger.js";
	g.onload = function() {
		if (window.refTagger) {
			window.refTagger.tag();
		}
	};
	s.parentNode.insertBefore(g, s);
})(document, "script");

/**
 * Handles click events fired by the buttons in the About PAGE of the website
 */
function sectionButtonEventHandler() {
	
    var content = document.getElementById(this.id.split('-')[0] + '-content');

    if (this.id.endsWith('-open-button')) {
        content.classList.add("show", "animate__fadeIn");
        
		content.classList.replace("animate__fadeOut","animate__fadeIn");
	
        this.lastElementChild.src = "images/drop_up.webp";
        
		this.id = this.id.replace('-open-button', '-close-button');
    } else {
        content.classList.remove("show", "animate__fadeIn");
        // content.classList.replace("animate__fadeIn","animate__fadeOut");
        this.lastElementChild.src = "images/dropdown.png";
        this.id = this.id.replace('-close-button', '-open-button');
    }
}

function main(){
	

	
	
	/**Event Listeners for "see more" buttons */

	document.querySelectorAll(".see-more").forEach(button=>{
		button.addEventListener('click',()=>{
			button.nextElementSibling.classList.add("show","animate_fadeIn");
			button.style.display= "none";
			// button.parentNode.style.color="black";
		});
	});

	/**Event listeners for "see less" buttons */
	document.querySelectorAll(".see-less").forEach(button=>{
		button.addEventListener('click',()=>{
			button.parentNode.classList.replace("animate__fadeIn","animate_fadeOut");
			button.parentNode.classList.remove("show");
			button.parentNode.previousElementSibling.style.display = "inline";
		});
	});


	document.querySelectorAll(".video-open").forEach(button=>{
		button.addEventListener('click',()=>{
			button.parentNode.nextElementSibling.classList.add("show","animate__fadeIn");
			button.parentNode.style.display = "none";
			//load the video from start on each 'watch' button press
			button.parentNode.nextElementSibling.firstElementChild.load();
			//button.parentNode.nextElementSibling.firstElementChild.requestPictureInPicture();
		});
	});

	document.querySelectorAll(".video-close").forEach(button=>{
		button.addEventListener('click',()=>{
			button.parentNode.previousElementSibling.style.display = 'inline';
			button.parentNode.classList.remove("show");
			button.parentNode.firstElementChild.pause();
		});
	});
	/**Add Event Handlers for the about page section-bar buttons */

	document.querySelectorAll(".section-bar").forEach(button=>{
		button.addEventListener('click',sectionButtonEventHandler);
	});

	/**Event Handler for the REQUEST OUR SERVICE */
	document.getElementById("prayer-request-button").addEventListener('click',()=>{
		console.log("hello buti");
		document.getElementById("service-request-form").classList.add("show","animate__fadeIn");
		document.getElementById("service-request-form").classList.replace("animate__fadeOut","animate__fadeIn");
		document.getElementById("prayer-request-button").style.display = "none";
	});

	/**Event Handler for the SERVICE REQUEST FORM Cancel Button */
	document.getElementById("service-request-cancel-button").addEventListener('click',()=>{
		document.getElementById("service-request-form").classList.remove("show");
		document.getElementById("service-request-form").classList.replace("animate__fadeIn","animate__fadeOut");
		document.getElementById("prayer-request-button").style.display = "inline";
	});

	/**Event Handler for the JOIN COMMUNITY BUTTON */
	document.getElementById("join-community-button").addEventListener('click',()=>{
		document.getElementById("community-form").classList.add("show","animate__fadeIn");
		document.getElementById("community-form").classList.replace("animate__fadeOut","animate__fadeIn");
		document.getElementById("join-community-button").style.display = "none";
	});

	/**Event Handler for the JOIN COMMUNITY BUTTON CANCEL Button */
	document.getElementById("community-cancel-button").addEventListener('click',()=>{
		document.getElementById("community-form").classList.remove("show");
		document.getElementById("community-form").classList.replace("animate__fadeIn","animate__fadeOut");
		document.getElementById("join-community-button").style.display = "inline";
	});

	/**Event Handler for JOIN EVENT BUTTONS*/
	document.querySelectorAll(".join-event-buttons").forEach(button=>{
		button.addEventListener('click',()=>{
			button.parentNode.nextElementSibling.classList.add("show","animate__fadeIn");
			button.parentNode.nextElementSibling.classList.replace("animate__fadeOut","animate__fadeIn");
			button.parentNode.style.display = "none"
		});
	});

	/**Event Handler for JOIN EVENT CANCEL BUTTONS */
	document.querySelectorAll(".event-registration-cancel-buttons").forEach(button=>{
		button.addEventListener('click',()=>{
			button.parentNode.parentNode.parentNode.classList.remove("show");
			button.parentNode.parentNode.parentNode.classList.replace("animate__fadeIn","animate__fadeOut");
			button.parentNode.parentNode.parentNode.previousElementSibling.style.display='flex';
		});
	});

	/**Add SERMON OPEN VIDEO Button */
	
	
}

main();



    // Function to handle form submission
document.getElementById("service-request-form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent default form submission

        // Get form data
        let formData = {
            name: document.getElementById("user-name-session-form").value,
            phonenumbers: document.getElementById("user-phonenumbers-session-form").value,
            email: document.getElementById("user-email-session-form").value,
            service: document.getElementById("user-service-session-form").value,
            date: document.getElementById("user-date-session-form").value,
            time: document.getElementById("user-time-session-form").value,
            notes: document.getElementById("user-message-session-form").value
        };

        // Send email using EmailJS
        emailjs.send("service_erc2nck", "template_igt01u5", formData,"rz87jRgyEVB5z4GT_")
        .then(function(response) {
            alert("Service request sent successfully!"); // Success message
            document.getElementById("service-request-form").reset(); // Reset form
        }, function(error) {
            alert("Failed to send request. Please try again."); // Error message
            console.error("EmailJS Error:", error);
        });
    });



	    // Function to handle form submission
document.getElementById("community-request-form").addEventListener("submit", function(event) {
	event.preventDefault();  // Prevent default form submission

	// Get form data
	let formData = {
		name: document.getElementById("community-user-name").value,
		age: document.getElementById("community-age").value,
		phone: document.getElementById("community-phonenumbers").value,
		email: document.getElementById("community-email").value,
		address: document.getElementById("community-address").value,
		community: document.getElementById("community-group").value,
	};

	// Send email using EmailJS
	emailjs.send("service_erc2nck", "template_cv2fizk", formData,"rz87jRgyEVB5z4GT_")
	.then(function(response) {
		alert("Service request sent successfully!"); // Success message
		document.getElementById("community-request-form").reset(); // Reset form
	}, function(error) {
		alert("Failed to send request. Please try again."); // Error message
		console.error("EmailJS Error:", error);
	});
});