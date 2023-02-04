import gsap from "gsap";

const backText = document.querySelectorAll(".back_text");
const frontText = document.querySelectorAll(".front_text");
const cardFront = document.querySelector(".card_front");
const slidingCard = document.querySelector(".sliding_card");
const link = document.querySelector(".link");

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

const frontTextOptions = {
    opacity: 1,
    translateY: 0,
    delay: 0.2,
    scale: 1,
};

let tl;

const cardBackMEHandler = () => {
    tl = gsap
        .timeline()
        .to(backText, backTextOptions)
        .to(slidingCard, cardOptions)
        .to([...frontText, link], frontTextOptions);
};

const cardBackMLHandler = () => {
    tl.reverse();
};

cardFront.addEventListener("mouseenter", cardBackMEHandler);
cardFront.addEventListener("mouseleave", cardBackMLHandler);
