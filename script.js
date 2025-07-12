
// Замените на ваш API или сайт:
const API_URL = https://hellhades.com/wp-json/hh-api/v3/event-timers"; // <-- ВСТАВЬТЕ СЮДА СВОЙ URL

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // Предположим, что сервер возвращает JSON вида: { "title": "Свежая новость!" }
    document.getElementById('content').textContent = data.title;
  })
  .catch(error => {
    document.getElementById('content').textContent = 'Ошибка загрузки данных';
    console.error("Ошибка при получении данных:", error);
  });
