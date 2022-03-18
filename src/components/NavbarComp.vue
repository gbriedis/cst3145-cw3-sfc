<template>
    <nav class="flex mt-14 max-w-5xl justify-center justify-between">
        <!-- Logo -->
        <div>
            <h1 class="text-2xl font-bold text-indigo-400">Lesson Store</h1>
        </div>
        
        <div>                        
            <input type="text" v-model="searchValue" placeholder="search..." class="w-80 h-11 rounded-xl border-2 border-indigo-400 px-4 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none transition ease-in-out"/>
        </div>
        
        <!-- Shopping Cart -->
        <div>
            <button @click='checkout()' class="bg-indigo-400 w-36 h-12 rounded-xl text-white hover:bg-indigo-500 transition duration-150 ease-in-out">Items in bag: {{ cart }}</button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComp',
    props: {
        cart: Number
    },
    methods: {
        checkout() {
          this.$emit('goCheckout', false)          
        }
    }
}
</script>

<style scoped>
input {
    padding-left: 40px;
    background: url("../assets/Search.jpg") no-repeat left;
    background-size: 16px;
    background-position: calc(100% - 95%);    
}
</style>
