//create a component and "product-display" is the namea
app.component('product-display', {
  //props from main js
  props: {
    //add type here
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
      <h1>{{ title }}</h1>
      <p>Shipping: {{shipping}}</p>
      <!-- if inStock is false, we’ll see “Out of Stock” -->
      <p v-if="inStock">In Stock</p>
      <p v-else>Out Of Stock</p>
      <ul>
        <!-- Inside the v-for expression, we wrote: detail in details. looping through it to print out a new li -->
        <li v-for="detail in details">{{detail}}</li>
      </ul>
      <!-- key atttribute for unqie id in the array -->
      <div 
      v-for="(variant,index) in variants" :key="variant.id" 
      @mouseover=" updatedVariant(index)"
      class="color-circle"
      :style="{backgroundColor: variant.color}" 
      ></div>
      <button class="button" v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton:! inStock}">Add to Cart</button>
    </div>
  </div>
  <!--  display the review on the page and add review's props 
  only show if the reviews have a length -->
  <review-list v-if="reviews.length" :reviews="reviews" ></review-list>
  <!-- Review Form and listening event -->
  <review-form @review-submitted="addReview"></review-form>
</div> 
`
  , data() {
    return {
      product: "Socks",
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
      ],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      //tell the parent app what happended
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updatedVariant(index) {
      this.selectedVariant = index
      console.log(index)
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {

    title() {
      return this.brand + ' ' + this.product
    },
    //use the index to get the image
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

