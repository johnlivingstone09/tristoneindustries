   // Countdown Timer
       function startCountdown(targetDate, ids) {
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(ids.days).textContent = days.toString().padStart(2, '0');
        document.getElementById(ids.hours).textContent = hours.toString().padStart(2, '0');
        document.getElementById(ids.minutes).textContent = minutes.toString().padStart(2, '0');
        document.getElementById(ids.seconds).textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById(ids.container).innerHTML = "<h3>Time Over!</h3>";
        }
    }, 1000);
}

// Workshop start countdown (October 5, 2025, 10:00 AM IST)
startCountdown(new Date("2025-10-05T10:00:00").getTime(), {
    container: "countdown-start",
    days: "days-start",
    hours: "hours-start",
    minutes: "minutes-start",
    seconds: "seconds-start"
});

// Offer countdown (example: October 4, 2025, 23:59 PM)
startCountdown(new Date("2025-10-04T23:59:00").getTime(), {
    container: "countdown-offer",
    days: "days-offer",
    hours: "hours-offer",
    minutes: "minutes-offer",
    seconds: "seconds-offer"
});


        // Page Navigation
        function showPaymentPage() {
            document.getElementById("landingPage").style.display = "none";
            document.getElementById("paymentPage").style.display = "block";
            document.body.style.paddingBottom = "0";
        }

        function showLandingPage() {
            document.getElementById("landingPage").style.display = "block";
            document.getElementById("paymentPage").style.display = "none";
            document.body.style.paddingBottom = "80px";
        }

        // Form Submission
        document.getElementById("registrationForm").addEventListener("submit", function(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const name = formData.get('fullName');
            const email = formData.get('email');
            const phone = formData.get('phone');

            
        });

        // Initialize
        document.addEventListener("DOMContentLoaded", function() {
            startCountdown();
            document.body.style.paddingBottom = "80px";
        });

        // Smooth scrolling and animations
        document.addEventListener("scroll", function() {
            const elements = document.querySelectorAll(".topics-list li");
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = "1";
                    element.style.transform = "translateX(0)";
                }
            });
        });