
const cards = [
    {
        question: "O que é Termologia?",
        answer: "É a área da Física que estuda os fenômenos relacionados ao calor, temperatura e energia térmica."
    },
    {
        question: "O que é temperatura?",
        answer: "É a grandeza física que indica o estado de agitação das partículas de um corpo."
    },
    {
        question: "O que é calor?",
        answer: "É a energia térmica transferida entre corpos que apresentam diferentes temperaturas."
    },
    {
        question: "Quais são as três principais escalas termométricas?",
        answer: "Celsius (°C), Fahrenheit (°F) e Kelvin (K)."
    },
    {
        question: "Qual é a temperatura do zero absoluto?",
        answer: "É 0 K, equivalente a aproximadamente -273,15 °C."
    },
    {
        question: "O que é equilíbrio térmico?",
        answer: "É quando dois ou mais corpos atingem a mesma temperatura e deixam de trocar calor espontaneamente."
    },
    {
        question: "Quais são as formas de propagação do calor?",
        answer: "Condução, convecção e irradiação."
    },
    {
        question: "O que é dilatação térmica?",
        answer: "É o aumento das dimensões de um corpo em consequência do aumento de sua temperatura."
    },
    {
        question: "O que é calor específico?",
        answer: "É a quantidade de calor necessária para elevar em 1 °C a temperatura de uma unidade de massa de uma substância."
    },
    {
        question: "O que é calor latente?",
        answer: "É a quantidade de calor absorvida ou liberada durante uma mudança de estado físico, sem variar a temperatura."
    }
];

let current = 0;

const flashcard = document.getElementById("flashcard");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const counter = document.getElementById("counter");
const number = document.getElementById("number");
const progress = document.getElementById("progress");
const percent = document.getElementById("progress-percent");

function showCard() {
    flashcard.classList.remove("flipped");

    question.textContent = cards[current].question;
    answer.textContent = cards[current].answer;

    number.textContent = String(current + 1).padStart(2, "0");

    counter.textContent = `Cartão ${current + 1} de ${cards.length}`;

    const percentage = ((current + 1) / cards.length) * 100;

    progress.style.width = percentage + "%";
    percent.textContent = Math.round(percentage) + "%";
}

flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % cards.length;
    showCard();
});

document.getElementById("previous").addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    showCard();
});

showCard();
