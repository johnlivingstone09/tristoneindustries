 document.getElementById("flipButton").addEventListener("click", function() {
        window.location.href = "pay.html";
    });

        // Auto flip button every 3 seconds
        const flipButton = document.getElementById('flipButton');
        
        setInterval(() => {
            flipButton.classList.toggle('flipped');
        }, 3000);

        // Optional: Manual click to flip
        flipButton.addEventListener('click', () => {
            flipButton.classList.toggle('flipped');
        });

        // Carousel functionality
        const carouselContainer = document.getElementById('carouselContainer');
        const carouselTrack = document.getElementById('carouselTrack');
        let isCarouselScrolling = true;
        let carouselScrollPosition = 0;
        let carouselAnimationId;

        // Duplicate images for seamless loop
        const originalItems = carouselTrack.innerHTML;
        carouselTrack.innerHTML = originalItems + originalItems;

        function scrollCarousel() {
            if (isCarouselScrolling) {
                carouselScrollPosition += 0.5;
                carouselTrack.style.transform = `translateX(-${carouselScrollPosition}px)`;

                // Reset position for seamless loop
                const itemWidth = carouselTrack.firstElementChild.offsetWidth + 24;
                const totalWidth = itemWidth * 9;
                
                if (carouselScrollPosition >= totalWidth) {
                    carouselScrollPosition = 0;
                }
            }
            carouselAnimationId = requestAnimationFrame(scrollCarousel);
        }

        // Start animation
        scrollCarousel();

        // Pause on hover and click
        carouselContainer.addEventListener('mouseenter', () => {
            isCarouselScrolling = false;
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            isCarouselScrolling = true;
        });
        
        carouselContainer.addEventListener('click', () => {
            isCarouselScrolling = !isCarouselScrolling;
        });



        // College Logos Data with actual images
        const colleges = [
            { name: "Anna University", logo: "image/annaUniv.avif" },
            { name: "SRM University", logo: "image/srm.png" },
            { name: "VIT University", logo: "image/vit.png" },
            { name: "Sathyabama University", logo: "image/sathyabama.jpg" },
            { name: "NIT", logo: "image/nit.png" },
            { name: "IIT", logo: "image/iit.png" },
            { name: "sastra", logo: "image/sastra.png" },
            { name: "KRC", logo: "image/krc.png" },
            { name: "sowdambika", logo: "image/Sowdambikaa.webp" },
            { name: "saranatahn", logo: "image/saranathan.jpeg" },
            { name: "DSU", logo: "image/dsu.jpg" }
        ];

        // Generate college logos
        const collegeTrack = document.getElementById('collegeTrack');
        const originalLogos = colleges.map(c => `
            <div class="college-logo">
                <img src="${c.logo}" alt="${c.name}" title="${c.name}">
            </div>
        `).join('');

        // Duplicate for seamless loop
        collegeTrack.innerHTML = originalLogos + originalLogos + originalLogos;

        // College logos scroll animation (right to left)
        let collegeScrollPosition = 0;
        let isCollegeScrolling = true;
        const collegeContainer = document.getElementById('collegeContainer');

        function scrollColleges() {
            if (isCollegeScrolling) {
                collegeScrollPosition += 0.5;
                collegeTrack.style.transform = `translateX(-${collegeScrollPosition}px)`;

                const logos = collegeTrack.querySelectorAll('.college-logo');
                if (logos.length > 0) {
                    const logoWidth = logos[0].offsetWidth + 60;
                    const totalWidth = logoWidth * colleges.length;

                    if (collegeScrollPosition >= totalWidth) {
                        collegeScrollPosition = 0;
                    }
                }
            }
            requestAnimationFrame(scrollColleges);
        }

        scrollColleges();
        
        // Pause college scroll on hover and click
        collegeContainer.addEventListener('mouseenter', () => {
            isCollegeScrolling = false;
        });
        
        collegeContainer.addEventListener('mouseleave', () => {
            isCollegeScrolling = true;
        });
        
        collegeContainer.addEventListener('click', () => {
            isCollegeScrolling = !isCollegeScrolling;
        });

         

         // Scroll animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        function checkScroll() {
            const triggerBottom = window.innerHeight * 0.8;
            
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const itemBottom = item.getBoundingClientRect().bottom;
                
                // Animate in when scrolling down
                if (itemTop < triggerBottom && itemBottom > 0) {
                    item.classList.add('animate-in');
                } 
                // Animate out when scrolling up past the item
                else if (itemBottom < 0 || itemTop > window.innerHeight) {
                    item.classList.remove('animate-in');
                }
            });
        }
        
        // Check on scroll
        window.addEventListener('scroll', checkScroll);
        
        // Check on load
        checkScroll();



        function openWhatsApp(e) {
  e.preventDefault();

  // Detect if user is on a mobile device
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const message = encodeURIComponent("Hi Tri Stone Industries, I would like to know more about your Fullstack workshop.");
  const phone = "918072089889";

  // Open directly inside WhatsApp app for mobile users
  const whatsappURL = isMobile
    ? `whatsapp://send?phone=${phone}&text=${message}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;

  window.open(whatsappURL, "_blank");
}

// Gift Box Functionality
const giftBox = document.getElementById('giftBox');
const giftPopup = document.getElementById('giftPopup');
const closePopup = document.getElementById('closePopup');

// Open gift popup
giftBox.addEventListener('click', () => {
    giftPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close gift popup
closePopup.addEventListener('click', () => {
    giftPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close popup when clicking outside
giftPopup.addEventListener('click', (e) => {
    if (e.target === giftPopup) {
        giftPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && giftPopup.classList.contains('active')) {
        giftPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});


