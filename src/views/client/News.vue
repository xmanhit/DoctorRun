<template>
  <div>
    <section class="top-panel">
      <div
        class="relative aspect-ratio-21/9 lg:aspect-ratio-30/9 bg-center bg-cover before:empty-content before:absolute before:inset-0 before:bg-black before:bg-opacity-50"
        :style="{'background-image':'url('+ background +')'}"
      >
        <div class="absolute w-full top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4">
          <div class="text-center px-10">
            <h2 class="font-oswald text-white text-center uppercase font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl">{{ name }}</h2>
            <breadcrumbs/>
          </div>
        </div>
      </div>
    </section>
    
    <section class="news">
      <div class="bg-black bg-opacity-5">
        <div class="container px-4 py-16 lg:py-18 xl:py-24 mx-auto">
          <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-9/12 h-auto">
              <card-masonry :data="news.content" />
            </div>
            <div class="w-full lg:w-3/12 h-auto">
              <!-- sidebar -->
              <sidebar-client :data="sibdebar" />
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import CardMasonry from '@/components/Cards/CardMasonry.vue';
import SidebarClient from '@/components/Sidebar/SidebarClient.vue';

  export default {
    data() {
      return {
        name: this.$route.meta.name,
        background: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/05/header_bg.jpg",
        news: {
          content: [
            {
              id: 1,
              title: 'CHẠY TỪ THIỆN CÙNG DOCTORRUN SỰ KIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-1-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 2,
              title: 'CHẠY CÙNG DOCTORRUN',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-2-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 3,
              title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-3-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 4,
              title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-4-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 5,
              title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 6,
              title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 7,
              title: 'CHẠY TỪ THIỆN CÙNG DOCTORRUN SỰ KIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-1-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 8,
              title: 'CHẠY CÙNG DOCTORRUN',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-2-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 9,
              title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-3-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 10,
              title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-4-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 11,
              title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
            {
              id: 12,
              title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
              description: 'Ngay cả sư tử và đường kính của cổng dinh dưỡng. Nhưng nụ cười của Nhật Bản hay sự tiện lợi. Trình bày các đầu của lacinia Curabitur euismod. tiếp sức',
              image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5-370x370.jpg',
              link: '/news/su-kien-chay-tuyet-voi-nhat',
              date: 'April 14, 2016',
              comment: 2,
              like: 340,
            },
          ],
        },
        sibdebar: {
          categories: [
            {
              id: 1,
              name: 'Kiến thức chạy bộ',
              link: '#',
            },
            {
              id: 2,
              name: 'Giáo án chạy bộ',
              link: '#',
            },
            {
              id: 3,
              name: 'Dinh dưỡng chạy bộ',
              link: '#',
            },
            {
              id: 4,
              name: 'Hướng dẫn chạy bộ',
              link: '#',
            },
            {
              id: 5,
              name: 'Tin tức chạy bộ',
              link: '#',
            },
            {
              id: 6,
              name: 'Phụ kiện chạy bộ',
              link: '#',
            },
            {
              id: 7,
              name: 'Tập luyện chạy bộ',
              link: '#',
            },
          ],
          recentPosts: [
            {
              name: 'Giải Marathon từ thiện sắp tới 2016',
              link: '#',
            },
            {
              name: 'Tìm một nhóm hỗ trợ để chạy',
              link: '#',
            },
            {
              name: 'Chạy là một phong cách sống của nhiều người',
              link: '#',
            },
            {
              name: 'Vai trò của Huấn luyện viên của chúng ta trong cuộc sống của chúng ta',
              link: '#',
            },
          ],
          tags: [
            {
              name: 'coach',
              link: '#',
            },
            {
              name: 'health',
              link: '#',
            },
            {
              name: ' marathon',
              link: '#',
            },
            {
              name: 'run',
              link: '#',
            },
            {
              name: 'speed cross',
              link: '#',
            },
            {
              name: 'trail run',
              link: '#',
            },
          ],
        },
      };
    },
    components: {
      CardMasonry,
      SidebarClient,
    },
  };
</script>
