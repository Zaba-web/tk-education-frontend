import StudentOverview from '@/views/Student/StudentOverview.vue'

import StudentStudyCourses from '@/views/Student/Study/StudentStudyCourses.vue'
import StudentStudyThemes from '@/views/Student/Study/StudentStudyThemes.vue'
import StudentStudyTask from '@/views/Student/Study/StudentStudyTask.vue'

const studentRoutes = [
    {
        path: '',
        name: 'student/home',
        component: StudentOverview
    },
    {
        path: 'study',
        name: 'student/study',
        component: StudentStudyCourses
    },
    {
        path: 'study/course/:id',
        name: 'student/study/course',
        component: StudentStudyThemes
    },
    {
        path: 'study/task/:id',
        name: 'student/study/task',
        component: StudentStudyTask
    }
]

export default studentRoutes