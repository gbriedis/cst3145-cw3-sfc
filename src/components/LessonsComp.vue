// TODO @click='addToCart(lesson)' add back to button
<template>
    <!-- Display Lessons -->
    <div class="basis-9/12">
        <div class="grid grid-cols-3 gap-6">
            <div v-for="lesson in lessons" :key="lesson.id">
                <figure>
                    <img class="lesson-image rounded-tl-lg rounded-tr-lg" v-bind:src="lesson.image">
                </figure>
                
                <div class="bg-indigo-200/20 rounded-br-lg rounded-bl-lg p-3 grid grid-cols-2 gap-1">
                    <div>
                        <p class="text-indigo-400 text-sm font-bold">{{lesson.subject}}</p>
                        <p class="text-indigo-400 text-xs">{{lesson.location}}</p>
                        <p class="text-indigo-400 text-sm font-bold mt-3">Price: £{{lesson.price}}</p>
                        <p class="text-indigo-400 text-xs">Space Left: {{lesson.spaces}}</p>
                    </div>

                    <div class="flex items-center">
                        <!-- <span id="lesson-sold-out" v-if="lesson.spaces == 0">Sold Out!</span> -->
                        <button class="text-indigo-500 bg-indigo-200 p-2 text-sm rounded-xl hover:bg-indigo-300 transition duration-150 ease-in-out" @click='addToCart(lesson)' :disabled="lesson.spaces == 0">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name: 'LessonComp',
    props: {
        lessons: Array,        
    },
    
    methods: {
        addToCart(lesson) {
          this.$emit('addProduct', lesson)          
        }
    }
}
</script>