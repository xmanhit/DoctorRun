<template>
  <div>
    <section class="top-panel">
      <div
        class="relative aspect-ratio-21/9 lg:aspect-ratio-30/9 bg-center bg-cover before:empty-content before:absolute before:inset-0 before:bg-black before:bg-opacity-50"
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
    
    <section class="reason">
      <div class="bg-black bg-opacity-5">
          <div class="container px-4 py-16 lg:py-18 xl:py-24 mx-auto">
            <h6 class="text-center text-black text-opacity-60 uppercase mb-8">{{ reason.subTitle }}</h6>
            <h2 class="font-oswald text-center uppercase font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl mb-16">{{ reason.title }}</h2>
            <card-reason :data="reason"/>
          </div>
      </div>
    </section>

    <section class="history">
      <div class="bg-white">
        <card-history :data="history" />
      </div>
    </section>

    <section class="facebook">
      <div class="bg-black bg-opacity-5">
          <div class="container px-4 py-16 lg:py-18 xl:py-24 mx-auto">
            <div class="flex justify-between flex-wrap px-4">
              <h4 class="font-oswald text-3xl font-bold uppercase relative py-12 z-2">
                <i class="fab fa-facebook-square text-black text-opacity-10 text-9xl absolute inset-y-0 left-0 z-1"></i>Facebook Cập Nhật
              </h4>
              <a
                href="https://www.fb.com/groups/doctorrun"
                class="font-oswald uppercase font-bold text-xl px-10 py-5 border-2 border-yellow-400 rounded-full self-center text-white bg-yellow-400 hover:bg-transparent hover:text-yellow-400"
                target="_blank"
              >Theo dõi</a>
            </div>
            <CardFacebookUpdate :data="facebookUpdate" />
          </div>
      </div>
    </section>

  </div>
</template>
<script>
  import CardReason from "@/components/Cards/CardReason.vue";
  import CardHistory from '@/components/Cards/CardHistory.vue';
  import CardFacebookUpdate from '@/components/Cards/CardFacebookUpdate.vue';

  export default {
    data() {
      return {
        name: this.$route.meta.breadcrumb,
        background: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/05/header_bg.jpg",
        reason: {
          subTitle: "Chào mừng",
          title: "Những lý do để chạy với chúng tôi!",
          button: {
            title: "Thêm về chúng tôi",
            link: "#",
          },
          video: {
            image: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/image_services_5.png",
            link: '#',
          },
          content: [
            {
              id: 1,
              title: "Hãy Lành Mạnh",
              description: "Không khí trong lành và những chuyến chạy bộ vào sáng sớm chắc chắn có thể chữa khỏi hầu hết mọi thứ.",
              link: "#",
            },
            {
              id: 2,
              title: "Cùng Chúng Tôi",
              description: "Bằng cách tham gia nhóm của chúng tôi, bạn có thể trải nghiệm 100% những khoảnh khắc khó quên.",
              link: "#",
            },
            {
              id: 3,
              title: "Đừng Ngại",
              description: "Không gì khiến bạn cảm thấy tự do và độc lập hơn khi chạy trên con đường rộng mở.",
              link: "#",
            },
            {
              id: 4,
              title: "Hãy Mạnh Mẽ",
              description: "Chạy bộ thường xuyên giúp bạn giữ được thân hình cân đối, khỏe mạnh và dẻo dai.",
              link: "#",
            },
          ]
        },
        history: {
          subTitle: "Lịch sử của chúng tôi",
          title: "Nó như thế nào",
          image: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/about_bg.jpg",
          quote: "Đó là lý do tại sao, trong nhiều năm, tất cả những gì tôi sẽ đến, ai sẽ không nghiên cứu kỹ lưỡng lợi thế của công thức này. Bài tập về nhà hoặc đến Văn phòng dolor sit amet, một nhiếp ảnh kỹ thuật số, hoặc cho bất kỳ pháp sư nào Tại vero và kết hợp chỉ cho phép nội dung.",
        },
        facebookUpdate: [
          {
            id: 1,
            title: 1,
            image: "http://runcrew.ancorathemes.com/wp-content/uploads/sb-instagram-feed-images/119434100_328089088508451_3347539276020269630_nfull.jpg",
          },
          {
            id: 2,
            title: 2,
            image: "http://runcrew.ancorathemes.com/wp-content/uploads/sb-instagram-feed-images/119569848_656643401932338_5516504184157606877_nfull.jpg",
          },
          {
            id: 3,
            title: 3,
            image: "http://runcrew.ancorathemes.com/wp-content/uploads/sb-instagram-feed-images/119419065_346881616505475_8366968924764433697_nfull.jpg",
          },
          {
            id: 4,
            title: 4,
            image: "http://runcrew.ancorathemes.com/wp-content/uploads/sb-instagram-feed-images/119508947_634022373923846_7172422658656261648_nfull.jpg",
          },
          {
            id: 5,
            title: 5,
            image: "http://runcrew.ancorathemes.com/wp-content/uploads/sb-instagram-feed-images/119213491_694430961152347_3828213142168043632_nfull.jpg",
          },
        ]
      };
    },
    components: {
      CardReason,
      CardHistory,
      CardFacebookUpdate,
    },
  };
</script>
