<template>
  <ul class="list-unstyled grid grid-cols-1 sm:grid-cols-2">
    <li>
      <router-link
        to="/"
        class="text-white text-opacity-60 hover:text-yellow-400 block pb-2 text-sm"
        exact
      >
        Trang chủ
      </router-link>
    </li>
    <li>
      <router-link
        to="/introduce"
        class="text-white text-opacity-60 hover:text-yellow-400 block pb-2 text-sm"
        exact
      >
        Giới thiệu
      </router-link>
    </li>
    <li>
      <router-link
        to="/event"
        class="text-white text-opacity-60 hover:text-yellow-400 block pb-2 text-sm"
        exact
      >
        Sự kiện
      </router-link>
    </li>
    <li>
      <router-link
        to="/featured"
        class="text-white text-opacity-60 hover:text-yellow-400 block pb-2 text-sm"
        exact
      >
        Đặc trưng
      </router-link>
    </li>
    <li>
      <router-link
        to="/practice"
        class="text-white text-opacity-60 hover:text-yellow-400 block pb-2 text-sm"
        exact
      >
        Tập luyện
      </router-link>
    </li>
    <li>
      <router-link
        to="/news"
        class="text-white text-opacity-60 hover:text-yellow-400 block pb-2 text-sm"
        exact
      >
        Tin tức
      </router-link>
    </li>
    <li>
      <router-link
        to="/image"
        class="text-white text-opacity-60 hover:text-yellow-400 block pb-2 text-sm"
        exact
      >
        Hình ảnh
      </router-link>
    </li>
  </ul>
</template>