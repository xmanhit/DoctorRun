<template>
  <div class="py-8">
      <slide-news :data="data"/>
  </div>
</template>
<script>
  import slideNews from '@/components/Slideshows/slideNews.vue';
  export default {
    data() {
      return {
      };
    },
    components: {
      slideNews,
    },
    props: ["data"],
  };
</script>