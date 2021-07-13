import AdminOverview from '@/views/Admin/AdminOverview.vue'
import AdminGroupsMain from '@/views/Admin/Groups/AdminGroupsMain.vue'
import AdminGroupInfo from '@/views/Admin/Groups/AdminGroupInfo.vue'

import AdminCoursesMain from '@/views/Admin/Study/AdminCourses.vue'
import AdminGroupCourseInfo from '@/views/Admin/Study/AdminGroupCourseInfo.vue'

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
    },
    {
        path: 'study',
        name: 'admin/study',
        component: AdminCoursesMain
    },
    {
        path: 'course/:id',
        name: 'admin/study/themes',
        component: AdminGroupCourseInfo
    }

]

export default adminRoutes