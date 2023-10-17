let $ = document
let buttonEdit = $.querySelector('.button-edit')
let nameLord = $.querySelector('#nameLord')

buttonEdit.addEventListener('click', function () {
    let input = prompt('نام جدیدی که میخواهید را وارد کنید:')
    nameLord.innerHTML = input

})