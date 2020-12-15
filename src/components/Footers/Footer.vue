<template>
  <footer class="relative bg-black bg-opacity-80 ">
    <div class="container mx-auto">
      <div class="flex justify-evenly px-4 py-12">
        <button
          class="text-white hover:text-blue-600 shadow-lg font-normal h-12  w-12 sm:h-16 sm:w-16 border border-white border-opacity-80 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:bg-white transition-colors	duration-500 ease-in-out"
          type="button"
        >
          <i class="fab fa-facebook-f"></i>
          
        </button>
        <button
          class="text-white hover:text-blue-400 shadow-lg font-normal h-12  w-12 sm:h-16 sm:w-16 border border-white border-opacity-80 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:bg-white transition-colors	duration-500 ease-in-out"
          type="button"
        >
          <i class="fab fa-twitter"></i>
        </button>
        <button
          class="text-white hover:text-red-600 shadow-lg font-normal h-12  w-12 sm:h-16 sm:w-16 border border-white border-opacity-80 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:bg-white transition-colors duration-500	ease-in-out"
          type="button"
        >
          <i class="fab fa-instagram"></i>
        </button>
        <button
          class="text-white hover:text-red-800 shadow-lg font-normal h-12  w-12 sm:h-16 sm:w-16 border border-white border-opacity-80 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:bg-white transition-colors duration-500	ease-in-out"
          type="button"
        >
          <i class="fab fa-pinterest"></i>
        </button>
        <button
          class="text-white hover:text-red-500 shadow-lg font-normal h-12  w-12 sm:h-16 sm:w-16 border border-white border-opacity-80 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:bg-white transition-colors duration-500 ease-in-out"
          type="button"
        >
          <i class="fab fa-youtube"></i>
        </button>
      </div>
    </div>
    <hr class="border-gray-400">
    <div class="container pt-16 pb-12 mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-4/12 px-4">
          <h4 class="text-3xl text-white font-semibold mb-6">
            <img class="mx-auto sm:ml-0" width="138" height="57" :src="Logo" alt="logo">
          </h4>
          <h5 class="text-sm mt-0 mb-2 text-white text-opacity-60">
            Chính từ sự thật đó, không đủ. Những lời dạy của vĩ đại chân lý và người xây dựng nên hạnh phúc đủ đầy của con người.
          </h5>
        </div>
        <div class="w-full lg:w-8/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-5/12 px-4 ml-auto mt-8 md:mt-0">
              <span
                class="font-oswald block uppercase text-white text-2xl font-semibold mb-2"
              >
                Liên Kết
              </span>
              <footer-navbar />
              
            </div>
            <div class="w-full lg:w-5/12 px-4 mt-8 md:mt-0">
              <span
                class="font-oswald block uppercase text-white text-2xl font-semibold mb-2"
              >
                Liên Hệ
              </span>
              <ul class="list-unstyled">
                <li>
                  <span class="text-white text-opacity-60">Địa chỉ: </span>
                  <a
                    class="text-white text-opacity-60 hover:text-yellow-400 inline-block pb-2 text-sm"
                    href="https://goo.gl/maps/iKSaiD3jEvJMyZyX6"
                    target="_blank"
                  >
                    B9/15, Đống Đa, Hà Nội, Việt Nam
                  </a>
                </li>
                <li>
                  <span class="text-white text-opacity-60">Số điện thoại: </span>
                  <a
                    class="text-white text-opacity-60 hover:text-yellow-400 inline-block pb-2 text-sm"
                    href="tel:091-7755-383"
                    target="_blank"
                  >
                    091.7755.383
                  </a>
                </li>
                <li>
                  <span class="text-white text-opacity-60">Email: </span>
                  <a
                    class="text-white text-opacity-60 hover:text-yellow-400 inline-block pb-2 text-sm"
                    href="mailto: doctorrun2020@gmail.com"
                    target="_blank"
                  >
                    doctorrun2020@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-white text-opacity-80 font-semibold py-1">
            Copyright © {{ date }} WebApp by
            <a
              href="https://www.fb.com/NXManhIT"
              class="text-white text-opacity-80 hover:text-yellow-400"
            >
              NX.Mạnh
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import Logo from "@/assets/img/logo.png";
  import FooterNavbar from "@/components/Navbars/FooterNavbar.vue";
  export default {
    data() {
      return {
        Logo,
        date: new Date().getFullYear(),
      };
    },
    components: {
      FooterNavbar,
    },
  };
</script>
