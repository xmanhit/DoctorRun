<template>
  <div>
    <section class="header">
      <slide-fullwide :data="mainSlide" class="leading-0"/>
    </section>

    <section class="service">
      <div class="bg-black bg-opacity-5">
        <div class="container px-4 py-16 lg:py-18 xl:py-24 mx-auto">
          <card-services :data="service"/>
        </div>
      </div>
    </section>

    <section class="reason">
      <div class="bg-white">
          <div class="container px-4 py-16 lg:py-18 xl:py-24 mx-auto">
            <h6 class="text-center text-black text-opacity-60 uppercase mb-8">{{ reason.subTitle }}</h6>
            <h2 class="font-oswald text-center uppercase font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl mb-16">{{ reason.title }}</h2>
            <card-reason :data="reason"/>
          </div>
      </div>
    </section>

    <section class="event">
      <div class="bg-cover bg-center" :style="{'background-image': 'url(' + event.bgImage + ')'}">
        <div class="container px-4 py-16 lg:py-18 xl:py-24 mx-auto">
          <h6 class="text-center uppercase text-white text-opacity-60 mb-8">{{ event.subTitle }}</h6>
          <h2 class="font-oswald text-center uppercase text-white font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl mb-16">{{ event.title }}</h2>
          <card-event :data="event.content" />
        </div>
      </div>
    </section>

    <section class="testimonials">
      <card-testimonials :data="testimonials" />
    </section>

    <section class="event">
      <div class="bg-black bg-opacity-5">
        <div class="container px-4 py-16 lg:py-18 xl:py-24 mx-auto">
          <h6 class="text-center uppercase text-black text-opacity-60 mb-8">{{ news.subTitle }}</h6>
          <h2 class="font-oswald text-center uppercase font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl mb-16">{{ news.title }}</h2>
          <card-news :data="news.content"/>
        </div>
      </div>
    </section>

    <section class="count-down">
      <div class="bg-cover bg-center" :style="{'background-image': 'url(' + countDown.bgImage + ')'}">
        <div class="container text-center px-4 py-16 lg:py-18 xl:py-24 mx-auto">
          <h6 class="text-center text-white text-opacity-60 mb-8">{{ countDown.subTitle }}</h6>
          <h2 class="font-oswald text-center uppercase text-white font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl mb-16">{{ countDown.title }}</h2>
          <card-count-down :creationDate="countDown.date" />
          <a class="font-oswald inline-block uppercase font-bold text-xl mt-12 px-10 py-5 border-2 border-yellow-400 rounded-full text-white bg-yellow-400 hover:bg-transparent hover:text-yellow-400" :href="countDown.button.link" :target="countDown.button.target">{{ countDown.button.title }}</a>
        </div>
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
import SlideFullwide from "@/components/Slideshows/SliderFullwide.vue";
import CardServices from "@/components/Cards/CardServices.vue";
import CardReason from "@/components/Cards/CardReason.vue";
import CardEvent from '@/components/Cards/CardEvent.vue';
import CardTestimonials from '@/components/Cards/CardTestimonials.vue';
import CardNews from '@/components/Cards/CardNews.vue';
import CardCountDown from '@/components/Cards/CardCountDown.vue';
import CardFacebookUpdate from '@/components/Cards/CardFacebookUpdate.vue';

