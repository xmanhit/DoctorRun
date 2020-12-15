<template>
  <div class="px-4 m-4">
    <masonry
      :cols="{default: 3, 700: 2, 425: 1}"
      :gutter="{default: '2rem'}"
      >
      <div v-for="(item, index) in data" :key="index">
        <div class="rounded mb-8 overflow-hidden bg-white">
          <div>
            <a
              class="relative block fas fa-link before:z-10 before:text-3xl before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:mt-40 before:text-white before:text-opacity-0 hover:before:text-opacity-100 hover:before:mt-0 after:empty-content after:absolute after:inset-0 after:bg-black after:bg-opacity-0 hover:after:bg-opacity-30 before:transition-all before:ease-default before:duration-300 after:transition after:ease-default after:duration-300"
              :href="item.link"
            >
            <span class="block aspect-ratio-square bg-center bg-cover" :style="{'background-image': 'url('+ item.image +')'}"></span>
            </a>
          </div>
          
          <div class="px-8 py-6">
            <div class="font-oswald font-bold uppercase text-xl text-center mb-2">{{ item.title }}</div>
            <div class="clamp-3 text-base text-center mb-2">{{ item.description }}</div>
          </div>
          <div class="px-8 py-6">
            <div class="text-center text-xs text-black opacity-80">
              <span class="uppercase">
                <a :href="item.link" class="date">{{ item.date }}</a>
              </span>
              <span class="mx-4">|</span>
              <span>
                <a title="Comments" class="mr-3" :href="item.link"><i class="far fa-comment-alt mr-2"></i><span>{{ item.comment }}</span></a>
                <a title="Like" :href="item.link"><i class="far fa-heart mr-2"></i><span>{{ item.like }}</span></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </masonry>
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
}
</script>