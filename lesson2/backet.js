class BascetLend {
    constructor(img, articul, title, prise, state ) {
        this.img = img;
        this.articul = articul;
        this.title = title;
        this.prise = prise;
        this.state = state;
    }

    render() {
        return `<div class = "bascet-item">
        <div class = "img-bascet"> <img src = ${this.img}></div>
        <div class = "articul"><p>${this.articul}</p></div>
        <div class = "title"><h1>${this.title} рублей</h1></div>
        <div class = "prise"><h2>${this.prise} </h2></div>
        <div class = "state">Артикул: <h3>${this.state}</h3></div>
                </div>`
    }

}

class BascetList{
    constructor(){
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            {img:'/img/foundations.jpg', articul:'5-60-00', title:'Фундамент стаканного типа', prise:56000, state:'В наличии'},
            {img:'/img/foundations.jpg', articul:'56-00-0',title:'Фундамент стаканного типа', prise: 56000,state:'В наличии'},
            {img:'/img/foundations.jpg', articul:'560-0-0', title:'Фундамент стаканного типа', prise:56000 ,state:'В наличии'},
            {img:'/img/foundations.jpg', articul:'56-00-0', title:'Фундамент стаканного типа', prise: 56000,state:'В наличии'},
            {img:'/img/foundations.jpg', articul:'56-00-0', title:'Фундамент стаканного типа', prise: 56000,state:'В наличии'},
            {img:'/img/foundations.jpg', articul:'560-0-0', title:'Фундамент стаканного типа', prise:56000 ,state:'В наличии'},
        ];
}   
    render(){
        let renderHtml = '';
        this.goods.forEach((item) =>{
            const goodItem = new BascetLend(item.img, item.title, item.prise, item.state,item.articul)
            renderHtml += goodItem.render();
        });
        document.querySelector('.hader').innerHTML = renderHtml;
    }

    filterPrise(){
        
    
    }
    
    sumGoods(){
        let articulGoods = 0;
    for (let i = 0; i < this.goods.length; i++) {
            articulGoods += this.goods[i].prise;
        }
        return articulGoods;
        
    }

    renderSum(){
    let ygi = document.querySelector('.sumprice').innerHTML=`Итого: ${this.sumGoods()} рублей`;
    console.log(ygi);
    }
}

const tre = new BascetList();
tre.fetchGoods() 
tre.render()
tre.filterPrise()
tre.sumGoods()
tre.renderSum()

