
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const timerElement = document.querySelectorAll(".timer");
const scrollBtns = document.querySelectorAll(".scroll-btn");

// Таймер
let countdown = 90; // 1.5 хв
let currentPage = 1;

function startTimer() {
	let remainingTime = countdown;

	const timerInterval = setInterval(() => {
		const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
		const seconds = String(remainingTime % 60).padStart(2, "0");

		timerElement.forEach(timer => timer.textContent = `${minutes}:${seconds}`);

		if (remainingTime <= 0) {
			clearInterval(timerInterval);
			switchPages();
		}
		remainingTime--;
	}, 1000);
}

// Перемикання сторінок
function switchPages() {
	if (currentPage === 1) {
		page1.classList.remove("active");
		setTimeout(() => {
			page2.classList.add("active");
			currentPage = 2;
			startTimer();
		}, 1000); 
	} else {
		page2.classList.remove("active");
		setTimeout(() => {
			page1.classList.add("active");
			currentPage = 1;
			startTimer();
		}, 1000);
	}
}

// Скрол до верху
scrollBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
});

// Ініціалізація
page1.classList.add("active");
startTimer();


