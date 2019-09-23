/**
 * 路由管理模块
 */
import Category from '../pages/CategoryList/Category/Category.vue';
import RecoFind from '../pages/Recommend/RecoFind/RecoFind.vue';
import RecoSelect from '../pages/Recommend/RecoSelect/RecoSelect.vue';
import Login from '../pages/Profile/Login/Login.vue';
import Register from '../pages/Profile/Register/Register.vue';

const Home = () => import('../pages/Home/Home.vue');
const Search = () => import('../pages/Search/Search.vue');
const CategoryList = () => import('../pages/CategoryList/CategoryList.vue');
const Recommend = () => import('../pages/Recommend/Recommend.vue');
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue');
const Profile = () => import('../pages/Profile/Profile.vue');

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/categorylist',
    component: CategoryList,
    meta: {
      isShow: true
    },
    children: [
      {
        path: '/categorylist/category',
        component: Category,
        meta: {
          isShow: true
        }
      },
      {
        path: '',
        redirect: '/categorylist/category'
      }
    ]
  },
  {
    path: '/recommend',
    component: Recommend,
    meta: {
      isShow: true
    },
    children: [
      {
        path: '/recommend/find',
        component: RecoFind,
        meta: {
          isShow: true
        }
      },
      {
        path: '/recommend/select',
        component: RecoSelect,
        meta: {
          isShow: true
        }
      },
      {
        path: '',
        redirect: '/recommend/find'
      }
    ]
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: '/profile/login',
        component: Login
      },
      {
        path: '/profile/register',
        component: Register
      },
      {
        path: '',
        redirect: '/profile/login'
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]
