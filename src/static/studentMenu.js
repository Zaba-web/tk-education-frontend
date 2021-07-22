const adminMenu = [
    {
        title: "Навігація",
        items: [
            {
                title: 'Огляд',
                link: '/student',
                active: false,
                icon: `
                    <svg id="dashboard" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class='default-icon-fill'>
                        <path id="Path_1141" data-name="Path 1141" d="M7.708,0H1.458A1.46,1.46,0,0,0,0,1.458v3.75A1.46,1.46,0,0,0,1.458,6.667h6.25A1.46,1.46,0,0,0,9.167,5.208V1.458A1.46,1.46,0,0,0,7.708,0Zm0,0" transform="translate(0 0)"/>
                        <path id="Path_1142" data-name="Path 1142" d="M7.708,213.332H1.458A1.46,1.46,0,0,0,0,214.79v8.75A1.46,1.46,0,0,0,1.458,225h6.25a1.46,1.46,0,0,0,1.458-1.458v-8.75A1.46,1.46,0,0,0,7.708,213.332Zm0,0" transform="translate(0 -204.999)" />
                        <path id="Path_1143" data-name="Path 1143" d="M285.04,341.332h-6.25a1.46,1.46,0,0,0-1.458,1.458v3.75A1.46,1.46,0,0,0,278.791,348h6.25a1.46,1.46,0,0,0,1.458-1.458v-3.75A1.46,1.46,0,0,0,285.04,341.332Zm0,0" transform="translate(-266.499 -327.999)" />
                        <path id="Path_1144" data-name="Path 1144" d="M285.04,0h-6.25a1.46,1.46,0,0,0-1.458,1.458v8.75a1.46,1.46,0,0,0,1.458,1.458h6.25a1.46,1.46,0,0,0,1.458-1.458V1.458A1.46,1.46,0,0,0,285.04,0Zm0,0" transform="translate(-266.499 0)" />
                    </svg>
                `
            },
            {
                title: 'Матеріали',
                link: '/student/study',
                active: false,
                icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.114" height="16.776" viewBox="0 0 14.114 16.776" class='default-icon-fill'>
                        <g id="book-of-black-cover-closed" transform="translate(-36.436)">
                        <path id="Path_1151" data-name="Path 1151" d="M38.572,13.392H50a.436.436,0,0,0,.1-.013h.007a.442.442,0,0,0,.442-.442V.442A.442.442,0,0,0,50.108,0H38.572a2.136,2.136,0,0,0-2.134,2.134.451.451,0,0,0,0,.046c0,1.087-.015,11.072,0,12.385,0,.026,0,.051,0,.077a2.135,2.135,0,0,0,2,2.127.438.438,0,0,0,.067.007h11.6a.442.442,0,0,0,.442-.442V14.669a.442.442,0,1,0-.884,0v1.222H38.572a1.25,1.25,0,0,1-1.247-1.2c0-.012,0-.023,0-.035s0-.05,0-.09A1.251,1.251,0,0,1,38.572,13.392Zm.3-11.258a.442.442,0,0,1,.884,0v8.98a.442.442,0,0,1-.884,0Z" fill="#c2c2c2"/>
                        </g>
                    </svg>              
                `
            },
            {
                title: 'Активність',
                link: '/student/activity',
                active: false,
                icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.152" height="17.166" viewBox="0 0 17.152 17.166" class='default-icon-fill'>
                        <g id="bar-chart_1_" data-name="bar-chart (1)" transform="translate(-0.213)">
                        <g id="Group_641" data-name="Group 641" transform="translate(0.213 7.868)">
                            <g id="Group_640" data-name="Group 640" transform="translate(0)">
                            <path id="Path_1748" data-name="Path 1748" d="M4.147,234.667H.571a.358.358,0,0,0-.358.358v8.583a.358.358,0,0,0,.358.358H4.147a.358.358,0,0,0,.358-.358v-8.583A.357.357,0,0,0,4.147,234.667Z" transform="translate(-0.213 -234.667)" fill="#c2c2c2"/>
                            </g>
                        </g>
                        <g id="Group_643" data-name="Group 643" transform="translate(6.636)">
                            <g id="Group_642" data-name="Group 642">
                            <path id="Path_1749" data-name="Path 1749" d="M195.72,0h-3.576a.358.358,0,0,0-.358.358V16.809a.358.358,0,0,0,.358.358h3.576a.358.358,0,0,0,.358-.358V.358A.358.358,0,0,0,195.72,0Z" transform="translate(-191.786)" fill="#c2c2c2"/>
                            </g>
                        </g>
                        <g id="Group_645" data-name="Group 645" transform="translate(13.073 3.576)">
                            <g id="Group_644" data-name="Group 644">
                            <path id="Path_1750" data-name="Path 1750" d="M387.72,106.667h-3.576a.358.358,0,0,0-.358.358V119.9a.358.358,0,0,0,.358.358h3.576a.358.358,0,0,0,.358-.358V107.025A.358.358,0,0,0,387.72,106.667Z" transform="translate(-383.786 -106.667)" fill="#c2c2c2"/>
                            </g>
                        </g>
                        </g>
                    </svg>                         
                `
            }
        ]
    },
    {
        title: "Інше",
        items: [
            {
                title: 'Налаштування',
                link: '/admin/settings',
                active: false,
                icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.576" height="17.023" viewBox="0 0 16.576 17.023" class='default-icon-fill'>
                        <g id="settings_4_" data-name="settings(4)" transform="translate(-6.71)">
                        <g id="Group_520" data-name="Group 520" transform="translate(6.71)">
                            <path id="Path_1162" data-name="Path 1162" d="M23,10.377,21.435,9.153a6.16,6.16,0,0,0,.037-.643,5.974,5.974,0,0,0-.037-.643L23,6.644a.767.767,0,0,0,.185-.977L21.559,2.851a.754.754,0,0,0-.941-.338l-1.846.741a6.33,6.33,0,0,0-1.109-.643L17.382.653A.753.753,0,0,0,16.63,0H13.368a.751.751,0,0,0-.75.647l-.282,1.965a6.525,6.525,0,0,0-1.106.643L9.378,2.512a.769.769,0,0,0-.934.333L6.815,5.664A.763.763,0,0,0,7,6.646L8.564,7.869a5.612,5.612,0,0,0,0,1.285L7,10.378a.767.767,0,0,0-.184.977L8.44,14.171a.753.753,0,0,0,.941.338l1.846-.741a6.386,6.386,0,0,0,1.108.643l.281,1.958a.753.753,0,0,0,.752.654h3.263a.752.752,0,0,0,.751-.647l.282-1.965a6.556,6.556,0,0,0,1.106-.644l1.851.743a.762.762,0,0,0,.278.052.749.749,0,0,0,.656-.384l1.634-2.83A.766.766,0,0,0,23,10.377Zm-8,.972a2.837,2.837,0,1,1,2.837-2.837A2.84,2.84,0,0,1,15,11.348Z" transform="translate(-6.71)" />
                        </g>
                        </g>
                    </svg>                                      
                `
            },
            {
                title: 'Вихід',
                link: '/logout',
                active: false,
                icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.998" height="15.999" viewBox="0 0 15.998 15.999" class='default-icon-fill'>
                        <g id="logout_1_" data-name="logout(1)" transform="translate(-0.014)">
                        <g id="Group_522" data-name="Group 522" transform="translate(0.014)">
                            <g id="Group_521" data-name="Group 521" transform="translate(0)">
                            <path id="Path_1163" data-name="Path 1163" d="M305.295,151.751a.675.675,0,0,0-.145-.217l-2-2a.667.667,0,1,0-.943.943l.862.862h-3.724a.667.667,0,1,0,0,1.333h3.724l-.862.862a.667.667,0,1,0,.943.943l2-2a.669.669,0,0,0,.145-.727Z" transform="translate(-289.347 -144.672)" />
                            <path id="Path_1164" data-name="Path 1164" d="M11.347,9.333A.666.666,0,0,0,10.68,10v3.333H8.013V2.666a.667.667,0,0,0-.475-.639L5.223,1.333H10.68V4.666a.667.667,0,1,0,1.333,0v-4A.666.666,0,0,0,11.347,0H.681A.594.594,0,0,0,.612.013a.658.658,0,0,0-.283.1C.315.121.3.121.283.132S.275.143.27.147A.66.66,0,0,0,.093.358.544.544,0,0,0,.074.414.632.632,0,0,0,.021.57a.415.415,0,0,0,0,.058C.023.641.014.653.014.667V14a.666.666,0,0,0,.536.653l6.666,1.333A.62.62,0,0,0,7.347,16a.667.667,0,0,0,.667-.667v-.667h3.333A.666.666,0,0,0,12.013,14V10A.666.666,0,0,0,11.347,9.333Z" transform="translate(-0.014)" />
                            </g>
                        </g>
                        </g>
                    </svg>                                              
                `
            }
        ]
    }
]

export default adminMenu