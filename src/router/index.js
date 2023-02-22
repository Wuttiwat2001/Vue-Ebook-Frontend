import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
  },

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/User/Cart.vue')
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('../views/User/Wishlist.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/User/Profile.vue')
  },
  {
    path: '/book/:id',
    name: 'book',
    component: () => import('../views/Book.vue')
  }
  ,
  {
    path: '/login',
    name: 'loginadmin',
    component: () => import('../views/LoginAdmin.vue')
  }
  ,
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  }
  ,
  {
    path: '/usertable',
    name: 'usertable',
    component: () => import('../views/UserTable.vue')
  }
  ,
  {
    path: '/mybook',
    name: 'mybook',
    component: () => import('../views/User/MyBook.vue')
  },
  {
    path: '/orderhistory',
    name: 'orderhistory',
    component: () => import('../views/User/OrderHistory.vue')
  },
  {
    path: '/receiptbook/:id',
    name: 'receiptbook',
    component: () => import('../views/User/DetailOrder.vue')
  },
  {
    path: '/registersell',
    name: 'registersell',
    component: () => import('../views/User/RegisterSell.vue')

  },
  {
    path: '/books/all',
    name: 'books',
    component: () => import('../views/Sell/AllBooks.vue')
  },
  {
    path: '/books/cartoon/all',
    name: 'cartoon',
    component: () => import('../views/Sell/AllCartoon.vue')
  },
  {
    path: '/books/novel/all',
    name: 'novel',
    component: () => import('../views/Sell/AllNovel.vue')
  },
  {
    path: '/bestseller',
    name: 'bestseller',
    component: () => import('../views/Sell/BestSeller.vue')
  },
  {
    path: '/newentry',
    name: 'newentry',
    component: () => import('../views/Sell/NewEntry.vue')
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../views/Sell/Recommend.vue')
  },
  {
    path: '/halloffame',
    name: 'halloffame',
    component: () => import('../views/Sell/Halloffame.vue')
  },
  {
    path: '/admintable',
    name: 'admintable',
    component: () => import('../views/AdminTable.vue')
  },
  {
    path: '/usertable',
    name: 'usertable',
    component: () => import('../views/UserTable.vue')
  },
  {
    path: '/approvetable',
    name: 'approvetable',
    component: () => import('../views/ApproveTable.vue')
  },
  {
    path: '/request/:id',
    name: 'request',
    component: () => import('../views/DetailRequest.vue')
  },
  {
    path: '/coin',
    name: 'coin',
    component: () => import('../views/Coin.vue')
  }
  ,
  {
    path: '/usertable/:id',
    name: 'edituser',
    component: () => import('../views/EditUserForm.vue'),
    meta: {
      hideFooter: true
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../components/Shop/Checkout.vue')
  }
  ,
  {
    path: '/admintable/:id',
    name: 'editadmin',
    component: () => import('../views/EditAdminForm.vue')
  },{
    path: '/historyadmin',
    name: 'historyadmin',
    component: () => import('../views/HistoryAdmin.vue')
  },
  {
    path: '/search/:searchTerm?',
    name: 'search',
    component: () => import('../views/Sell/SearchBooks.vue')

  }
  ,{
    path: '/bookadmin',
    name: 'bookadmin',
    component: () => import('../views/BookLocalAdmin.vue')

  },
  {
    path: '/checkoutcoin',
    name: 'checkoutcoin',
    component: () => import('../components/Coin/Checkout.vue')
  },
  {
    path: '/coinhistory',
    name: 'coinhistory',
    component: () => import('../components/Coin/CoinHistory.vue')
  },
  {
    path: '/coinhistorydetil/:id',
    name: 'coinhistorydetail',
    component: () => import('../components/Coin/DetailHistory.vue'),
    meta: {
      hideFooter: true,
      hideNavbar: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
