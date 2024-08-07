export const constantRoute = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    redirect: "/home/ideas",
    component: () => import("@/views/home/index.vue"),
    children: [
      {
        path: "/home/ideas",
        name: "ideas",
        component: () => import("@/views/home/ideas.vue"),
        redirect: "/home/ideas/trend",
        children: [
          {
            path: "/home/ideas/trend",
            name: "trend",
            component: () => import("@/views/home/components/trend.vue"),
          },
          {
            path: "/home/ideas/hot",
            name: "hot",
            component: () => import("@/views/home/components/hot.vue"),
          },
          {
            path: "/home/ideas/news",
            name: "news",
            component: () => import("@/views/home/components/news.vue"),
          },
          {
            path: "/home/ideas/likes",
            name: "likes",
            component: () => import("@/views/home/components/likes.vue"),
          },
          {
            path: "/home/ideas/star-creator",
            name: "star-creator",
            component: () => import("@/views/home/components/starCreator.vue"),
          },
        ],
      },
      {
        path: "/home/assets",
        name: "assets",
        component: () => import("@/views/home/assets.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test.vue"),
  },
];
