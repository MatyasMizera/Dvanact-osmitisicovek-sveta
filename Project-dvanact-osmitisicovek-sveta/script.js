const content = {
    1: "Mount Everest – 8848 m",
    2: "K2 – 8611 m",
    3: "Kangchenjunga – 8586 m",
    4: "Lhotse – 8516 m",
    5: "Makalu – 8485 m",
    6: "Cho Oyu – 8188 m",
    7: "Dhaulagiri – 8167 m",
    8: "Manaslu – 8163 m",
    9: "Nanga Parbat – 8126 m",
    10: "Annapurna – 8091 m",
    11: "Gasherbrum I – 8080 m",
    12: "Broad Peak – 8051 m"
};

const buttons = document.querySelectorAll(".menu-button");
const mainContent = document.getElementById("main-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const key = btn.dataset.target;
        mainContent.innerHTML = `<h2>${content[key]}</h2>`;
    });
});
