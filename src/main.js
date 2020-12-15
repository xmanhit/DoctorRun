import Vue from "vue";
import VueRouter from "vue-router";
import VueBreadcrumbs from 'vue-2-breadcrumbs';
// import VueBreadcrumbs from 'vue-2-crumbs';
import BackToTop from 'vue-backtotop';
import VueMasonry from 'vue-masonry-css';

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
import Client from "@/layouts/Client.vue";
// import LayoutNews from "@/layouts/News.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views for Client layout

import Index from "@/views/client/Index.vue";
import Introduce from "@/views/client/Introduce.vue";
import News from "@/views/client/News.vue";
import DetailNews from "@/views/client/DetailNews.vue";
import Image from "@/views/client/Image.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";

// views for Error layout
import NotFoundComponent from "@/views/errors/Errors404.vue";
import ComingSoon from "@/views/ComingSoon.vue";

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: '/',
    name: 'home',
    component: Client,
    meta: {
      title: 'Trang Chủ - DoctorRun',
      breadcrumb: 'Trang Chủ',
    },
    children:[
      {
        path: '/',
        component: Index,
      },
      {
        path: '/introduce',
        name: 'introduce',
        component: Introduce,
        meta: {
          title: 'Giới Thiệu - DoctorRun',
          breadcrumb: 'Giới Thiệu',
        },
      },
      {
        path: '/event',
        name: 'event',
        component: News,
        meta: {
          title: 'Sự Kiện - DoctorRun',
          breadcrumb: 'Sự Kiện',
        },
      },
      {
        path: '/featured',
        name: 'featured',
        component: ComingSoon,
        meta: {
          title: 'Đặc Trưng - DoctorRun',
          breadcrumb: 'Đặc Trưng',
        },
      },
      {
        path: '/practice',
        name: 'practice',
        component: ComingSoon,
        meta: {
          title: 'Tập Luyện - DoctorRun',
          breadcrumb: 'Tập Luyện',
        },
      },
      {
        path: '/news',
        name: 'news',
        component: {template : '<router-view/>'},
        meta: {
          title: 'Tin Tức - DoctorRun',
          breadcrumb: 'Tin Tức',
        },
        children:[
          {
            path: '',
            component: News,
            meta: {
              name: 'Tin Tức',
              // breadcrumb: 'Tin Tức',
            },
          },
          {
            path: 'su-kien-chay-tuyet-voi-nhat',
            component: DetailNews,
            meta: {
              title: 'Sự kiện chạy tuyệt vời nhất - DoctorRun',
              breadcrumb: 'Sự kiện chạy tuyệt vời nhất',
            },
          }
        ],
      },
      {
        path: '/image',
        component: Image,
        meta: {
          title: 'Hình Ảnh - DoctorRun',
          breadcrumb: 'Hình Ảnh',
        },
      },
    ]
  },


  {
    path: "*",
    component: NotFoundComponent,
    meta: {
      title: 'NotFound - DoctorRun',
    },
  },
];

// app config

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueBreadcrumbs);
Vue.use(BackToTop);
Vue.use(VueMasonry);

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else { // ← here ↓
    document.title = previousNearestWithMeta.meta.title
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
