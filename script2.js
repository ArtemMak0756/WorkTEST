let remainingTime = 90; // Таймер на 90 секунд
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

// Плавное появление элементов на странице
window.addEventListener('load', () => {
    document.body.style.opacity = '1'; // Плавное появление фона
    setTimeout(() => {
        contentElement.style.opacity = '1'; // Плавное появление содержимого
    }, 0);
});

// Переход на другую страницу после истечения таймера
function transitionToNextPage() {
    console.log('Таймер завершён. Переход на следующую страницу.');
    window.location.href = 'index.html'; // Переход на другую страницу (замените на нужную)
}