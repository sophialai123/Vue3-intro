# [Vue3 Intro](https://www.vuemastery.com/courses/intro-to-vue-3/class-and-style-binding-vue3/)

## Attribute Binding

To create a bond between an HTML element’s attribute and a value from your Vue app’s data, we’ll use a Vue directive called `v-bind`.

`v-bind:` cases:
```
<img :src="image">

<img :alt="description">

a :href="url" target="_blank">Sophia's Github'</a>

<div :class="isActive"></div>

<span :style="isActive"></span>

<span  :disabled="isdisabled"></span>
```

---
## Conditional Rendering
### The `v-if` directive
We can add the `v-if` directive onto an element to render it based upon a condition, like so:

`<p v-if="inStock">In Stock</p>`

We can combine the `v-if` directive with its sister directive `v-else` to display another element as the fallback if the first condition turns out to be falsey.

```
<p v-if="inStock">In Stock</p>
<p v-else>Out of Stock</p>
```

---
### Show and Hide
The `v-show` directive is used for toggling an element’s visibility instead of adding and removing the element from the DOM entirely, like `v-if` does.

As you might imagine, this is a more performant option if you have something that’s toggling off and on the screen often. We can verify this by setting inStock to `false` and viewing the element in the browser’s Developer Tools. When `v-show` is used, we can see that the element is still present in the DOM, but it’s now hidden with an inline style of `display: none`; added to it.
---

## List Rendering
Looping through data arrays
```
const app = Vue.createApp({
    data() {
        return {
            ...
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})
```

```
<ul>
  <li v-for="detail in details">{{ detail }}</li>
</ul>
```

Inside the `v-for` expression, we wrote: `detail in details`. Here, `details `refers to the `details` array in our data, and detail is the alias for the current element from that array, as we’re looping through it to print out a new `li`.

Each `li` will display that array element because in the inner HTML we’ve written an expression:` {{ detail }}` to print out each detail.

#### Key Attribute: An essential for list items
`<div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>`

By saying `:key="variant.id"`, we’re using the shorthand for `v-bind` to bind the variant’s `id` to the `key` attribute. This gives each DOM element a unique key so that Vue can grasp onto the element and not lose track of it as things update within the app.
---
## Event Handling

#### Listening for Events
In order to know when the button is clicked, we need to be listening for events on that element, specifically click events. We can achieve this by using another Vue directive: ·.
`<button class="button" v-on:click="logic to run">Add to Cart</button>`

Here, we are telling v-on what type of event to listen for: a click. Inside the quotes, we place the logic (or method name) we want to run when that event happens.

If we write v-on:click="cart += 1", we’ll increment the value of cart by 1, when a click event happens.

#### Triggering a method
Now, when the button is clicked, the addToCart method will be run. Let’s add that method to our Vue app’s options object, like so:

```
const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      ...
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    }
  }
})

```

A shorthand for v-on
As you can imagine, listening for events on your elements is super common. Just like how `v-bind` had a shorthand `(:)`, `v-on` has a shorthand: `@`

---
## [Class & Style Binding](https://vuejs.org/guide/essentials/class-and-style.html)


Camel:

`<div :style="{ backgroundColor: variant.color }></div>`

Kebab with quotation marks: 

`<div :style="{ 'background-color': variant.color }></div>`

### Style Binding: Objects
Class Binding


---
## Components & Props

`app.component('product-display', {})`

The first argument is the component name, `'product-display'` in this case, and the second argument is an object to configure our component (similar to the options object used to configure our root Vue app).

#### Template
