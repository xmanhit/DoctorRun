<template>
  <div>
    <section class="top-panel">
      <div
        class="relative aspect-ratio-21/9 lg:aspect-ratio-30/9 bg-center lg:bg-cover before:empty-content before:absolute before:inset-0 before:bg-black before:bg-opacity-50"
        :style="{'background-image':'url('+ background +')'}"
      >
        <div class="absolute w-full top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4">
          <div class="text-center">
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
            <div class="w-full lg:w-9/12  h-auto">
              <div class="flex">
                <div class="flex-1 px-4 py-2 m-2">

                  <div class="post_featured rounded-lg overflow-hidden">
                    <div class="post_thumb" data-image="http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5.jpg" data-title="The Most Wonderful Running Events">
                      <!-- <a class="hover_icon hover_icon_view inited" href="http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5.jpg" title="The Most Wonderful Running Events" rel="magnific" style="letter-spacing: -0.03em;"> -->
                        <img class="w-full" width="1170" height="659" alt="The Most Wonderful Running Events" src="http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5-1170x659.jpg" itemprop="image">
                      <!-- </a> -->
                    </div>
                  </div>
                  <section class="post_content" itemprop="articleBody">
                    <div class="py-8">
                      <div class="text-left text-sm text-black opacity-80">
                        <span class="uppercase">
                          <a href="#" class="date">April 14, 2016</a>
                        </span>
                        <span data-v-e4caeaf8="" class="mx-4">|</span>
                        <span data-v-e4caeaf8="">
                          <a data-v-e4caeaf8="" title="Comments" href="#" class="mr-3">
                            <i data-v-e4caeaf8="" class="far fa-comment-alt mr-2"></i>
                            <span data-v-e4caeaf8="">2</span>
                          </a>
                          <a data-v-e4caeaf8="" title="Like" href="#">
                            <i data-v-e4caeaf8="" class="far fa-heart mr-2"></i>
                            <span data-v-e4caeaf8="">340</span>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div class="text-gray-500">{{ news.content.body }}</div>
                    <div class="post_info my-8">
                      <span class="">Tags: <a class="text-gray-500 hover:text-gray-800" href="/">speed cross</a></span>
                    </div>
                  </section>
                </div>
              </div>
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
  import {en, vi} from 'vuejs-datepicker/dist/locale';
  import SidebarClient from '@/components/Sidebar/SidebarClient.vue';
  export default {
    data() {
      return {
        en: en,
        vi: vi,
        name: this.$route.meta.breadcrumb,
        background: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/05/header_bg.jpg",
        news: {
          content: {
            id: 1,
            title: 'CHẠY TỪ THIỆN CÙNG DOCTORRUN SỰ KIỆN SẮP TỚI THÁNG 12 NĂM 2020',
            image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5-1170x659.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
            date: 'April 14, 2016',
            comment: 2,
            like: 340,
          }
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
      SidebarClient
    },
  };
</script>
