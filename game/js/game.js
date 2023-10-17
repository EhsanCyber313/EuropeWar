let $ = document
// let goldJade = $.querySelector('.gold-jade')
// let woodJade = $.querySelector('.wood-jade')
// let personJade = $.querySelector('.person-jade')
// let stoneJade = $.querySelector('.stone-jade')
let goldAll = $.querySelector('.gold-all')
let woodAll = $.querySelector('.wood-all')
let personAll = $.querySelector('.person-all')
let stoneAll = $.querySelector('.stone-all')
let meatAll = $.querySelector('.meat-all')
let wheatAll = $.querySelector('.wheat-all')
let happyAll = $.querySelector('.happy-all')

let allNums = $.querySelectorAll('.number')
let upgrade = $.querySelector('.upgrade')

let btnJade = $.querySelector('.button-jade')
let btnKarvan = $.querySelector('.button-karvan')
let btnRestooran = $.querySelector('.button-restooran')
let btnMaabad = $.querySelector('.button-maabad')
let btnWooder = $.querySelector('.button-wooder')
let btnFarm = $.querySelector('.button-farm')
let btnShekar = $.querySelector('.button-shekar')
let btnPeople = $.querySelector('.button-people')
let btnMadan = $.querySelector('.button-madan')
let sell = $.querySelector('.sell')

let levelJade = $.querySelector('.jade-lvl')
let levelKarvan = $.querySelector('.karvan-lvl')
let levelRestooran = $.querySelector('.restooran-lvl')
let levelMaabad = $.querySelector('.maabad-lvl')
let levelwooder = $.querySelector('.wooder-lvl')
let levelFarm = $.querySelector('.farm-lvl')
let levelShekar = $.querySelector('.shekar-lvl')
let levelPeople = $.querySelector('.people-lvl')
let levelMadan = $.querySelector('.madan-lvl')

let structures = {
    jade: {gold: 1000, wood: 250, person: 25, stone: 25},
    karvan: {gold: 1000, wood: 500, person: 25, stone: 25},
    restooran: {gold: 1000, wood: 750, person: 25, stone: 25},
    maabad: {gold: 1000, wood: 250, person: 50, stone: 25},
    wooder: {gold: 750, wood: 0, person: 25, stone: 0},
    farm: {gold: 500, wood: 100, person: 25, stone: 25},
    shekar: {gold: 2000, wood: 300, person: 50, stone: 50},
    people: {gold: 750, wood: 250, person: 0, stone: 25},
    madan: {gold: 750, wood: 250, person: 50, stone: 0},
}
let result = {
    jade: {gold: 1000},
    karvan: {gold: 1500},
    restooran: {gold: 2000},
    maabad: {happy: 2},
    wooder: {wood: 500},
    farm: {wheat: 500},
    shekar: {meat: 350},
    people: {person: 250},
    madan: {stone: 300},
}

function jade() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelJade.innerHTML = input
}


function karvan() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelKarvan.innerHTML = input 
}

function restooran() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelRestooran.innerHTML = input
}

function maabad() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelMaabad.innerHTML = input
}

function wooder() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelwooder.innerHTML = input
}

function farm() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelFarm.innerHTML = input
}

function people() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelPeople.innerHTML = input
}

function shekar() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelShekar.innerHTML = input
}

function madan() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelMadan.innerHTML = input
}

function upgred(){
    var goldResJade = levelJade.innerHTML * result.jade.gold
    var goldResKarvan = levelKarvan.innerHTML * result.karvan.gold
    var goldResRestooran = levelRestooran.innerHTML * result.restooran.gold
    var happyResMaabad = levelMaabad.innerHTML * result.maabad.happy
    var woodResWooder = levelwooder.innerHTML * result.wooder.wood
    var stoneResMadan = levelMadan.innerHTML * result.madan.stone
    var personResPeople = levelPeople.innerHTML * result.people.person
    var meatResShekar = levelShekar.innerHTML * result.shekar.meat
    var wheatResFarm = levelFarm.innerHTML * result.farm.wheat
    goldAll.innerHTML = goldResJade + goldResKarvan + goldResRestooran
    woodAll.innerHTML = woodResWooder
    happyAll.innerHTML = happyResMaabad
    stoneAll.innerHTML = stoneResMadan
    personAll.innerHTML = personResPeople
    meatAll.innerHTML = meatResShekar
    wheatAll.innerHTML = wheatResFarm
}

btnJade.addEventListener('click', jade)
btnKarvan.addEventListener('click', karvan)
btnRestooran.addEventListener('click', restooran)
btnFarm.addEventListener('click', farm)
btnMaabad.addEventListener('click', maabad)
btnShekar.addEventListener('click', shekar)
btnPeople.addEventListener('click', people)
btnWooder.addEventListener('click', wooder)
btnMadan.addEventListener('click', madan)
upgrade.addEventListener('click', upgred)

sell.addEventListener('click', function() {
    alert("ایشالا در اپدیت بعدی :)")
})