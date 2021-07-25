<template>
    <div class="table-contianer bg-fill-block">
        <table>
            <tr>
                <th v-for="(header, index) in tableHeader" :key="index" class="p-like sm-top-padding">
                    {{header}}
                </th>
            </tr>
            <transition-group
                enter-active-class="animate__animated animate__fadeInUp"
                leave-active-class="animate__animated animate__fadeOutUp"
                >

                <tr v-for="(item, index) in tableContent" :key="index">
                    <td v-for="(cellContent, _index) in item" :key="_index" class="p-like sm-top-padding default-text-color less-size" v-html="cellContent">
                    </td>
                </tr>

                <slot v-if="tableContent == undefined"></slot>
            </transition-group>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            tableHeader: Array,
            tableContent: Array
        }
    }
</script>

<style lang="sass" scoped>
.table-contianer
    width: 100%
    overflow: auto
    box-sizing: border-box
    padding: 25px
    border-radius: 4px
    animation: show-animation 1.5s forwards
table
    width: 100%
    min-width: 900px
</style>