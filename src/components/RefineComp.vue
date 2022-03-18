// TODO: add @click function to change variable states / subject / location / price / spaces
<template>
    <!-- Search Refines -->
    <div class="basis-1/4">
        
        <h1 class="text-sm font-bold text-indigo-400">Refine Your Search:</h1>
        <span class="flex w-2/3 h-px bg-indigo-400/20 mt-2 rounded-xl"></span>

        <!-- Sort by Subject/Location/Price/Availability -->
        <h2 class="text-sm text-indigo-600 mt-7">Sort By ~</h2>
        <ul class="text-sm text-indigo-400 list-disc">
            <li class="my-1 cursor-pointer">Subject</li>
            <li class="my-1 cursor-pointer">Location</li>
            <li class="my-1 cursor-pointer">Price</li>
            <li class="my-1 cursor-pointer">Availability</li>
        </ul>

        <!-- Sort list Up / Down order -->
        <h2 class="text-sm text-indigo-600 mt-9">Up / Down ~</h2>
        <ul class="text-sm text-indigo-400 list-disc">
            <li class="my-1 cursor-pointer">Ascending</li>
            <li class="my-1 cursor-pointer">Decending</li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'RefineComp'
}
</script>