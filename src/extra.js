const backText = document.querySelectorAll(".back_text");
const frontText = document.querySelectorAll(".front_text");
const cardFront = document.querySelector(".card_front");
const cardBack = document.querySelector(".card_back");

const backTextOptions = {
    opacity: 0,
    translateY: "100%",
    duration: 0.5,
    ease: "linear",
};

const cardOptions = {
    translateY: 0,
    duration: 0.5,
    ease: "linear",
};

let tl;

const cardBackMEHandler = () => {
    tl = gsap.timeline().to(backText, backTextOptions).to(cardFront, cardOptions).to(frontText, {
        opacity: 1,
        translateY: 0,
        delay: 0.2,
    });
};

const cardBackMLHandler = () => {
    tl.reverse();
};

cardBack.addEventListener("mouseenter", cardBackMEHandler);

// cardBack.addEventListener("mouseleave", cardBackMLHandler);

cardFront.addEventListener("mouseenter", () => {});
cardFront.addEventListener("mouseleave", () => {
    tl.reverse();
});
