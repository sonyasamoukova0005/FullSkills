const sweaters = [
    {
        "id": "1",
        "title": "Футболка",
        "vendor_code": "111",
        "description": "Хлопок 100%",
        "price": 2000,
        "img": "футболка.jpg"
        
    },
    {
        "id": "2",
        "title": "Толстовка",
        "vendor_code": "222",
        "description": "Флис 50%, Хлопок 40%, Эластан 10%",
        "price": 4000,
        "img": "толстовка.jpg"
    },
    {
        "id": "3",
        "title": "Толстовка на молнии",
        "vendor_code": "333",
        "description": "Флис 50%, Хлопок 40%, Эластан 10%",
        "price": 3500,
        "img": "Толстовка на молнии.jpg"
    },
    {
        "id": "4",
        "title": "Штаны",
        "vendor_code": "444e",
        "description": "Флис 30%, Хлопок 60%, Эластан 10%",
        "price": 3000,
        "img": "Штаны.jpg"
    },
    {
        "id": "5",
        "title": "Носки",
        "vendor_code": "4445e",
        "description": "Хлопок 100%",
        "price": 1000,
        "img": "носки.webp"
    },
    {
        "id": "6",
        "title": "Ветровка",
        "vendor_code": "4446e",
        "description": "Нейлон 30%, Замша 30%, Хлопок 30%, Полиэстер 10%",
        "price": 4000,
        "img": "втеровка.jpg"
    },
    {
        "id": "7",
        "title": "Кепка",
        "vendor_code": "4447e",
        "description": "Хлопок 100%",
        "price": 2000,
        "img": "кепка.jpg"
    },
    {
        "id": "8",
        "title": "Леггинсы",
        "vendor_code": "4448e",
        "description": "Вискоза 65%, Полиэстер 30%, Эластан 5%",
        "price": 3500,
        "img": "леггинсы.jpg"
    }
];




// Функция для создания блока с информацией 
function createProductBlock(sweater) {
    const block = document.createElement("div");
    block.classList.add("product-block");

    const image = document.createElement("img");
    image.src = sweater.img; // Исправлено с sweater.image на sweater.img
    block.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = sweater.title; // Добавлено заголовок товара
    block.appendChild(title);

    const description = document.createElement("p");
    description.textContent = sweater.description; // Исправлено на элемент <p> для описания
    block.appendChild(description);
  
    const price = document.createElement("p");
    price.textContent = `Цена: ${sweater.price} руб.;`; // Исправлено на правильный синтаксис шаблона
    block.appendChild(price);

    // Поле для ввода количества
    const amountLabel = document.createElement("label");
    amountLabel.textContent = "Количество:";
    block.appendChild(amountLabel);

    const amountInput = document.createElement("input");
    amountInput.type = "number";
    amountInput.name = "amount";
    amountInput.value = 0; // Значение по умолчанию
    amountInput.min = 0; // Минимальное значение
    amountInput.classList.add("w-25"); // Добавление класса Bootstrap
    block.appendChild(amountInput);
  
    
    return block;
}
const orderButton = document.createElement("button");
    orderButton.textContent = "Заказать";
    orderButton.classList.add("btn", "btn-primary");
    orderButton.onclick = () => {
        // Сбор данных
        const amount = amountInput.value;
        const vendorCode = vendorCodeInput.value
        const url = `https://example.com/order?vendor_code=${vendorCode}&amount=${amount}`;

        // Переход на новый URL
        window.location.href = url;
    }
const productContainer = document.getElementById("product-container");


sweaters.forEach(sweater => {
    const productBlock = createProductBlock(sweater);
    productContainer.appendChild(productBlock);
});

