// document.getElementById('search-input').addEventListener('keyup', function () {
//     // Получаем введенное значение
//     const query = this.value.toLowerCase();

//     // Получаем список товаров
//     const items = document.querySelectorAll('.product-list');

//     // Проходим по каждому элементу списка
//     items.forEach(item => {
//         // Проверяем, содержит ли элемент текст поиска
//         if (item.textContent.toLowerCase().includes(query)) {
//             item.classList.remove('hidden'); // Показываем элемент, если он соответствует запросу
//         } else {
//             item.classList.add('hidden'); // Скрываем элемент, если он не соответствует
//         }
//     });
// });

// async function getResponce() {
//     try {
//         let responce = await fetch("./shop.json");
//         if (!responce.ok) {
//             throw new Error(`HTTP error! Status: ${responce.status}`);
//         }
//         console.log("responce:\n", responce, "\n /responce: \n");
//         let content = await responce.text();
//         console.log("await responce.text()\n", content);
//         content = JSON.parse(content);
//         content = content.slice(0, 8);
//         console.log("content.slice(0, 8)", content);

//         let node_for_insert = document.getElementById("node_for_insert");
//         if (!node_for_insert) {
//             throw new Error("Элемент с id 'node_for_insert' не найден");
//         }

//         for (let key in content) {
//             node_for_insert.innerHTML += `
//             <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
//                 <img style="width: 180px" class="align-self-center" src="${content[key].img}">
//                 <h5 class="card-title">${content[key].title}</h5>
//                 <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
//                 <input type="hidden" name="vendor_code" value="${content[key].vendor_code}">
//                 <p class="card-text">Заказать <input class="w-25" type="number" name="amount" value="0"></p>
//             </li>`;
//         }
//     } catch (error) {
//         console.error("Ошибка загрузки данных:", error);
//     }
// }
// getResponce();

// const sweaters = [
//     {
//         "id": "1",
//         "title": "Футболка",
//         "vendor_code": "111",
//         "description": "Хлопок 100%",
//         "price": 2000,
//         "img": "./футболка.jpg"
//     },
//     {
//         "id": "2",
//         "title": "Толстовка",
//         "vendor_code": "222",
//         "description": "Флис 50%, Хлопок 40%, Эластан 10%",
//         "price": 4000,
//         "img": "./толстовка.jpg"
//     },
//     {
//         "id": "3",
//         "title": "Толстовка на молнии",
//         "vendor_code": "333",
//         "description": "Флис 50%, Хлопок 40%, Эластан 10%",
//         "price": 3500,
//         "img": "./Толстовка на молнии.jpg"
//     },
//     {
//         "id": "4",
//         "title": "Штаны",
//         "vendor_code": "444e",
//         "description": "Флис 30%, Хлопок 60%, Эластан 10%",
//         "price": 3000,
//         "img": "./Штаны.jpg"
//     },
//     {
//         "id": "5",
//         "title": "Носки",
//         "vendor_code": "4445e",
//         "description": "Хлопок 100%",
//         "price": 1000,
//         "img": "./носки.webp"
//     },
//     {
//         "id": "6",
//         "title": "Ветровка",
//         "vendor_code": "4446e",
//         "description": "Нейлон 30%, Замша 30%, Хлопок 30%, Полиэстер 10%",
//         "price": 4000,
//         "img": "./втеровка.jpg"
//     },
//     {
//         "id": "7",
//         "title": "Кепка",
//         "vendor_code": "4447e",
//         "description": "Хлопок 100%",
//         "price": 2000,
//         "img": "./кепка.jpg"
//     },
//     {
//         "id": "8",
//         "title": "Леггинсы",
//         "vendor_code": "4448e",
//         "description": "Вискоза 65%, Полиэстер 30%, Эластан 5%",
//         "price": 3500,
//         "img": "./леггинсы.jpg"
//     },
//     {
//         "id": "9",
//         "title": "Топ спортивный",
//         "vendor_code": "4499e",
//         "description": "Бифлекс 30%, Футер 30%, Хлопок 40%",
//         "price": 3000,
//         "img": "./топ.jpg"
//     }
// ];

// // Функция для создания блока с информацией о свитере
// function createProductBlock(sweater) {
//     const block = document.createElement("div");
//     block.classList.add("product-block");

//     const image = document.createElement("img");
//     image.src = sweater.img; // Исправлено свойство
//     block.appendChild(image);

//     const description = document.createElement("h3");
//     description.textContent = sweater.description;
//     block.appendChild(description);

//     const price = document.createElement("p");
//     price.textContent = `Цена: ${sweater.price} руб.`;
//     block.appendChild(price);

//     return block;
// }

// const productContainer = document.getElementById("product-container");
// if (productContainer) {
//     sweaters.forEach(sweater => {
//         const productBlock = createProductBlock(sweater);
//         productContainer.appendChild(productBlock);
//     });
// } else {
//     console.error("Элемент с id 'product-container' не найден");
// }