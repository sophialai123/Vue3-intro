//crate a vue app:

const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premuim: true //props

    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
})
