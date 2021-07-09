import AdminOverview from '@/views/Admin/AdminOverview.vue'
import AdminGroupsMain from '@/views/Admin/Groups/AdminGroupsMain.vue'
import AdminGroupInfo from '@/views/Admin/Groups/AdminGroupInfo.vue'

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
    },
    {
        path: 'groups/:id',
        name: 'admin/group/info',
        component: AdminGroupInfo
    }
]

export default adminRoutes