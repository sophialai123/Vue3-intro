app.component("review-list", {
  props: {
    //add reviews array type
    reviews: {
      type: Array,
      required: true
    }
  },
  template: `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li  v-for="(review,index) in reviews" :key="index">
      {{review.name}} gives this {{review.rating}} stars
      <br/>
      Review: "{{review.review}}"
      <br/>
      Recommended: {{review.recommend}}
      </li> 
    </ul>
  </div>
  `
})