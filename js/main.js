const ratingCard = document.querySelector("#rating-card");
const allStars = document.querySelectorAll("label img:last-child");
const message = document.querySelector("#message");

/**
 * Animating checked star
 * 
 * @param {HTMLElement} element A star
 * @param {number} delay Milliseconds to wait before starting the animation
 */
function animateStar(element, delay) {
    element.animate([
        {   transform: "scale(1)" },
        {   transform: "scale(1.15)" },
        {   transform: "scale(1)" },
    ],
    {
        delay: delay,
        duration: 600,
        iterations: 1,
        direction: "normal",
        fill: "forwards"
    })
}

/**
 * Showing a message depending on the number of stars that the user has checked
 * 
 * @param {number} number The number of checked stars
 * @param {string} extraMessage Custom message
 * @param {number} delay Milliseconds to wait before showing the custom message
 */
function showMessage(number, extraMessage, delay) {
    setTimeout(function() {
        message.textContent = `${number} ${number === 1 ? 'star' : 'stars'}? ${extraMessage}`;
        message.classList.add("message--show");
    }, delay)
}

// Event
allStars.forEach(function (star, index) {
    star.addEventListener("click", function() {
        // For animating only yellow stars
        const starsToAnimate = Array.from(allStars).slice(0, index + 1);
        // First star will always be animated, with no delay
        animateStar(starsToAnimate[0], 0);
        // Adding animations with a delay depending on the number of checked stars
        switch (starsToAnimate.length) {           
            case 1:
                // Wait until the animation ends
                showMessage(starsToAnimate.length, "That's too bad.", 500);
            break;            
            case 2:
                animateStar(starsToAnimate[1], 200);                
                showMessage(starsToAnimate.length, "I'm sorry to hear that.", 700);
            break;
            case 3:
                animateStar(starsToAnimate[1], 200);
                animateStar(starsToAnimate[2], 400);                               
                showMessage(starsToAnimate.length, "Not bad, but it could be better.", 900);
            break;
            case 4:
                animateStar(starsToAnimate[1], 200);
                animateStar(starsToAnimate[2], 400);
                animateStar(starsToAnimate[3], 600);                
                showMessage(starsToAnimate.length, "That's nice!", 1100);
            break;
            case 5:
                animateStar(starsToAnimate[1], 200);
                animateStar(starsToAnimate[2], 400);
                animateStar(starsToAnimate[3], 600);   
                animateStar(starsToAnimate[4], 800);                
                showMessage(starsToAnimate.length, "Awesome! Enjoy it.", 1300);
            break;
        }
    })
})