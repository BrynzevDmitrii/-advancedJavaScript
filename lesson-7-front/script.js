const API_URL = "http://localhost:3000";


    Vue.component('goods-list', {
        props: ['goods','ttt' ],
        template: `
        <div class="goods-list">
            <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"  @huc="ttt"></goods-item>
            
        </div>
        `
    })
    
    Vue.component('goods-item', {
        props: ['goodProp'],
            methods: {
                async addToCart() {
                const response = await fetch(`${API_URL}/addToCart`, {
                    method: 'POST', 
                    mode: 'cors',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(this.goodProp) 
                });
                },
            },
        template: `
        <div class="goods-item" >
            <h3>{{goodProp.product_name}}</h3>
            <p>{{goodProp.price}}</p>
            <button  class="buy_button" type="button" @click='addToCart'>Купить</button>
        </div>
        `
    })

    
    
    Vue.component('haderserch',{
            props: ['filertplaseholderttt', 'search', 'value','input'],
            template:`
            <div class="header">
                <input type="text"   
                class="goods-search"
                :placeholder = 'filertplaseholderttt'
                @input = "$emit('input')"
                />
                <button @click ="$emit('search')" class="search-button" type="button"  >Искать</button>
                
                <button class="cart-button" type="button">Корзина</button>
            </div>
        
            `
    }
    )


    Vue.component( 'bascet-list',{
        props:['bascettamplat','bascetur'],
        
        template:`
        <div class="bascet">
            <div class="goods-item" v-for="bas in bascettamplat">
                <h3>{{bas.product_name}}</h3>
                <p>{{bas.price}}</p>
            </div>
            <div class="igti" v-if = "bascettamplat.length === 0">Нет данных</div>
        </div>
        `
    })



    new Vue({
    el: "#app",
    data: {
    goods: [],
    filteredGoods: [],
    filertPlaseholder:'Введите название товара',
    searchLine: '',
    bascet: [],
    
    
    },

    methods: {
    async getProducts() {
        const responce = await fetch(`${API_URL}/catalogData`);
        if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
        } else {
        alert("Ошибка при соединении с сервером");
        }
    },


    searchLineRet(){
        this.filteredGoods.forEach(iterator=>{
            if(this.searchLine.toLowerCase() === iterator.product_name.toLowerCase()){
            document.querySelector('.goods-list').innerHTML = this.goods.push(iterator)
        }
        }
        )

        this.searchLine = " "

        },


        rur(){
            let inr = event.toElement.parentElement.children[0].innerHTML;
            this.goods.forEach(r=>{
            if (inr === r.product_name ){
                this.bascet.push(r)
            }
            });


    },

    input(){
        let value = event.target.value;
        this.searchLine =value;
        

        console.log(this.searchLine);

    }

    },



    async mounted() {
    await this.getProducts()
    },

    });