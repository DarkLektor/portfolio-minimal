<script setup>
import { onMounted } from "vue";

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

function setTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
}
</script>
<template>
  <button
    type="button"
    class="ml-auto w-9 h-9 p-2 rounded-lg transition-all duration-500 text-white bg-violet-500 hover:bg-violet-600 dark:text-black dark:bg-amber-300 dark:hover:bg-amber-500"
    @click="setTheme"
  >
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      class="dark:hidden relative"
    >
      <path
        fill="currentColor"
        d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
      ></path>
    </svg>

    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      class="dark:inline hidden relative bottom-0.5"
    >
      <g
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <path d="M12 1v2"></path>
        <path d="M12 21v2"></path>
        <path d="M4.22 4.22l1.42 1.42"></path>
        <path d="M18.36 18.36l1.42 1.42"></path>
        <path d="M1 12h2"></path>
        <path d="M21 12h2"></path>
        <path d="M4.22 19.78l1.42-1.42"></path>
        <path d="M18.36 5.64l1.42-1.42"></path>
      </g>
    </svg>
  </button>
</template>

<style></style>
