//create a component and "product-display" is the namea
app.component('product-display', {
  //props from main js
  props: {
    premuim: {
      type: Boolean,
      required: false
    }
  },
  /* redener html code */
  template: `
  <div class="product-display">
  <div class="product-container">
    <div class="product-image">
        <!--Attribute Binding v-bind or just : -->
        <img :src="image">
    </div>
    <div class="product-info">
      <h1>{{ product }}</h1>
      <p>Shipping: {{shipping}}</p>
      <!-- if inStock is false, we’ll see “Out of Stock” -->
      <p v-if="inventory > 10">In Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 0">Stocks are less than 10</p>
      <p v-else>Out Of Stock</p>
      <ul>
        <!-- Inside the v-for expression, we wrote: detail in details. looping through it to print out a new li -->
        <li v-for="detail in details">{{detail}}</li>
      </ul>
      <!-- key atttribute for unqie id in the array -->
      <div 
      v-for="variant in variants" :key="variant.id" 
      @mouseover=" updatedImage(variant.image)"
      class="color-circle"
      :style="{backgroundColor: variant.color}" 
      ></div>
      <button class="button" v-on:click="addToCart" :disabled="!inventory" :class="{disabledButton:!inventory}">Add to Cart</button>
    </div>
  </div>
</div> `
  , data() {
    return {
      product: "Socks",
      brand: 'Vue Mastery',
      selectedVariant: 0,
      inventory: 100,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updatedImage(variantImage) {
      this.image = variantImage
    },


  },
  computed: {

    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if (this.premuim) {
        return "Free"
      }
      return 2.99
    }
  }

})

