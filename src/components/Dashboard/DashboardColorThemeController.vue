<template>
    <div class="icon-container" @click="changeColorTheme">
        <svg id="lamp" xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 24 24" class="default-icon-fill">
            <path id="Path_1752" data-name="Path 1752" d="M12,3.457a.75.75,0,0,1-.75-.75V.75a.75.75,0,0,1,1.5,0V2.707A.75.75,0,0,1,12,3.457Z"/>
            <path id="Path_1753" data-name="Path 1753" d="M18.571,6.179a.751.751,0,0,1-.53-1.281l1.384-1.384a.75.75,0,0,1,1.061,1.061L19.1,5.959A.752.752,0,0,1,18.571,6.179Z"/>
            <path id="Path_1754" data-name="Path 1754" d="M23.25,12.75H21.293a.75.75,0,1,1,0-1.5H23.25a.75.75,0,0,1,0,1.5Z"/>
            <path id="Path_1755" data-name="Path 1755" d="M19.955,20.7a.744.744,0,0,1-.53-.22L18.041,19.1A.75.75,0,0,1,19.1,18.04l1.384,1.384a.75.75,0,0,1-.531,1.281Z"/>
            <path id="Path_1756" data-name="Path 1756" d="M4.045,20.7a.751.751,0,0,1-.53-1.281L4.9,18.04A.75.75,0,0,1,5.96,19.1L4.576,20.485A.748.748,0,0,1,4.045,20.7Z"/>
            <path id="Path_1757" data-name="Path 1757" d="M2.707,12.75H.75a.75.75,0,0,1,0-1.5H2.707a.75.75,0,0,1,0,1.5Z"/>
            <path id="Path_1758" data-name="Path 1758" d="M5.429,6.179a.744.744,0,0,1-.53-.22L3.515,4.575A.75.75,0,0,1,4.576,3.514L5.96,4.9a.75.75,0,0,1-.531,1.281Z"/>
            <path id="Path_1759" data-name="Path 1759" d="M15,21v1.25A1.758,1.758,0,0,1,13.25,24h-2.5A1.823,1.823,0,0,1,9,21.96V21Z"/>
            <path id="Path_1760" data-name="Path 1760" d="M16.41,6.56A7,7,0,1,0,7.79,17.59,3.02,3.02,0,0,1,8.93,19.5v.01A.17.17,0,0,1,9,19.5h6a.09.09,0,0,1,.05.01V19.5a3.336,3.336,0,0,1,1.28-2,7,7,0,0,0,.08-10.94Zm-.66,5.94a.755.755,0,0,1-.75-.75A2.748,2.748,0,0,0,12.25,9a.75.75,0,0,1,0-1.5,4.259,4.259,0,0,1,4.25,4.25A.755.755,0,0,1,15.75,12.5Z"/>
            <path id="Path_1761" data-name="Path 1761" d="M8.93,19.5H9a.17.17,0,0,0-.07.01Z"/>
            <path id="Path_1762" data-name="Path 1762" d="M15.05,19.5v.01A.09.09,0,0,0,15,19.5Z"/>
        </svg>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                colorThemes: ['dark', 'light']
            }
        },
        methods: { 
            changeColorTheme(){
                let currentColorTheme = localStorage.getItem('colorTheme')
                let currentColorThemeIndex = this.colorThemes.indexOf(currentColorTheme)

                // if color theme not selected
                if(currentColorTheme == null || currentColorTheme == undefined) {
                    localStorage.setItem('colorTheme', this.colorThemes[this.colorThemes.length - 1])
                    return ;
                }

                if(currentColorThemeIndex + 1 < this.colorThemes.length)
                    localStorage.setItem('colorTheme', this.colorThemes[currentColorThemeIndex + 1])
                else
                    localStorage.setItem('colorTheme', this.colorThemes[0])

                // reload page
                this.$router.go()
            }
        }
    }
</script>