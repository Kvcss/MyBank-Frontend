import MainLayout from 'layouts/MainLayout.vue';
import LoginPage from 'pages/LoginPage.vue';
import SelectAccount from 'pages/SelectAccount.vue';
import CheckoutPage from 'pages/CheckoutPage.vue';
import ErrorNotFound from 'pages/ErrorNotFound.vue';
import CheckoutPartTwo from 'pages/CheckoutPartTwo.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: LoginPage },
      { path: 'select-account', component: SelectAccount },
      { path: 'checkout-1', component: CheckoutPage },
      { path: 'checkout-2', component: CheckoutPartTwo },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
