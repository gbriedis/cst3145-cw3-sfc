<template>
    <div class="flex items-center justify-center w-full rounded-xl bg-gray-200/40 my-8 h-11 hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out" @click="showLesson = true">
        <p class="text-indigo-400 text-sm font-bold">Back to Store</p>
    </div>
    
    <div class="flex flex-row mt-24 mb-24">
        <div class="basis-6/12 mr-12">
            <div class="mb-12" v-for="item in cart" :key="item.id">
                <img class="lesson-image rounded-tl-lg rounded-tr-lg" v-bind:src="item.image">
                <div class="bg-indigo-200/20 rounded-br-lg rounded-bl-lg p-3 grid grid-cols-2 gap-1">
                    <div>
                        <p class="text-indigo-400 text-sm font-bold">{{item.subject}}</p>
                        <p class="text-indigo-400 text-xs">{{item.location}}</p>
                        <p class="text-indigo-400 text-sm font-bold mt-3">Price: £{{item.price}}</p>
                    </div>

                    <div class="flex items-center">
                        <button class="text-indigo-500 bg-indigo-200 p-2 text-sm rounded-xl hover:bg-indigo-300 transition duration-150 ease-in-out" @click='removeItem(item)'>Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="basis-6/12">
            <h1 class="text-xl font-bold text-indigo-400">Checkout</h1>
            <form @submit.prevent="alertOrder()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 my-8">
                <div class="mb-4">
                    <label class="block text-sm text-indigo-400 mb-2" for="email">Email</label>
                    <input v-model.trim=order.email class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
                </div>
                <div class="mb-6">
                    <label class="block text-sm text-indigo-400 mb-2" for="firstName">First Name</label>
                    <input v-model.trim=order.firstName class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name">
                </div>
                <div class="mb-6">
                    <label class="block text-sm text-indigo-400 mb-2" for="phoneNumber">Phone Number</label>
                    <input v-model.trim=order.phoneNumber class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" type="text" placeholder="Phone Number">
                </div>
                <div class="flex items-center justify-between">
                    <button class="text-indigo-500 bg-indigo-200 p-2 text-sm rounded-xl hover:bg-indigo-300 transition duration-150 ease-in-out">Checkout</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutComp',
    props: {
        cart: Array
    }
}
</script>