<template>
  <div>
    <section class="top-panel">
      <div
        class="relative aspect-ratio-30/9 bg-center bg-cover before:empty-content before:absolute before:inset-0 before:bg-black before:bg-opacity-50"
        :style="{'background-image':'url('+ background +')'}"
      >
        <div class="absolute w-full top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4">
          <div class="text-center">
            <h2 class="font-oswald font-bold text-white text-7xl leading-normal uppercase">{{ name }}</h2>
            <breadcrumbs/>
          </div>
        </div>
      </div>
    </section>
    <section class="coming-soon">
      <div class="flex items-center justify-center h-screen bg-gray-200">
        <div class="container px-4 my-16 lg:my-18 xl:my-24">
          <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div class="text-center">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-red-700 sm:text-5xl sm:leading-none md:text-6xl">
                Doctor<span class="text-yellow-400">Run</span>
              </h2>
              <h3 class='text-xl md:text-3xl mt-10'>Coming Soon</h3>
              <p class="text-md md:text-xl mt-10"><a class="hover:underline" href="/">DoctorRun</a> is a website help you provide simple productivity tools for your daily need online for free.</p>
            </div>
            <div class="flex flex-wrap mt-10 justify-center">
              <div class="m-3">
                <a href="#" title="DoctorRun On Facebook"
                  class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  <span class="mx-auto">Facebook</span>
                </a>
              </div>
              <div class="m-3">
                <a href="#" title="DoctorRun On Twitter"
                  class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  <span class="mx-auto">Twitter</span>
                </a>
              </div>
              <div class="m-3">
                <a href="#" title="DoctorRun On Pinterest"
                  class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  <span class="mx-auto">Pintrest</span>
                </a>
              </div>
              <div class="m-3">
                <a href="#" title="DoctorRun On Facebook"
                  class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-yellow-500 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  <span class="mx-auto">Reddit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: this.$route.meta.breadcrumb,
        background: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/05/header_bg.jpg",
      }
    }
  }
</script>