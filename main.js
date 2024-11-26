gsap.registerPlugin(ScrollTrigger);

// Select the logo element
const logo = document.querySelector('.logo');

// Define the animation
gsap.to(logo, {
  scrollTrigger: {
    trigger: ".content-main",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
   
  },
  rotate: 360 * 2, // Rotate 180 degrees (half a circle)
  ease: "power2.inOut",
  duration: 2,
  transformOrigin: "center center"
});



// // LOGO-SMALL=1
// gsap.set(logo, {overflow: "hidden"});

// gsap.registerPlugin(ScrollTrigger);

// const logoSmall = document.querySelector('.logo-small');


// gsap.to(logoSmall, {
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
    
//   },
//   rotate: 360 * 4, 
//   ease: "power2.inOut",
//   duration: 2,
//   transformOrigin: "center center"
// });

// gsap.set(logoSmall, {overflow: "hidden"});




// // LOGO-SMALL=2
// gsap.set(logo, {overflow: "hidden"});

// gsap.registerPlugin(ScrollTrigger);
// const logoSmall2 = document.querySelector('.logo-small-2');

// gsap.to(logoSmall2, {
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
    
//   },
//   rotate: 360 * 4, 
//   ease: "power2.inOut",
//   duration: 2,
//   transformOrigin: "center center"
// });


// gsap.set(logoSmall2, {overflow: "hidden"});




// // LOGO-SMALL=3
// gsap.set(logo, {overflow: "hidden"});

// gsap.registerPlugin(ScrollTrigger);
// const logoSmall3 = document.querySelector('.logo-small-3');

// gsap.to(logoSmall3, {
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
    
//   },
//   rotate: 360 * 4, 
//   ease: "power2.inOut",
//   duration: 2,
//   transformOrigin: "center center"
// });



// // LOGO-SMALL=4
// gsap.set(logo, {overflow: "hidden"});

// gsap.registerPlugin(ScrollTrigger);
// const logoSmall4 = document.querySelector('.logo-small-4');

// gsap.to(logoSmall4, {
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
    
//   },
//   rotate: 360 * 4,
//   ease: "power2.inOut",
//   duration: 2,
//   transformOrigin: "center center"
// });



// // LOGO-SMALL=5
// gsap.set(logo, {overflow: "hidden"});

// gsap.registerPlugin(ScrollTrigger);
// const logoSmall5 = document.querySelector('.logo-small-5');

// gsap.to(logoSmall5, {
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
    
//   },
//   rotate: 360 * 4,
//   ease: "power2.inOut",
//   duration: 2,
//   transformOrigin: "center center"
// });



// // LOGO-SMALL=6
// gsap.set(logo, {overflow: "hidden"});

// gsap.registerPlugin(ScrollTrigger);
// const logoSmall6 = document.querySelector('.logo-small-6');



// // Define the animation
// gsap.to(logoSmall6, {
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
    
//   },
//   rotate: 360 * 4, // Rotate 180 degrees (half a circle)
//   ease: "power2.inOut",
//   duration: 2,
//   transformOrigin: "center center"
// });


// // Select the logo element
// const logoSmall7 = document.querySelector('.logo-small-7');

// // Define the animation
// gsap.to(logoSmall7, {
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
    
//   },
//   rotate: 360 * 4, // Rotate 180 degrees (half a circle)
//   ease: "power2.inOut",
//   duration: 2,
//   transformOrigin: "center center"
// });

// // Add this to prevent overflow



// // Select the logo element
// const logoSmall8 = document.querySelector('.logo-small-8');

// // Define the animation
// gsap.to(logoSmall6, {
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
    
//   },
//   rotate: 360 * 4, // Rotate 180 degrees (half a circle)
//   ease: "power2.inOut",
//   duration: 2,
//   transformOrigin: "center center"
// });

// // Add this to prevent overflow
// gsap.set(logoSmall3, {overflow: "hidden"});


