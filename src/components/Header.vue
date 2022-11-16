<script setup>
import { onUnmounted, ref } from "vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const showMobileMenu = ref(false);
const headerRef = ref();

function setMobileMenu(e) {
  e.stopPropagation();
  showMobileMenu.value = !showMobileMenu.value;
}

function closeMobileMenu() {
  showMobileMenu.value = false;
}

document.documentElement.addEventListener("click", () => {
  closeMobileMenu();
});

onUnmounted(() => {
  document.documentElement.removeEventListener("click", () => {
    closeMobileMenu();
  });
});

function goToAnchor(e) {
  e.preventDefault();
  let elem = null;
  let id = null;
  const headerHeight = headerRef.value.offsetHeight;

  if (e.target.nodeName === "A") {
    id = e.target.getAttribute("href").slice(1);
  } else {
    id = e.target.parentElement.getAttribute("href").slice(1);
  }

  elem = document.getElementById(id);
  const y =
    elem.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 15);

  window.scrollTo({ top: y, behavior: "smooth" });
}
</script>

<template>
  <header
    ref="headerRef"
    class="fixed z-50 w-full py-2 bg-white dark:bg-opacity-5 bg-opacity-20 backdrop-blur-lg transition-colors duration-500"
  >
    <nav class="flex items-center px-4 lg:max-w-3xl max-w-xl mx-auto relative">
      <ul
        class="md:-ml-2 md:w-auto w-[200px] absolute top-[122%] right-0 dark:bg-slate-800 bg-white md:dark:bg-transparent md:bg-transparent md:relative flex flex-col md:flex-row md:items-center mr-4 font-sans font-medium md:py-0 py-2 md:rounded-none rounded-lg md:flex"
        :class="{ hidden: !showMobileMenu }"
      >
        <li class="md:mr-2">
          <a
            href="#about-me"
            @click="goToAnchor"
            class="header-link w-full inline-block group md:px-2 px-4 py-2"
            ><span>Обо мне</span>
            <div
              class="md:block hidden h-px w-0 bg-black dark:bg-white transition-all duration-500 group-hover:w-full"
            ></div
          ></a>
        </li>
        <li class="md:mr-2">
          <a
            href="#skills"
            @click="goToAnchor"
            class="header-link w-full inline-block group md:px-2 px-4 py-2"
            ><span>Навыки</span>
            <div
              class="md:block hidden h-px w-0 bg-black dark:bg-white transition-all duration-500 group-hover:w-full"
            ></div
          ></a>
        </li>
        <li class="md:mr-2">
          <a
            href="#contacts"
            @click="goToAnchor"
            class="header-link w-full inline-block group md:px-2 px-4 py-2"
            ><span>Контакты</span>
            <div
              class="md:block hidden h-px w-0 bg-black dark:bg-white transition-all duration-500 group-hover:w-full"
            ></div
          ></a>
        </li>
        <li>
          <a
            href="https://github.com/DarkLektor"
            target="_blank"
            @click="closeMobileMenu"
            class="header-link w-full inline-block group md:px-2 px-4 py-2"
          >
            <div class="flex items-center">
              <svg
                class="relative bottom-px"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                ></path>
              </svg>
              <span class="ml-1"> GitHub </span>
            </div>
            <div
              class="md:block hidden h-px w-0 bg-black dark:bg-white transition-all duration-500 group-hover:w-full"
            ></div
          ></a>
        </li>
      </ul>

      <ThemeSwitcher />

      <button
        type="button"
        class="md:hidden ml-4 w-9 h-9 p-2 rounded-lg border dark:border-gray-600 border-gray-400"
        @click="setMobileMenu"
      >
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
          <path
            fill="currentColor"
            d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
          ></path>
        </svg>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header-link.active div {
  width: 100%;
}
</style>
