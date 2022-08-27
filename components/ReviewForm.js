app.component('review-form', {
  /* render html */
  template: `<form class="review-form" @submit.prevent="onSubmit">
  <h3>Leave a review</h3>
  <label for="name">Name:</label>
  <input id="name" v-model="name">

  <label for="review">Review:</label>      
  <textarea id="review" v-model="review"></textarea>

  <label for="rating">Rating:</label>
  <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
  </select>

  <label for="recommend">Would you recommend this product?</label>
  <select id="recommend" v-model="recommend">
    <option>Yes</option>
    <option>No</option>
  </select>
  <input class="button" type="submit" value="Submit">
</form>`,
  data() {
    return {
      name: '',
      review: "",
      rating: null,
      recommend: null
    }
  },
  methods: {
    onSubmit() {
      //form validation
      if (this.name === '' || this.review === '' || this.rating === '' || this.recommend === '') {
        alert("Please fill all the inputs")
        return
      }
      //create an object 
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend
      }
      //emit to the app parent, 
      // productReview is the payload
      this.$emit('review-submitted', productReview)
      //reset the values
      this.name = ''
      this.review = ''
      this.rating = null
      this.recommend = null
    }
  }
})