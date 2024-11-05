document.getElementById('translateButton').addEventListener('click', function() {
    const issuedText = document.getElementById('issued');
    const surnameText = document.getElementById('surname');
    const nameText = document.getElementById('name');
    const patronymicText = document.getElementById('father');
    const genderText = document.getElementById('gender');
    const birthplaceText = document.getElementById('birthplace');

    if (issuedText.innerText === 'ГУ МВД РОССИИ ПО Г. МОСКВЕ') {
        issuedText.innerText = 'MOSCOW GU MVD OF RUSSIA ';
        surnameText.innerText = 'SAMOUKOVA';
        nameText.innerText = 'SOFIA';
        patronymicText.innerText = 'ALEKSEEVNA';
        genderText.innerText = 'FEMALE';
        birthplaceText.innerText = 'MOSCOW';
    } else {
        issuedText.innerText = 'ГУ МВД ПО Г. МОСКВЕ';
        surnameText.innerText = 'САМОУКОВА';
        nameText.innerText = 'СОФЬЯ';
        patronymicText.innerText = 'АЛЕКСЕЕВНА';
        genderText.innerText = 'ЖЕН';
        birthplaceText.innerText = 'МОСКВА';
    }
});