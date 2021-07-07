import MainPage from '../../views/MainPage/MainPage.vue'
import Signup from '../../views/MainPage/Signup.vue'
import Signin from '../../views/MainPage/Signin.vue'

const mainPageRoutes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: Signup
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: Signin
    }
]

export default mainPageRoutes