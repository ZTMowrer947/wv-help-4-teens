<template>
    <div
        class="w-75 h-100 d-flex flex-column align-items-center justify-content-center"
    >
        <img src="/images/h4t.png" alt="Main WV Help4Teens Logo" />
        <h1 class="display-4">WV Help4Teens</h1>

        <p class="lead">
            Are you a WV teen struggling through issues such as depression or
            obesity?
        </p>

        <p>
            Here you will find collections of resources that can help you with
            issues of this kind. We currently have resources for
            <!-- INSERT TOPIC LIST LENGTH HERE -->
            different topics.
        </p>

        <nuxt-link class="btn btn-dark" to="/topics">
            Explore Available Topics
        </nuxt-link>
    </div>
</template>

<script lang="ts">
// Imports
import Vue from 'vue';

// Component
export default Vue.extend({});
</script>
