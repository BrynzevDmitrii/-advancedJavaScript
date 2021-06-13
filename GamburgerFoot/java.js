const BURGER = [
    {size: 'smol', price: 50, callories: 20 },
    {size: 'big', price: 100, callories: 40 },
];

const STUFF = [
    {stuffing:'cheese', priceStuf: 10, calloriesStuf:20},
    {stuffing:'salad', priceStuf: 20, calloriesStuf:5},
    {stuffing:'potato', priceStuf: 15, calloriesStuf:10}
]
const prices = [];
const collories = [];

class Hamburger {
    constructor(size, stuffing, price, callories, priceStuf, calloriesStuf) { 
        this.size = size;
        this.stuffing = stuffing;
        this.price = price;
        this.callories = callories;
        this.priceStuf = priceStuf;
        this.calloriesStuf = calloriesStuf;
        
    }
//cart
    renderCard(){
        document.querySelector('.bascet').innerHTML = `<div class ='bascet__title'>Ваш выбор :</div>`
    }

    // рендерим выбор бургеров
    renderSelect(){
        return `<div class = 'selectSizeBurger'>
        <div class ='jhiuo'><button id = 'smol' class = 'size_smol' type = 'button'>${BURGER[0].size}</button>
        <div class = "title"> Цена: ${BURGER[0].price} руб , 
        Каллории: ${BURGER[0].callories}</div>
        <div class ='jhiuo'><button id = 'big' class = 'size_big' type = button>${BURGER[1].size}</div>
        <div class = "title"> Цена: ${BURGER[1].price} руб , 
        Каллории: ${BURGER[1].callories}</div>
        </div>`
    
    }

    //рендерим добавки
    renderSelectStuff(){
        return`<div class = 'stuff'>
        <div class = 'stuffTitle'>Выберите добавку
            <div class = 'select'>
                <div class ='stuff__title' ><h2>${STUFF[0].stuffing}</h2></div>
                <div class='priseSlecdt'> Стоимость добавки : ${STUFF[0].priceStuf} рублей</div>
                <div class= 'coloriaSilected'>Калорийность добавки : ${STUFF[0].calloriesStuf} Клкалорий</div>
                <button class = 'gf' id = "cheese" type = 'button'>+</button> <button class ='_minus' id ="cheese" type = 'button'>-</button>
            </div>
            <div class = 'select'>
            <div class ='stuff__title' ><h2>${STUFF[1].stuffing}</h2></div>
                <div class='priseSlecdt'>Стоимость добавки : ${STUFF[1].priceStuf} рублей</div>
                <div class= 'coloriaSilected'>Калорийность добавки :${STUFF[1].calloriesStuf} Клкалорий</div>
                <button class = 'gf' id ="salad" type = 'button'>+</button> <button id ="salad_minus" type = 'button'>-</button>
            </div>
            <div class = 'select'>
            <div class ='stuff__title' ><h2>${STUFF[2].stuffing}</h2></div>
                <div class='priseSlecdt'> Стоимость добавки :${STUFF[2].priceStuf} рублей</div>
                <div class= 'coloriaSilected'>Калорийность добавки :${STUFF[2].calloriesStuf} Клкалорий</div>
                <button class = 'gf' id = "potato" type = 'button'>+</button> <button id = "potato_minus" type = 'button'>-</button>
            </div>
        </div>`
    }


    huu(){
        document.querySelector('.burger').innerHTML = this.renderSelect();
    }
    //добавление добавок в корзину
    select() {
        
        document.onclick=event=>{
            if (event.target.classList.contains('size_smol')) { 
                document.querySelector('.bascet').innerHTML += smolBurgerPrises();
                
            }
            else if (event.target.classList.contains('size_big')) {
                document.querySelector('.bascet').innerHTML += bigBurgerPrises();
            }
            else if(event.target.classList.contains('gf')){
                if (!document.querySelector('.rendBascetSmol'||'.rendBascetBig')) {
                    alert('Выберите размер гамбургера!!!')
                }
                document.querySelector('.bascet').innerHTML += stuff();
                
            }
            else if (event.target.classList.contains('_minus')) {
            removeStuff()
            }
    
}
function smolBurgerPrises(){
    prices.push(BURGER[0].price);
    collories.push(BURGER[0].callories);
    return `<div class = "rendBascetSmol">${event.target.outerHTML} + </div>`;
    
}

function bigBurgerPrises(){
    prices.push(BURGER[1].price);
    collories.push(BURGER[1].callories);
    return `<div class = "rendBascetBig">${event.target.outerHTML} + </div>`
}

function stuff(){
    if (event.target.id == "cheese" ) {
        prices.push(STUFF[0].priceStuf);
        collories.push(STUFF[0].calloriesStuf);
    }
    else if (event.target.id == "salad"){
        prices.push(STUFF[1].priceStuf);
        collories.push(STUFF[1].calloriesStuf)
    } 
    else if (event.target.id == "potato") {
        prices.push(STUFF[2].priceStuf);
        collories.push(STUFF[2].calloriesStuf);
    }
    
    //return `<div class = 'addStuff'>${event.target.id}</div>`
    
}

function removeStuff(){

    document.querySelectorAll('.addStuff').forEach(element => {
        console.log(element);
    });
}


}


//  удаление добавок



    //отрисовка добавок
    getToppings() { document.querySelector('.staffing').innerHTML = this.renderSelectStuff() }
    calculatePrice() {
        
        let sum = 0;
        
        //return document.querySelector('.bascet').innerHTML 
    }
    
        
    
    calculateCalories() {     'Узнать калорийность' }
}




let brger = new Hamburger;

brger.renderCard()
brger.huu()
brger.select()
brger.getToppings()
brger.select()
brger.calculatePrice()
