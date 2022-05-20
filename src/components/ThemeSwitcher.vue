<script setup>
import Sun from "@/assets/svg/Sun.vue";
import Moon from "@/assets/svg/Moon.vue";
import { onMounted, ref } from "vue";

const currentTheme = ref(null);

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    currentTheme.value = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    currentTheme.value = "light";
  }
});

function setTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    currentTheme.value = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    currentTheme.value = "dark";
  }
}
</script>
<template>
  <div class="relative ml-auto w-9 h-9">
    <Transition name="buttons">
      <button
        v-if="currentTheme === 'dark'"
        type="button"
        class="absolute w-9 h-9 p-2 rounded-lg transition-colors duration-300 text-white dark:text-black bg-violet-500 dark:bg-amber-300 hover:bg-violet-600 dark:hover:bg-amber-500"
        @click="setTheme"
      >
        <Sun />
      </button>
      <button
        v-else
        type="button"
        class="absolute w-9 h-9 p-2 rounded-lg transition-colors duration-300 text-white dark:text-black bg-violet-500 dark:bg-amber-300 hover:bg-violet-600 dark:hover:bg-amber-500"
        @click="setTheme"
      >
        <Moon />
      </button>
    </Transition>
  </div>
</template>

<style scoped>
.buttons-enter-active,
.buttons-leave-active {
  transition: all 0.3s ease;
}

.buttons-enter-from {
  opacity: 1;
  transform: translateY(-50px);
}

.buttons-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
