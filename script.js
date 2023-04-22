async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();
    const heading = document.querySelector("h1");
    const text = document.querySelector("blockquote");
    heading.textContent = `Advice #${advice.slip.id}`;
    text.textContent = `"${advice.slip.advice}"`;
}
getAdvice();
const btn = document.querySelector("button");
btn.addEventListener('click',() => {
    getAdvice();
})