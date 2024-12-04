// Слушатель на изменение текста поиска
document.getElementById('search-input')?.addEventListener('keyup', function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('.product-list');

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});

// Функция получения данных с сервера
async function getResponse() {
    try {
        const response = await fetch("shop.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const content = await response.json();

        if (!Array.isArray(content)) {
            throw new Error("Полученные данные не являются массивом");
        }

        const nodeForInsert = document.getElementById("node_for_insert");
        if (nodeForInsert) {
            content.slice(0, 8).forEach(item => {
                nodeForInsert.innerHTML += `
                    <li class="product-list d-flex flex-column m-1 p-1 border bg-body">
                        <img class="align-self-center" src="${item.img}" style="width: 180px">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}. Цена: ${item.price} р.</p>
                        <input type="hidden" name="vendor_code" value="${item.vendor_code}">
                        <p class="card-text">Заказать <input class="w-25" type="number" name="amount" value="0"></p>
                    </li>`;
            });
        } else {
            console.error("Элемент с id 'node_for_insert' не найден");
        }

        // Добавляем товары на страницу
        const productContainer = document.getElementById("product-container");
        if (productContainer) {
            content.forEach(item => {
                const productBlock = createProductBlock(item);
                productContainer.appendChild(productBlock);
            });
        } else {
            console.error("Элемент с id 'product-container' не найден");
        }
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
}

// Вызов функции для получения данных
getResponse();

// Функция для создания блока товара
function createProductBlock(item) {
    const block = document.createElement("div");
    block.classList.add("product-block");

    const image = document.createElement("img");
    image.src = item.img;
    block.appendChild(image);

    const description = document.createElement("h3");
    description.textContent = item.title;
    block.appendChild(description);

    const price = document.createElement("p");
    price.textContent = `Цена: ${item.price} руб.`;
    block.appendChild(price);

    return block;
}


