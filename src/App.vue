<template>
  
  <div id="container" class="min-h-screen max-w-5xl my-0 mx-auto">
      <!-- Display navbar component -->
      <NavbarComp :cart='this.cart.length' @goCheckout='checkout'/> 
      
      <!-- If show lessons is active display lessons and refine search block -->
      <div class="flex flex-row mt-24 mb-24" v-if='showLesson == true'>
        <RefineComp />
        <LessonsComp :lessons="lessons" @addProduct='addToCart'/>
      </div>
      
      <!-- Show Checkout -->
      <div v-if='showLesson == false'>
        <CheckoutComp />
      </div>

  </div>

</template>

<script >
import NavbarComp from './components/NavbarComp.vue'
import RefineComp from './components/RefineComp.vue'
import LessonsComp from './components/LessonsComp.vue'
import CheckoutComp from './components/CheckoutComp.vue'
  
export default {
  name: 'app',
  components: {
    NavbarComp,
    RefineComp,
    LessonsComp,
    CheckoutComp
  },
  data() {
    return {
      showLesson: true,
      lessons: [],
      cart: []
    }
  },
  
  methods: {
    fetchLessonData() {
      fetch("https://cst3145-cw2-ginters.herokuapp.com/collection/lessonsDB").then((response) => {
        response.json().then((data) => {
          
            this.lessons = data;
        });
      });
    },
    
    addToCart(lesson) {
      this.cart.push(lesson)
      this.lessons.forEach(e => {
        if(e.id == lesson.id) { e.spaces-- }
      });
    },
    
    checkout(info) {
      this.showLesson == info;
      console.log(info);
      
    }
  },
  
  created: function () {
    this.fetchLessonData();
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
}
</style>
