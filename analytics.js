let clicks = 0;
let startTime = Date.now();

const button = document.querySelector("button");

button.addEventListener("click", function () {
    clicks++;
    console.log("Количество кликов:", clicks);
});

window.addEventListener("beforeunload", function () {
    let timeSpent = Math.round((Date.now() - startTime) / 1000);

    console.log("Отчёт аналитики");
    console.log("Клики:", clicks);
    console.log("Время на сайте:", timeSpent, "секунд");
});