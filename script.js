const messages = [
    "Eu errei, mas meu carinho por você continua gigante.",
    "Prometo te ouvir melhor e cuidar do seu coração com mais atenção.",
    "Seu sorriso é meu lugar favorito no mundo.",
    "Você é muito especial pra mim, Beatriz."
];

let currentMessage = 0;
let heartId = 0;
let opening = false;

const envelopeScene = document.getElementById("envelopeScene");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const message = document.getElementById("message");
const accepted = document.getElementById("accepted");
const heartsContainer = document.getElementById("hearts");

message.textContent = messages[currentMessage];

envelope.addEventListener("click", openLetter);

document
    .getElementById("nextMessage")
    .addEventListener("click", nextMessage);

document
    .getElementById("loveRain")
    .addEventListener("click", () => launchHearts(14));

document
    .getElementById("forgive")
    .addEventListener("click", forgiveMe);

function openLetter() {

    if (opening) return;

    opening = true;

    envelope.classList.add("opening");

    setTimeout(() => {

        envelopeScene.style.display = "none";
        letter.style.display = "block";

        launchHearts(10);

    }, 900);

}

function nextMessage() {

    currentMessage++;

    if (currentMessage >= messages.length)
        currentMessage = 0;

    message.textContent = messages[currentMessage];

    launchHearts(5);

}

function forgiveMe() {

    accepted.style.display = "inline-flex";

    launchHearts(20);

}

function launchHearts(total = 12) {

    for (let i = 0; i < total; i++) {

        createHeart();

    }

}

function createHeart() {

    heartId++;

    const span = document.createElement("span");

    span.className = "heart";

    span.style.left = (8 + Math.random() * 84) + "%";

    span.style.animationDuration =
        (2600 + Math.random() * 1800) + "ms";

    span.style.animationDelay =
        (Math.random() * 500) + "ms";

    const size = 18 + Math.random() * 26;

    span.innerHTML = `
<svg class="heart-svg"
     viewBox="0 0 24 24"
     width="${size}"
     height="${size}">
<path d="M12 21s-6.7-4.4-9.4-8.4C.8 9.9 2 5.9 5.7 4.8c2-.6 4.1 0 5.3 1.6 1.2-1.6 3.3-2.2 5.3-1.6 3.7 1.1 4.9 5.1 3.1 7.8C18.7 16.6 12 21 12 21z"/>
</svg>
`;

    heartsContainer.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 4200);

}