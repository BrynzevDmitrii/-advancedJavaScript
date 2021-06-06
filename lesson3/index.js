class GoodsItem {
        constructor(title, price, illustration, id){
            this.title = title;
            this.price = price;
            this.illustration = illustration;
            this.id = id;
        }
    renderGoodsItem () {
    return `<div class="goods__item">
    <div class = "img__product">
    <img src = img/${this.illustration} alt="title-logo" widht = 300, height = 200>
    </div>
    <h3 class = "title">${this.title}</h3>
    <p class = "subtitle"> от ${this.price} тысяч рублей</p>
    <button id = "${this.id}" class ="buy" type = "button"> Купить</button>
    </div>` 
    } 
    
    
}

class GoodsList{
    constructor() {
        this.goods = [];
        }

        fetchGoods() {
            this.goods = [
                { title: 'Кольца', price: 7, illustration:'radius.jpg',id:1},
                { title: 'Трубы', price: 5, illustration:'pipes.jpg',id:2},
                { title: 'Фундаменты', price: 35, illustration:'foundations.jpg', id:3},
                { title: 'Панели', price: 25, illustration:'panels.jpg',id:4},
    
                ];
            }

        renderGoodsList = () => {
                let listHtml = "";
    this.goods.forEach((good) => {
        const goodItem = new GoodsItem(good.title, good.price,good.illustration,good.id);
        listHtml += goodItem.renderGoodsItem();
    });
    document.querySelector(".goods__list").innerHTML = listHtml;
                    } 
}
 //**создаем лого коомпани

class Logo{
    constructor(logo, backgraund,make){
        this.logo= logo;
        this.backgraund = backgraund;
        this.make = [];
    }
    img () {
    this.make = [
        {logo: 'DSKlogo.png '},
    ];
}

    headerLogo(){
        return`<div class ="header__logo">
        <img class="logo-dsk" src = img/${this.logo}>
        </div> `
    }

    renderHedarLogo () {
        let renderLogo =  '';
        this.make.forEach((item)=>{
        const logoIt = new Logo(item.logo,item.backgraund);
        renderLogo =logoIt.headerLogo();
        })
        document.querySelector('.header').innerHTML += renderLogo;
    }

}


//разделы сайта
class HeaderMenu{
    constructor(title, src){
        this.title = title;
        this.src = src;
        this.itemMenu = [];
    }

    headerRnu(){
    this.itemMenu = [

    { title:'Продукция',src: 'section/product.html'},
    { title: 'услуги',src: 'section/services.html'},
    { title: 'Доставка',src: 'section/delivery.html'},
    { title: 'Сотрудничество',src: 'section/cooperation.html'},
    { title: 'О нас',src: 'section/About_us.html'}
    ];
}

    menuRfr(){
    return `<div class ="menu__item">
    ${this.title}
    </div> `
}

    menuRender(){
        let renderMenu = '';
        this.itemMenu.forEach((pop) =>{
        let rty = new HeaderMenu(pop.title);
        renderMenu += rty.menuRfr()
        });
        
        document.querySelector('.header').innerHTML += renderMenu;
    }
}
// корзина


class BucketItem {
    constructor(){

    }



bascetTeew(){
    return document.querySelector('.header').innerHTML +=  `<div>
    <button class ="cart-button" type="button">
    <a href="/basket.html"> Корзина</a>
    </button></div>`
}




buttnClickAdd() {
    let r = document.querySelectorAll('.buy')
    r.forEach((x)=>{ 
        x.addEventListener('click', function(event){
            if (event.target.id == "1") {
            return document.querySelector('.basketlist').innerHTML += ` <div class = "img__productBascet">
            <img src = img/radius.jpg alt = "title-logo" widht = 80, height = 80>
            <h3>Кольца</h3>
            <button class = "min"  type = button>Убрать</button>
            </div>`
            }else if (event.target.id == "2") {
                return document.querySelector('.basketlist').innerHTML += ` <div class = "img__productBascet">
            <img src = img/pipes.jpg alt = "title-logo" widht = 80, height = 80>
            <h3>Трубы</h3>
            <button class = "min"  type = button>Убрать</button>
            </div>`
            }else if (event.target.id == "3") {
                return document.querySelector('.basketlist').innerHTML += ` <div class = "img__productBascet">
            <img src = img/foundations.jpg alt = "title-logo" widht = 80, height = 80>
            <h3>Фундаменты</h3>
            <button class = "min"  type = button>Убрать</button>
            </div>`
            }else if (event.target.id == "4") {
                return document.querySelector('.basketlist').innerHTML += ` <div class = "img__productBascet">
            <img src = img/panels.jpg alt = "title-logo" widht = 80, height = 80>
            <h3>Панели</h3>
            <button class = "min"  type = button>Убрать</button>
            </div>`
            }
        })
    });
    console.log(r);
}


removeBucketList(){
let y = document.querySelectorAll('.min');
    console.log(y);

}


async yttg(colli,ohy){
    await colli;
    await ohy;

// let gres = document.querySelector('.img__productBascet')
//     if (bast.children ==gres) {
//         console.log('boj')
//     }
//     else{
//         console.log('uy')
//     }
// }

}


}



/* const buyRender = () =>
//{
    document.querySelectorAll('.buy').forEach((item)=>{

        item.addEventListener('click',function(){
            goods.forEach((ler) => {
    return `<div class = "bascet-uhu">
        <div class = "img-bascet"> <img src = ${ler.illustration}></div>
        <div class = "title"><h1>${ler.title}</h1></div>
        <div class = "prise"><h2>${ler.price}</h2></div>
                </div>`
    
//     });
// })})}
 */
// const buy = ()=>{
        //document.querySelector(".bas").innerHTML += buyRender();
    //     console.log(buyRender());
    // }



const item = new GoodsItem();
const list = new GoodsList();
const logo = new Logo();
const headMenu = new HeaderMenu();
const basecrtImg = new BucketItem()
    
    const init = () => {
        list.fetchGoods()
        list.renderGoodsList()
        logo.img()
        logo.renderHedarLogo()
        headMenu.headerRnu()
        headMenu.menuRender()
        basecrtImg.bascetTeew()
        //basecrtImg.buttnClickAdd()
        //basecrtImg.removeBucketList()
        basecrtImg.yttg(basecrtImg.buttnClickAdd(), basecrtImg.removeBucketList())
    }
    
    window.onload = init;