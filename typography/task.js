function calculateChange() {
    let amount = parseInt(document.getElementById("moneyInput").value);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Введите корректную сумму!";
        return;
    }

    let razmen_po_500 = Math.floor(amount / 500);
    amount %= 500;

    let razmen_po_100 = Math.floor(amount / 100);
    amount %= 100;

    let razmen_po_10 = Math.floor(amount / 10);
    amount %= 10;

    let razmen_po_2 = Math.floor(amount / 2);
    amount %= 2;

    if (amount !== 0) {
        document.getElementById("result").innerText = "Невозможно разменять сумму!";
        return;
    }

    document.getElementById("result").innerText = `500 руб. - ${razmen_po_500} шт., 100 руб. - ${razmen_po_100} шт., 10 руб. - ${razmen_po_10} шт., 2 руб. - ${razmen_po_2} шт.`;
}

function submitForm() {
    let amount = parseInt(document.getElementById("moneyInput").value);
    let razmen_po_500 = Math.floor(amount / 500);
    amount %= 500;

    let razmen_po_100 = Math.floor(amount / 100);
    amount %= 100;

    let razmen_po_10 = Math.floor(amount / 10);
    amount %= 10;

    let razmen_po_2 = Math.floor(amount / 2);
    amount %= 2;

    if (amount !== 0) {
        alert("Невозможно разменять сумму!");
        return;
    }

    let url = `https://www.bing.com/search?q=Задача: Разменять денежную сумму, где x=${document.getElementById("moneyInput").value}; 500 руб. - ${razmen_po_500} шт., 100 руб. - ${razmen_po_100} шт., 10 руб. - ${razmen_po_10} шт., 2 руб. - ${razmen_po_2} шт.;`;
    window.open(url, "_blank");
}

function clearForm() {
    document.getElementById("moneyInput").value = '';
    document.getElementById("result").innerText = '';
}