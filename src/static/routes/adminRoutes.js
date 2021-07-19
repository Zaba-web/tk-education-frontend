import AdminOverview from '@/views/Admin/AdminOverview.vue'
import AdminGroupsMain from '@/views/Admin/Groups/AdminGroupsMain.vue'
import AdminGroupInfo from '@/views/Admin/Groups/AdminGroupInfo.vue'

import AdminCoursesMain from '@/views/Admin/Study/AdminCourses.vue'
import AdminCourseInfo from '@/views/Admin/Study/AdminCourseInfo.vue'

import AdminThemeInfo from '@/views/Admin/Study/AdminThemeInfo.vue'

import AdminTaskView from '@/views/Admin/Study/TaskView.vue'
import AdminTaskCreate from '@/views/Admin/Study/AdminTaskCreate.vue' 
import AdminTaskEdit from '@/views/Admin/Study/AdminTaskEdit.vue' 

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
        component: AdminCourseInfo
    },
    {
        path: 'theme/:id',
        name: 'admin/study/tasks',
        component: AdminThemeInfo
    },
    {
        path: 'task/view/:id',
        name: 'admin/study/tasks/view',
        component: AdminTaskView
    },
    {
        path: 'task/create/:id',
        name: 'admin/study/task/create',
        component: AdminTaskCreate
    },
    {
        path: 'task/edit/:id',
        name: 'admin/study/task/edit',
        component: AdminTaskEdit
    }

]

export default adminRoutes