function parallax() {
  const leftWrapper = document.querySelector('.left-1');
  const rightWrapper = document.querySelector('.right-1');
  const rightSecondWrapper = document.querySelector('.right-2');
  const leftSecondWrapper = document.querySelector('.left-2');
  const rightThirdWrapper = document.querySelector('.right-3');
  const leftThirdWrapper = document.querySelector('.left-3');
  const rightFourthWrapper = document.querySelector('.right-4');
  const leftFourthWrapper = document.querySelector('.left-4');
  const righFifthWrapper = document.querySelector('.right-5');
  const leftFifthWrapper = document.querySelector('.left-5');
  const rightSixthWrapper = document.querySelector('.right-6');
  const leftSixthWrapper = document.querySelector('.left-6');
  const rightSeventhWrapper = document.querySelector('.right-7');
  // const leftSeventhWrapper = document.querySelector('.left-7');
  const rightEighthWrapper = document.querySelector('.right-8');
  const leftEighthWrapper = document.querySelector('.left-8');
  const rightNinethWrapper = document.querySelector('.right-9');
  const leftNinethWrapper = document.querySelector('.left-9');
  // const rightTenthWrapper = document.querySelector('.right-10');
  // const leftTenthWrapper = document.querySelector('.left-10');

  const windowWidth = window.innerWidth;
  const scrollPosition = window.scrollY;

  // Calculate movement for each wrapper
  const oneMovement = (scrollPosition * 0.2) - (windowWidth * 0);
  const twoMovement = (scrollPosition * 0.2) - (windowWidth * 0);
  const threeMovement = (scrollPosition * 0.2) - (windowWidth * 0);
  const fourMovement = (scrollPosition * 0.2) - (windowWidth * 0);
  const fiveMovement = (scrollPosition * 0.2) - (windowWidth * 0);
  const sixMovement = (scrollPosition * 0.2) - (windowWidth * 0);
  const sevenMovement = (scrollPosition * 0.2) - (windowWidth * 0);
  const eightMovement = (scrollPosition * 0.2) - (windowWidth * 0);
  const nineMovement = (scrollPosition * 0.2);
  const tenMovement = (scrollPosition * 0.2);
  const elevenMovement = (scrollPosition * 0.2);
  const twelveMovement = (scrollPosition * 0.2);
  const thirteenMovement = (scrollPosition * 0.2);
  // const fourteenMovement = -(scrollPosition * 0.2);
  const fiveteenMovement = (scrollPosition * 0.2);
  const sixteenMovement = (scrollPosition * 0.2);
  const seventeenMovement = (scrollPosition * 0.2);
  const eightteenMovement = (scrollPosition * 0.2);
  // const nineteenMovement = (scrollPosition * 0.2);
  // const twentyMovement = (scrollPosition * 0.2);
 
  // Apply transformations
  leftWrapper.style.transform = `translateY(${oneMovement}px)`;
  rightWrapper.style.transform = `translateY(${twoMovement}px)`;
  rightSecondWrapper.style.transform = `translateY(${threeMovement}px)`;
  leftSecondWrapper.style.transform = `translateY(${fourMovement}px)`;
  rightThirdWrapper.style.transform = `translateY(${fiveMovement}px)`;
  leftThirdWrapper.style.transform = `translateY(${sixMovement}px)`;
  rightFourthWrapper.style.transform = `translateY(${sevenMovement}px)`;
  leftFourthWrapper.style.transform = `translateY(${eightMovement}px)`;
  righFifthWrapper.style.transform = `translateY(${nineMovement}px)`;
  leftFifthWrapper.style.transform = `translateY(${tenMovement}px)`;
  rightSixthWrapper.style.transform = `translateY(${elevenMovement}px)`;
  leftSixthWrapper.style.transform = `translateY(${twelveMovement}px)`;
  rightSeventhWrapper.style.transform = `translateY(${thirteenMovement}px)`;
  // leftSeventhWrapper.style.transform = `translateY(${fourteenMovement}px)`;
  rightEighthWrapper.style.transform = `translateY(${fiveteenMovement}px)`;
  leftEighthWrapper.style.transform = `translateY(${sixteenMovement}px)`;
  rightNinethWrapper.style.transform = `translateY(${seventeenMovement}px)`;
  leftNinethWrapper.style.transform = `translateY(${eightteenMovement}px)`;
  // rightTenthWrapper.style.transform = `translateY(${nineteenMovement}px)`;
  // leftTenthWrapper.style.transform = `translateY(${twentyMovement}px)`;

  requestAnimationFrame(parallax);
}

// Start the parallax effect
requestAnimationFrame(parallax);


// SLIDER

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
     
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// FORM
document.getElementById('submitButton').addEventListener('click', function() {
  sendEmail();
});

function sendEmail() {
  const form = document.getElementById('myForm');
  const formData = new FormData(form);

  Email.send({
    Host : "smtp.gmail.com",
    Username : "maryaondra1.8.25@gmail.com",
    Password : "Kordy1825", 
    To : 'maryaondra1.8.25@gmail.com',
    From : formData.get("email"),
    Subject : "Wedding Form",
    Body : `
      Name: ${formData.get("name")} ${formData.get("surname")}
      Email: ${formData.get("email")}
      Attending: ${formData.get("flexRadioDefault")}
      Number of guests: ${formData.get("guests")}
      Children: ${formData.get("children")}
      Vegetarians: ${formData.get("vegetarians")}
      Accommodation: ${Array.from(formData.getAll("accommodation")).join(", ")}
    `,
  })
  .then(
    message => alert("Formulář uspěšně odeslán!")
  )
  .catch(err => {
    console.error('Error:', err);
    alert('Nastala chyba při odesílání formuláře. Zkuste to znovu.');
  });
}

// SIDEBAR-LANGUAGE

document.addEventListener('DOMContentLoaded', function() {
  const triggerButton = document.querySelector('.language-trigger');
  const PL = document.querySelector('.PL');
  const CZ = document.querySelector('.CZ');

  triggerButton.addEventListener('click', function() {
    PL.classList.toggle('slide-up');
    CZ.classList.toggle('slide-up');
    this.classList.toggle('slide-up');
  });
});