export default {
  data() {
    return {
      mainSlide: [
        {
          id: 1,
          title: 'Cảm thấy sự tự do',
          content: 'Hãy để chạy là lối sống của bạn',
          image: require('@/assets/img/cam-adams.jpg'),
          link: '/'
        },
        {
          id: 2,
          title: 'Trải nghiệm sức mạnh',
          content: 'Hãy để chạy là lối sống của bạn',
          image: require('@/assets/img/karsten-winegeart.jpg'),
          link: '/'
        },
        {
          id: 3,
          title: 'Đến chạy với chúng tôi',
          content: 'Hãy để chạy là lối sống của bạn',
          image: require('@/assets/img/naassom-azevedo.jpg'),
          link: '/'
        },
      ],
      service: [
        {
          id: 1,
          icon: 'fas fa-child',
          title: 'Tham gia!',
          description: 'Tham gia một trong những cuộc chạy và tập luyện nhóm hàng tuần của chúng tôi, bằng cách tham gia nhóm của chúng tôi, bạn có thể trải nghiệm 100% những khoảnh khắc khó quên.',
          link: '#',
        },
        {
          id: 2,
          icon: 'fas fa-calendar-alt',
          title: 'Sự kiện',
          description: 'Tìm kiếm trên lịch của chúng tôi để biết các cuộc đua và các sự kiện khác, chạy bộ thường xuyên giúp bạn giữ được thân hình cân đối, khỏe mạnh và dẻo dai.',
          link: '#',
        },
        {
          id: 3,
          icon: 'fas fa-running',
          title: 'Huấn luyện',
          description: 'Những lời dạy về sự thật vĩ đại, và những điều tương tự, không gì khiến bạn cảm thấy tự do và độc lập hơn khi chạy trên con đường rộng mở.',
          link: '#',
        },
        {
          id: 4,
          icon: 'fas fa-stopwatch',
          title: 'Kết quả',
          description: 'Những lời dạy của chân lý tuyệt vời, không khí trong lành và những chuyến chạy bộ vào sáng sớm chắc chắn có thể chữa khỏi hầu hết mọi thứ.',
          link: '#',
        },
      ],
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
      event: {
        subTitle: "Sự kiện",
        title: "Sự kiện sắp tới",
        bgImage: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/03/home1_bg1.jpg",
        content: [
          {
            date: "10/11",
            time: "Tuesday, 9:00 am - 6:00 pm",
            title: "Pre-Run NYC",
            location: "ĐỊA CHỈ: Central Park",
            link: "#",
          },
          {
            date: "17/11",
            time: "Tuesday, Whole day",
            title: "Running Festival",
            location: "ĐỊA CHỈ: Central Park",
            link: "#",
          },
          {
            date: "01/12",
            time: "Tuesday, Whole day",
            title: "10K Lincoln",
            location: "ĐỊA CHỈ: Central Park",
            link: "#",
          },
          {
            date: "10/11",
            time: "Tuesday, 9:00 am - 6:00 pm",
            title: "Pre-Run NYC",
            location: "ĐỊA CHỈ: Central Park",
            link: "#",
          },
          {
            date: "17/11",
            time: "Tuesday, Whole day",
            title: "Running Festival",
            location: "ĐỊA CHỈ: Central Park",
            link: "#",
          },
          {
            date: "01/12",
            time: "Tuesday, Whole day",
            title: "10K Lincoln",
            location: "ĐỊA CHỈ: Central Park",
            link: "#",
          },
          {
            date: "10/11",
            time: "Tuesday, 9:00 am - 6:00 pm",
            title: "Pre-Run NYC",
            location: "ĐỊA CHỈ: Central Park",
            link: "#",
          },
          {
            date: "01/12",
            time: "Tuesday, Whole day",
            title: "10K Lincoln",
            location: "ĐỊA CHỈ: Central Park",
            link: "#",
          },
          {
            date: "10/11",
            time: "Tuesday, 9:00 am - 6:00 pm",
            title: "Pre-Run NYC",
            location: "ĐỊA CHỈ: Central Park",
            link: "#",
          },
        ],
      },
      testimonials: {
        user: {
          avatar: require('@/assets/img/avatar-manh.jpg'),
          name: "N X Mạnh",
          position: "Thành viên",
        },
        image: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/03/home1_bg2.jpg",
        quote: "“Chạy dạy chúng ta thử thách bản thân. Nó dạy chúng ta vượt ra khỏi nơi chúng ta nghĩ rằng chúng ta có thể đi. Nó giúp chúng tôi tìm ra những gì chúng tôi được tạo ra. Đây là những gì chúng ta làm. Đây là tất cả những gì về nó.”",
      },
      news: {
        subTitle: "Có gì mới?",
        title: "Cập nhật tin tức",
        content: [
          {
            id: 1,
            title: 'CHẠY TỪ THIỆN CÙNG DOCTORRUN SỰ KIỆN SẮP TỚI THÁNG 12 NĂM 2020',
            image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-1-370x370.jpg',
            link: '#',
            date: 'April 14, 2016',
            comment: 2,
            like: 340,
          },
          {
            id: 2,
            title: 'CHẠY CÙNG DOCTORRUN',
            image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-2-370x370.jpg',
            link: '#',
            date: 'April 14, 2016',
            comment: 2,
            like: 340,
          },
          {
            id: 3,
            title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
            image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-3-370x370.jpg',
            link: '#',
            date: 'April 14, 2016',
            comment: 2,
            like: 340,
          },
          {
            id: 4,
            title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
            image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-4-370x370.jpg',
            link: '#',
            date: 'April 14, 2016',
            comment: 2,
            like: 340,
          },
          {
            id: 5,
            title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
            image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5-370x370.jpg',
            link: '#',
            date: 'April 14, 2016',
            comment: 2,
            like: 340,
          },
          {
            id: 6,
            title: 'TỪ THIỆN SẮP TỚI THÁNG 12 NĂM 2020',
            image: 'http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/post-5-370x370.jpg',
            link: '#',
            date: 'April 14, 2016',
            comment: 2,
            like: 340,
          },
        ],
      },
      countDown: {
        subTitle: "Aug 12, 2020",
        title: "DoctorRun",
        date: "2020-08-12 00:00:00",
        bgImage: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/04/home1_bg3.jpg",
        button: {
          title: "Tham gia ngay!",
          link: "https://www.fb.com/groups/doctorrun",
          target: "_blank",
        },
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
    SlideFullwide,
    CardServices,
    CardReason,
    CardEvent,
    CardTestimonials,
    CardNews,
    CardCountDown,
    CardFacebookUpdate,
  },
};
</script>
