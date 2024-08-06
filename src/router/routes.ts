export const constantRoute = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    children: [
      {
        path: "/home/ideas",
        name: "ideas",
        component: () => import("@/views/home/ideas.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test.vue"),
  },
];
