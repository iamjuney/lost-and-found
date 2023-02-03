<script setup>
import { Icon } from "@iconify/vue";
import TheLostItems from "../components/TheLostItems.vue";
import TheFoundItems from "../components/TheFoundItems.vue";
import TheNavbar from "../components/TheNavbar.vue";
import { useNavbarStore } from "../stores/store";
import { storeToRefs } from "pinia";

const store = useNavbarStore();
const { activeHeaderLink } = storeToRefs(store);

console.log(activeHeaderLink.value);
</script>

<template>
    <div></div>
    <TheNavbar></TheNavbar>

    <div v-show="activeHeaderLink == 'lost'">
        <TheLostItems />
    </div>
    <div v-show="activeHeaderLink == 'found'">
        <TheFoundItems />
    </div>
</template>
