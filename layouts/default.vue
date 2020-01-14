<template>
    <div class="h-100 d-flex flex-column">
        <Header />
        <b-container
            class="flex-grow-1 flex-shrink-0 d-flex flex-column align-items-center"
            fluid
        >
            <nuxt />
        </b-container>
        <Footer />
    </div>
</template>

<script lang="ts">
// Imports
import Vue from 'vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default Vue.extend({
    components: {
        Header,
        Footer,
    },
});
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
    height: 100%;
}
</style>
