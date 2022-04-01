const app = {
    data() {
        return {
            title: 'Curso Vue3',
            subTitle: 'na veia',
            products: [{
                title: "Produto 1",
                name: "Produto",
                lastName: "Simples",
                image: "./assets/images/no_image.png",
            },{
                title: "Produto 2",
                name: "Produto",
                lastName: "Mediano",
                image: "./assets/images/no_image.png",
            },{
                title: "Produto 3",
                name: "Produto",
                lastName: "Ótimo",
                image: "./assets/images/no_image.png",
            },{
                title: "Produto 4",
                name: "Produto",
                lastName: "Excelente",
                image: "./assets/images/no_image.png",
            },],
            cart: []
        }
    },

    computed: {
        fullName () {
            return this.title + ' ' + this.subTitle;
        }
    },
    methods: {
        addCart(product){
            this.cart.push(product);
        },
        inCart(product){
            return this.cart.indexOf(product) != -1;
        },
        rmCart(product){
            this.cart = this.cart.filter((prod, index) => product != prod);
        }
    },
};

Vue.createApp(app).mount('#app');