import AdminOverview from '../../views/Admin/AdminOverview.vue'
import AdminGroupsMain from '../../views/Admin/Groups/AdminGroupsMain.vue'
const adminRoutes = [
    {
        path: '',
        name: 'admin/home',
        component: AdminOverview
    },
    {
        path: 'groups',
        name: 'admin/groups',
        component: AdminGroupsMain
    }
]

export default adminRoutes