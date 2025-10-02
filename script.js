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

// Page Navigation - Redirect to payment page
function showPaymentPage() {
    window.location.href = 'pay.html';
}

// Initialize
document.addEventListener("DOMContentLoaded", function() {
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