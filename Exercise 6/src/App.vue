<template>
    <div class="container">
        <page-header></page-header>
        <hr>
        <div class="row">
            <contents></contents>
        </div>
        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Contents from './Contents.vue'
export default {
   components: {
       'page-footer': Footer,
       'page-header': Header,
       'contents': Contents
   }
}
</script>

<style>

</style>
