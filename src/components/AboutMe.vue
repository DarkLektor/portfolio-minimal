<script setup></script>

<template>
  <article
    id="about-me"
    class="mb-6 dark:text-white text-black text-left relative z-10 transition-colors duration-300"
  >
    <div
      class="flex sm:flex-row flex-col sm:items-center sm:justify-between mb-4"
    >
      <div>
        <h1 class="text-3xl font-extrabold">Камиль Сышев</h1>
        <p class="text-lg">Frontend разработчик ( VueJS / ReactJS / Vite )</p>
      </div>
      <img
        src="@/assets/img/photo.jpg"
        class="sm:w-14 sm:h-14 w-20 h-20 sm:my-auto mt-4 rounded-full object-center object-cover ml-4 border-2 border-violet-300 dark:border-sky-500 sm:self-auto self-center"
      />
    </div>

    <p class="indent-8">
      Всем привет! Меня зовут Камиль. Мне
      {{ new Date().getFullYear() - 1993 }} лет. Родился и живу в Ташкенте (
      Узбекистан ). Я являюсь Frontend разработчиком, который любит изучать
      новые технологии, совершенствоваться и упрощать процессы разработки.
    </p>
    <p class="indent-8 mb-4">
      В данный момент работаю фрилансером. Разрабатываю различного рода SPA
      приложения и конечно же в свободное время изучаю что то новое для себя.
      Хотелось бы уделать изучению нового материала больше времени, но про семью
      тоже не нужно забывать, ах да забыл сказать - я женат и у нас есть
      дочурка.
    </p>
  </article>
</template>

<style scoped>
article {
  padding-top: 550px;
}

@media screen and (max-width: 1024px) {
  article {
    padding-top: 450px;
  }
}

@media screen and (max-width: 575px) {
  article {
    padding-top: 350px;
  }
}
</style>
