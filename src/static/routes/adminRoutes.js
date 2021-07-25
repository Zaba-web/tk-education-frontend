import AdminOverview from '@/views/Admin/AdminOverview.vue'
import AdminGroupsMain from '@/views/Admin/Groups/AdminGroupsMain.vue'
import AdminGroupInfo from '@/views/Admin/Groups/AdminGroupInfo.vue'

import AdminCoursesMain from '@/views/Admin/Study/AdminCourses.vue'
import AdminCourseInfo from '@/views/Admin/Study/AdminCourseInfo.vue'

import AdminThemeInfo from '@/views/Admin/Study/AdminThemeInfo.vue'

import AdminTaskView from '@/views/Admin/Study/TaskView.vue'
import AdminTaskCreate from '@/views/Admin/Study/AdminTaskCreate.vue' 
import AdminTaskEdit from '@/views/Admin/Study/AdminTaskEdit.vue' 

import AdminUsersList from '@/views/Admin/Users/AdminUsersList.vue'

import AdminWorksCourses from '@/views/Admin/Works/AdminWorksCourses.vue'
import AdminWorksTasks from '@/views/Admin/Works/AdminWorksTasks.vue'
import AdminCheckWork from '@/views/Admin/Works/AdminCheckWork.vue'
import AdminUserWorks from '@/views/Admin/Works/AdminUserWorks.vue'

import Settings from '@/views/Settings.vue'

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
    },
    {
        path: 'users/',
        name: 'admin/users',
        component: AdminUsersList
    },
    {
        path: 'works/',
        name: 'admin/works',
        component: AdminWorksCourses
    },
    {
        path: 'works/:courseId/:groupId',
        name: 'admin/works/tasks', 
        component: AdminWorksTasks
    },
    {
        path: 'works/check/:id',
        name: 'admin/works/check',
        component: AdminCheckWork
    },
    {
        path: 'user/tasks/:id',
        name: 'admin/user/tasks',
        component: AdminUserWorks
    },
    {
        path: 'settings',
        name: 'admin/settings',
        component: Settings
    }

]

export default adminRoutes