const goods = [
    { title: 'Кольца', price: 7, illustration:'radius.jpg'},
    { title: 'Трубы', price: 5, illustration:'pipes.jpg'},
    { title: 'Фундаменты', price: 35, illustration:'foundations.jpg'},
    { title: 'Панели', price: 25, illustration:'panels.jpg'},
    ]
    
    const renderGoodsItem = (title, price, illustration) => {
    return `<div class="goods__item"><div class = "img__product"><img src = img/${illustration} alt="title-logo" widht = 300, height = 200></div>
    <h3 class = "title">${title}</h3>
    <p class = "subtitle"> от ${price} тысяч рублей</p>
    <button class ="buy" type = "button"> Купить</button>
    </div>` 
    } 

    const renderGoodsList = list => {
        let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.illustration)).join('');


        //   const goodsListDiv = document.querySelector('.goods-list')
        //   goodsListDiv.innerHTML = goodsList
            
        document.querySelector('.goods__list').innerHTML = goodsList
            } 

            //Заполняем корзину
    let fret = document.querySelector('.img__product');



        //**создаем лого коомпани
const img = [
        {logo: 'DSKlogo.png '},
        {backgraund:'flag.jpg'},
    ]

    const headerLogo = (logo)=>{
        return`<div class = "header__logo"><img src = img/${logo} alt="logo" class="logo-dsk></div> `
    }

    const renderHedarLogo = (obj) => {
        let renderLogo = obj.map(item =>headerLogo(item.logo))
        document.querySelector('.header').innerHTML += renderLogo
    }



//разделы сайта
const itemMenu = [
    {title: 'Продукция',src: 'section/product.html'},
    {title: 'услуги',src: 'section/services.html'},
    {title: 'Доставка',src: 'section/delivery.html'},
    {title: 'Сотрудничество',src: 'section/cooperation.html'},
    {title: 'О нас',src: 'section/About_us.html'}
]

const menu = (src,title)=>{
    return `<div class = "menu"><div class = "menu__item"><a href = ${src}>${title}</a></div> `
}

const menuRender = (f)=>{
        let renderMenu = itemMenu.map(item =>menu(item.src, item.title)).join('')
        document.querySelector('.header').innerHTML += renderMenu
    }

// Кнопка с корзиной.higiioihouhohhuhouh

    const bascet = ()=>{
        return document.querySelector('.header')
    .innerHTML += `<div><button class="cart-button" type="button"><a href="/basket.html"> Корзина</a></button></div>`
}
//счетчик корзинки

const score = ()=>{
    let fullProduct = goods.push("scoreclik");
    
    return  document.querySelector('.cart-button').innerHTML= `<a href="/basket.html"><div class= score >${fullProduct - 4}</div></a>`;

}



const buttn = () =>{
    const btn = document.querySelectorAll('.goods__item');
    for(z of btn){
    z.addEventListener('click',score);
};  
    ;
}  


const buyRender = () =>
{
    document.querySelectorAll('.buy').forEach((item)=>{

        item.addEventListener('click',function(){
            goods.forEach((ler) => {
    return `<div class = "bascet-uhu">
        <div class = "img-bascet"> <img src = ${ler.illustration}></div>
        <div class = "title"><h1>${ler.title}</h1></div>
        <div class = "prise"><h2>${ler.price}</h2></div>
                </div>`
    
    });
})})}

const buy = ()=>{
        //document.querySelector(".bas").innerHTML += buyRender();
        console.log(buyRender());
    }




    
    const init = () => {
    renderGoodsList(goods)
    renderHedarLogo(img)
    bascet()
    buttn()
    menuRender()
    buy()
    }
    
    window.onload = init;