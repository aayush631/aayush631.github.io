var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// ----------responsive-----------
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = '0';
}
function closemenu() {
    sidemenu.style.right = '-200px';
}


// Send Message to google sheet-------------------

document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyjiVybQcapcm-tLeqsefbdWCLYBWw6LVcJQ8Fdf-8h1OTaNDoGvC3ihUIgH6oRDWon/exec';
    const form = document.forms['submit-to-google-sheet'];
    let msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Show a loading message immediately when the form is submitted
        msg.innerHTML = "Sending message...";

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                // Show success message when the fetch request completes
                msg.innerHTML = "Message Sent Successfully";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => {
                // Show an error message in case of failure
                msg.innerHTML = "Failed to send message. Please try again.";
                console.error('Error!', error.message);
            });
    });
});

// see more.......................
document.getElementById('seeMoreBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    var hiddenItems = document.querySelector('.hidden-items');
    
    if (hiddenItems.classList.contains('show')) {
        hiddenItems.classList.remove('show');  // Hide the hidden items
        this.innerText = "See More";  // Change button text back to 'See More'
    } else {
        hiddenItems.classList.add('show');  // Show the hidden items
        this.innerText = "See Less";  // Change button text to 'See Less'
    }
});

document.getElementById('seeMorebtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    var hiddenItems = document.querySelector('.hidden-item');
    
    if (hiddenItems.classList.contains('show')) {
        hiddenItems.classList.remove('show');  // Hide the hidden items
        this.innerText = "See More";  // Change button text back to 'See More'
    } else {
        hiddenItems.classList.add('show');  // Show the hidden items
        this.innerText = "See Less";  // Change button text to 'See Less'
    }
});



// not authorized to view the phone number
document.getElementById('phone-number-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default link behavior
    alert('You are not authorized to view the phone number');
});


// back................
// Back button functionality
document.getElementById('backBtn').addEventListener('click', function() {
    window.history.back();
});
