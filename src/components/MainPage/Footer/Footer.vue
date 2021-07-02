<template>
    <footer>
        <div class="container">
            <div class="title">
                <h2 class="accent-yellow">Виробниче навчання</h2>
                <span class="sub-title accent-yellow">WEB Розробка</span>
            </div>
            <div class="footer-content-container">
                <div>
                    <img src="@/assets/images/logo.svg" alt="Виробниче навчання">
                    <p class="gray-color">
                        Навчальний сайт з виробничого навчання було створено для спрощення 
                        та оптимізації вивчення теми «веб-розробка». Учні отримують доступ до 
                        всіх матеріалів теми, а майстри в/н зручні інструменти дляперевірки 
                        робіт та оцінювання.
                    </p>
                </div>
                <div>
                    <h3 class="accent-yellow">Матеріали</h3>
                    <ul class="flex-list">
                        <li>
                            <a href="#" class="gray-color non-dec">Курс «HTML»‎</a>
                        </li>
                        <li>
                            <a href="#" class="gray-color non-dec">Курс «CSS»‎</a>
                        </li>
                        <li>
                            <a href="#" class="gray-color non-dec">Курс «Javascript»‎‎</a>
                        </li>
                        <li>
                            <a href="#" class="gray-color non-dec">Курс «Адміністрування та контент-менеджмент»‎</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="accent-yellow">Корисні посилання</h3>
                    <ul class="flex-list">
                        <li>
                            <a href="#" class="gray-color non-dec">Методична комісія комп'ютерних професій‎</a>
                        </li>
                        <li>
                            <a href="#" class="gray-color non-dec">Can I use‎‎</a>
                        </li>
                        <li>
                            <a href="#" class="gray-color non-dec">Mozila Developer Network</a>
                        </li>
                        <li>
                            <a href="#" class="gray-color non-dec">W3 Consortium</a>
                        </li>
                        <li>
                            <a href="#" class="gray-color non-dec">
                                Навчальний сайт "Основи комп'ютерної 
                                графіки та веб-дизайну"
                            ‎</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="image-container">
                        <div>
                            <a href="#">
                                <img src="@/assets/images/mkkp.svg" alt="Методична комісія комп'ютерних професій ТК ТНТУ">
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="@/assets/images/okg.svg" alt="Комп'ютерна графіка ТК ТНТУ">
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="@/assets/images/mdn.svg" alt="MDN">
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="@/assets/images/w3s.svg" alt="W3S">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p class="gray-color small-text">
                domen.com | Навчальний сайт з виробничого навчання (веб-розробка) © 2021
            </p>
            <p class="gray-color small-text">
                Публікація контенту на інших ресурсах можлива тільки з вказанням авторства.
            </p>
        </div>
    </footer>
</template>

<style lang="sass" scoped>

footer
    background: $black-text-color
    box-sizing: border-box
    padding: 30px 0

.title
    text-align: center

.footer-content-container
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr
    grid-gap: 90px  
    margin-top: 60px
    @media (max-width: $tablet-medium)
        margin-top: 20px
        & > div:nth-of-type(1)
            display: none
    @media (max-width: $phone-big)
        grid-template-columns: 1fr 
        grid-gap: 0px
        

.image-container
    display: flex
    justify-content: space-between
    width: 85%
    @media (max-width: $phone-small)
        display: none

.copyright
    position: absolute
    bottom: 0
    left: 0
    display: flex
    justify-content: space-around
    width: 100%
    margin: 0 auto
    flex-wrap: wrap
    @media (max-width: $phone-big)
        display: none
</style>