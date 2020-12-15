<template>
  <div class="rounded-lg bg-white overflow-hidden shadow-lg m-4">
    <!--Tìm kiếm--> 
    <div class="flex">
      <div class="flex-1 m-2 py-4">
        <h2 class="font-oswald px-4 py-2 text-3xl w-48 font-semibold text-gray-800 uppercase">Tìm Kiếm</h2>
        <div class="relative text-gray-800 px-5 pt-5">
          <button type="submit" class="absolute ml-4 mt-3 mr-4">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
            </svg>
          </button>

          <input type="search" name="search" placeholder="Tìm Kiếm" class="bg-transparent h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0">
        </div>
      </div>
    </div>


    <hr class="border-gray-300">

    <!--Thể loại--> 
    <div class="flex">
      <div class="flex-1 m-2 py-4">
        <h2 class="font-oswald px-4 py-2 text-3xl w-48 font-semibold text-gray-800 uppercase">THỂ LOẠI</h2>
        <ul class="px-5 pt-5">
          <li 
            v-for="{ id, name, link } in data.categories"
            :key="id"
            class="fas fa-caret-right mb-4 w-full"
          >
            <a class="pl-4 font-montserrat font-normal hover:text-yellow-400 leading-normal" :href="link" >{{ name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <hr class="border-gray-300">

    <!-- Lịch --> 
    <div class="flex">
      <div class="flex-1 m-2 py-4">
        <h2 class="font-oswald px-4 py-2 text-3xl w-48 font-semibold text-gray-800 uppercase">Lịch</h2>
        <datepicker :inline="true" :value="date" :language="vi"></datepicker>
      </div>
    </div>

    <hr class="border-gray-300">

    
    <!-- Bài đăng gần đây -->

    <div class="flex">
      <div class="flex-1 m-2 py-4">
        <h2 class="font-oswald px-4 py-2 text-3xl font-semibold text-gray-800 uppercase">BÀI ĐĂNG GẦN ĐÂY</h2>  
        <ul class="px-5 pt-5">
          <li
            v-for="{ id, name, link } in data.recentPosts"
            :key="id"
            class="fas fa-caret-right mb-4 w-full"
          >
            <a class="pl-4 font-montserrat font-normal hover:text-yellow-400 leading-normal" :href="link" >{{ name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <hr class="border-gray-300">

    <div class="flex">
      <div class="flex-1 m-2 py-4">
        <h2 class="font-oswald px-4 py-2 text-3xl font-semibold text-gray-800 uppercase">Thẻ</h2>  
        <div class="tagcloud px-5 pt-5">
          <a
            v-for="{ id, name, link } in data.tags"
            :key="id"
            :href="link"
            class="block float-left py-2 px-5 mr-2 mb-2 bg-gray-200 hover:bg-yellow-400 hover:text-white"
          >{{ name }}</a>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
  import Datepicker from 'vuejs-datepicker';
  import {en, vi} from 'vuejs-datepicker/dist/locale'
  export default {
    props: ['data'],
    data() {
      return {
        en: en,
        vi: vi,
        date: new Date().toLocaleDateString(),
      };
    },
    components: {
      Datepicker,
    },
  };
</script>