<script setup>
import Mail from "@/assets/svg/Mail.vue";
import Telegram from "@/assets/svg/Telegram.vue";
</script>

<template>
  <article
    id="contacts"
    class="mb-6 flex flex-col items-start dark:text-white text-black text-left relative z-10 transition-colors duration-300"
  >
    <h2 class="text-2xl font-bold mb-4">Контакты</h2>
    <div
      class="inline-flex items-center hover:text-violet-700 dark:hover:text-sky-500 mb-4"
    >
      <Mail class="w-5 h-5 mr-2" />
      <a href="mailto:darklektor1@gmail.com">darklektor1@gmail.com</a>
    </div>
    <div
      class="inline-flex items-center hover:text-violet-700 dark:hover:text-sky-500"
    >
      <Telegram class="w-5 h-5 mr-2" />
      <a href="tg://resolve?domain=dark_lektor">@dark_lektor</a>
    </div>
  </article>
</template>

<style scoped></style>
