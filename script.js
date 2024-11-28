let remainingTime = 90; // 90 секунд
const timerElement = document.getElementById('timer');
const contentElement = document.getElementById('content');

// Обновление таймера каждую секунду
const timerInterval = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
    const seconds = (remainingTime % 60).toString().padStart(2, '0');
    timerElement.textContent = `${minutes}:${seconds}`;

    if (remainingTime <= 0) {
        clearInterval(timerInterval); // Останавливаем таймер
        transitionToNextPage(); // Запускаем переход
    } else {
        remainingTime--;
    }
}, 1000);

// Переход после завершения таймера
function transitionToNextPage() {
    console.log('Таймер завершён. Исчезновение страницы.'); // Для отладки
    contentElement.classList.add('hidden'); // Скрываем контент

    setTimeout(() => {
        document.body.style.opacity = '0'; // Постепенное исчезновение всей страницы
    }, 0);

    setTimeout(() => {
        window.location.href = 'index2.html'; // Переход на другую страницу
    }, 5000); // Через 1.5 секунды
}