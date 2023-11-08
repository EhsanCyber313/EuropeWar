let $ = document;
let buttonEdit = $.querySelector('.button-edit');
let nameLord = $.querySelector('#nameLord');
const nameCountry = $.getElementById('nameCountry')
const nameCity = $.getElementById('nameCity')


buttonEdit.addEventListener('click', function () {
    let inputName = prompt('نام جدید لرد خود را وارد کنید:');
    let inputCountry = prompt('نام جدید کشور خود را وارد کنید:');
    let inputCity = prompt('نام جدید شهر خود را وارد کنید:');
    localStorage.setItem('newLord', inputName);
    localStorage.setItem('newCountry', inputCountry);
    localStorage.setItem('newCity', inputCity);
    nameLord.innerHTML = localStorage.getItem("newLord");
    nameCountry.innerHTML = localStorage.getItem("newCountry");
    nameCity.innerHTML = localStorage.getItem("newCity");
})
nameLord.innerHTML = localStorage.getItem("newLord");
nameCountry.innerHTML = localStorage.getItem("newCountry");
nameCity.innerHTML = localStorage.getItem("newCity");
