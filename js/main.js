const ratingCard = document.querySelector("#rating-card");
const allStars = document.querySelectorAll("label img:last-child");
const message = document.querySelector("#message");

/**
 * Animating checked star
 * 
 * @param {HTMLElement} element A star
 */
function animateStar(element) {
    element.animate([
        {   transform: "scale(1)" },
        {   transform: "scale(1.15)" },
        {   transform: "scale(1)" },
    ],
    {
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
 * @param {number} delay Milliseconds to wait until showing the custom message
 */
function showMessage(number, extraMessage, delay) {
    message.textContent = `${number} ${number === 1 ? 'star' : 'stars'}? ${extraMessage}`;
    setTimeout(function() {
        message.classList.add("message--show");
    }, delay)
}

// Event
allStars.forEach(function (star, index) {
    star.addEventListener("click", function() { 
        // For animating only yellow stars
        const starsToAnimate = Array.from(allStars).slice(0, index + 1);
        animateStar(starsToAnimate[0]);
        // Adding animations with a delay depending on the number of checked stars
        switch (starsToAnimate.length) {
            case 1:      
                showMessage(starsToAnimate.length, "That's too bad.", 500);
            break;
            case 2:
                setTimeout(function () {
                    animateStar(starsToAnimate[1]);
                }, 200)
                showMessage(starsToAnimate.length, "I'm sorry to hear that.", 700);
            break;
            case 3:
                setTimeout(function () {
                    animateStar(starsToAnimate[1]);
                }, 200)
                setTimeout(function () {
                    animateStar(starsToAnimate[2]);
                }, 400)
                showMessage(starsToAnimate.length, "Not bad, but it could be better.", 900);
            break;
            case 4:
                setTimeout(function () {
                    animateStar(starsToAnimate[1]);
                }, 200)
                setTimeout(function () {
                    animateStar(starsToAnimate[2]);
                }, 400)
                setTimeout(function () {
                    animateStar(starsToAnimate[3]);
                }, 600)
                showMessage(starsToAnimate.length, "That's nice!", 1100);
            break;
            case 5:
                setTimeout(function () {
                    animateStar(starsToAnimate[1]);
                }, 200)
                setTimeout(function () {
                    animateStar(starsToAnimate[2]);
                }, 400)
                setTimeout(function () {
                    animateStar(starsToAnimate[3]);
                }, 600)
                setTimeout(function () {
                    animateStar(starsToAnimate[4]);
                }, 800)
                showMessage(starsToAnimate.length, "Awesome! Enjoy it.", 1300);
            break;
        }
    })
})