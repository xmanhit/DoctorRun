<template>
  <div v-on:dragstart="dragstart" class="flex flex-wrap px-4 py-8">
    <div
      v-for="(item) in data"
      :key="item.id"
      class="flex-auto sm:flex-1 w-full"
    >
      <a
        href="#"
        class="block aspect-ratio-square bg-center bg-cover transition-opacity ease-in-out duration-1000 hover:opacity-80"
        v-bind:style="{ 'background-image': 'url(' + item.image + ')' }"
        target="_blank"></a>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["data"],
    data() {
      return {
      };
    },
    components: {
      
    },
    methods: {
      dragstart: function(e) {
        return e.returnValue = false;
      }
    },
  };
</script>