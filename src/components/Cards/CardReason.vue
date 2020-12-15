<template>
  <div class="px-4">
    <div class="relative py-28 pt-0 md:pt-28">
      <div class="reason-image">
        <a href="#popup_video">
          <img class="m-auto select-none" :src="data.video.image" alt="img">
        </a>
      </div>
      <div class="grid gap-x-12 gap-y-20 grid-cols-1 md:grid-cols-2">
        <div
          v-for="(item, index) in data.content"
          :key="item.id"
          :class="{'reason-odd': index % 2 === 0, 'reason-even': index % 2 !== 0 }"
        >
          <h4>
            <a :href="item.link" class="font-oswald hover:text-yellow-400">
              <span>0{{ index + 1 }}</span>
              {{ item.title }}
            </a>
          </h4>
          <div class="mt-8 leading-7 overflow-hidden text-black text-opacity-50">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block text-center mt-0 md:mt-12 lg:mt-16 xl:mt-20">
      <a
        class="font-oswald inline-block uppercase font-bold text-xl px-10 py-5 border-2 border-yellow-400 rounded-full text-white bg-yellow-400 hover:bg-transparent hover:text-yellow-400"
        :href="data.button.link"
      >{{ data.button.title }}</a>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    components: {
    },
    props: ["data"],
  };
</script>