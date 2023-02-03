import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useNavbarStore = defineStore("navbar", () => {
    const activeHeaderLink = ref("lost");

    function setActiveToLost() {
        activeHeaderLink.value = "lost";
    }

    function setActiveToFound() {
        activeHeaderLink.value = "found";
    }

    return { activeHeaderLink, setActiveToLost, setActiveToFound };
});
