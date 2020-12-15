<template>
  <div>
    <index-navbar />
      <router-view :key="$route.fullPath" />
    <footer-component />

    <back-to-top bottom="2rem" right="2rem">
      <button type="button" class="bg-yellow-400 w-12 h-12 focus:outline-none btn btn-info btn-to-top animate-bounce transition-colors ease-in-out duration-1000" title="Scroll to top">
        <i class="text-white fa fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>
<script>
  import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
  import FooterComponent from "@/components/Footers/Footer.vue";

  export default {
    name: "client-layout",
    components: {
      IndexNavbar,
      FooterComponent,
    },
  };
</script>
