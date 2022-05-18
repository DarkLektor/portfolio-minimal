<script setup>
document.documentElement.style.setProperty("--rotate-x", 1);
document.documentElement.style.setProperty("--rotate-y", 1);

document.body.addEventListener("mousemove", ({ clientX, clientY }) => {
  const cube = document.getElementsByClassName("cube");
  let rect = cube[0].getBoundingClientRect();
  let cubeWidth = rect.width;
  let cubeHeight = rect.height;
  let cubeCenterX = rect.left + cubeWidth / 2;
  let cubeCenterY = rect.top + cubeHeight / 2;

  document.documentElement.style.setProperty(
    "--rotate-y",
    -(clientX - cubeCenterX)
  );
  document.documentElement.style.setProperty(
    "--rotate-x",
    clientY - cubeCenterY
  );
});
</script>

<template>
  <div class="cube-container">
    <img src="@/assets/img/ninja.png" />
    <div class="cube">
      <figure
        class="side front dark:bg-gray-700 bg-violet-700 bg-opacity-30 dark:bg-opacity-30 border dark:border-cyan-900 border-violet-600"
      ></figure>
      <figure
        class="side back dark:bg-gray-700 bg-violet-700 bg-opacity-30 dark:bg-opacity-30 border dark:border-cyan-900 border-violet-600"
      ></figure>
      <figure
        class="side left dark:bg-gray-700 bg-violet-700 bg-opacity-30 dark:bg-opacity-30 border dark:border-cyan-900 border-violet-600"
      ></figure>
      <figure
        class="side right dark:bg-gray-700 bg-violet-700 bg-opacity-30 dark:bg-opacity-30 border dark:border-cyan-900 border-violet-600"
      ></figure>
      <figure
        class="side top dark:bg-gray-700 bg-violet-700 bg-opacity-30 dark:bg-opacity-30 border dark:border-cyan-900 border-violet-600"
      ></figure>
      <figure
        class="side bottom dark:bg-gray-700 bg-violet-700 bg-opacity-30 dark:bg-opacity-30 border dark:border-cyan-900 border-violet-600"
      ></figure>
    </div>
  </div>
</template>

<style scoped>
.cube-container {
  height: 250px;
  width: 250px;
  position: absolute;
  top: 25%;
  left: 50%;
  margin-left: -125px;
  margin-top: -125px;
  perspective: 500px;
  perspective-origin: 50% 50%;
}

.cube-container img {
  perspective: 625px;
  position: absolute;
  width: 40%;
  height: 40%;
  transform: translate3d(80%, 80%, 150px);
}

.cube {
  height: 100%;
  position: absolute;
  transform: translateZ(125px);
  transform-origin: center;
  transform-style: preserve-3d;
  width: 100%;
  animation: spin 5s linear infinite;
}

.side {
  height: 250px;
  position: absolute;
  width: 250px;
}
.front {
  transform: translateZ(125px);
}
.back {
  transform: rotateX(180deg) translateZ(125px);
}
.left {
  transform: rotateY(-90deg) translateZ(125px);
}
.right {
  transform: rotateY(90deg) translateZ(125px);
}
.top {
  transform: rotateX(90deg) translateZ(125px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(125px);
}

@keyframes spin {
  0% {
    transform: rotate3d(var(--rotate-x), var(--rotate-y), 0, 0deg);
  }
  100% {
    transform: rotate3d(var(--rotate-x), var(--rotate-y), 0, 360deg);
  }
}

@media screen and (max-width: 1024px) {
  .cube-container {
    top: 20%;
    height: 200px;
    width: 200px;
    margin-left: -100px;
    margin-top: -100px;
  }

  .side {
    height: 200px;
    width: 200px;
    position: absolute;
  }

  .front {
    transform: translateZ(100px);
  }
  .back {
    transform: rotateX(180deg) translateZ(100px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(100px);
  }
  .right {
    transform: rotateY(90deg) translateZ(100px);
  }
  .top {
    transform: rotateX(90deg) translateZ(100px);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }
}

@media screen and (max-width: 575px) {
  .cube-container {
    top: 15%;
    height: 150px;
    width: 150px;
    margin-left: -75px;
    margin-top: -75px;
  }
  .side {
    height: 150px;
    width: 150px;
    position: absolute;
  }

  .front {
    transform: translateZ(75px);
  }
  .back {
    transform: rotateX(180deg) translateZ(75px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(75px);
  }
  .right {
    transform: rotateY(90deg) translateZ(75px);
  }
  .top {
    transform: rotateX(90deg) translateZ(75px);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(75px);
  }
}
</style>
