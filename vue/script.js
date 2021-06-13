
const API_URL =
"https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";



const app = new Vue({
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
    const responce = await fetch(`${API_URL}/catalogData.json`);
    if (responce.ok) {
      const catalogItems = await responce.json();
      this.goods = catalogItems;
      this.filteredGoods = catalogItems;
      console.log(this.goods);
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
    this.searchLine = ""
        
      },


      rur(i,event){
        let inr = event.toElement.parentElement.children[0].innerHTML;
        this.goods.forEach(r=>{
          if (inr === r.product_name ){
            this.bascet.push(r)
          }
        });
        
    
    
  },

},



async mounted() {
  await this.getProducts()
},

});