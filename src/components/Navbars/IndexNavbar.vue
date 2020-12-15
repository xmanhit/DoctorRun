<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
    <nav
    v-on:scroll.passive="handleScroll"
    class="fixed top-0 inset-x-0 z-50 w-full flex flex-wrap items-center justify-around px-2 py-3 lg:py-4 xl:py-5 navbar-expand-lg bg-black transition duration-1000 ease-in-out"
    :class="[(bgOpacity || navbarOpen) ? 'bg-opacity-65' : 'bg-opacity-0']"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-around"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <img width="100" height="42" :src="Logo" alt="logo">
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
          v-click-outside="hide"
        >
          <i :class="[navbarOpen ? 'block':'hidden']" class="fas fa-times text-white"></i>
          <i :class="[!navbarOpen ? 'block':'hidden']" class="fas fa-bars text-white"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow lg:justify-center xl:justify-end items-center transition duration-500 ease-in-out"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none items-center">
          <li class="flex flex-nowrap flex-col lg:flex-row items-center">
            <router-link
              to="/"
              class="text-base py-2 px-4 block whitespace-no-wrap bg-transparent hover:text-yellow-400 text-white"
              exact
            >
              Trang chủ
            </router-link>

            <router-link
              to="/introduce"
              class="text-base py-2 px-4 block whitespace-no-wrap bg-transparent hover:text-yellow-400 text-white"
              exact
            >
              Giới thiệu
            </router-link>
            <router-link
              to="/event"
              class="text-base py-2 px-4 block whitespace-no-wrap bg-transparent hover:text-yellow-400 text-white"
              exact
            >
              Sự kiện
            </router-link>
            <router-link
              to="/featured"
              class="text-base py-2 px-4 block whitespace-no-wrap bg-transparent hover:text-yellow-400 text-white"
              exact
            >
              Đặc trưng
            </router-link>
            <router-link
              to="/practice"
              class="text-base py-2 px-4 block whitespace-no-wrap bg-transparent hover:text-yellow-400 text-white"
              exact
            >
              Tập luyện
            </router-link>
            <router-link
              to="/news"
              class="text-base py-2 px-4 block whitespace-no-wrap bg-transparent hover:text-yellow-400 text-white"
              exact
            >
              Tin tức
            </router-link>
            <router-link
              to="/image"
              class="text-base py-2 px-4 block whitespace-no-wrap bg-transparent hover:text-yellow-400 text-white"
              exact
            >
              Hình ảnh
            </router-link>
          </li>
          <!-- <li class="flex items-center">
            <index-dropdown />
          </li> -->

          <li class="flex items-center">
            <button
              class="font-oswald bg-yellow-400 border-2 border-yellow-400 text-white active:bg-transparent acitve:text-yellow-400 text-base font-bold uppercase px-10 py-3 rounded-full hover:bg-transparent hover:text-yellow-400 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-0 lg:ml-3 mb-3 ease-linear transition-all duration-150"
              type="submit"
              
            >
              <a href="https://www.fb.com/groups/doctorrun" target="_blank">Tham Gia</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";
import Logo from "@/assets/img/logo.png";
import ClickOutside from "vue-click-outside";
// import Running from "@/assets/img/running.jpg";

export default {
  data() {
    return {
      Logo,
      bgOpacity : false,
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
    handleScroll: function() {
      this.bgOpacity = (window.scrollY > 100) ? true : false;
    },
    hide () {
      this.navbarOpen = false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  mounted () {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },
 
  // do not forget this section
  directives: {
    ClickOutside
  },
  components: {
    // IndexDropdown,
  },
};
</script>
