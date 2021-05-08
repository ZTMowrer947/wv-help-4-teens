<template>
    <div
        class="w-75 h-100 d-flex flex-column align-items-center justify-content-center"
    >
        <img id="h4t-logo" src="/icon.png" alt="Main WV Help4Teens Logo" />
        <h1 class="display-4">WV Help4Teens</h1>

        <p class="lead">
            Are you a WV teen struggling through issues such as depression or
            obesity?
        </p>

        <p>
            Here you will find collections of resources that can help you with
            issues of this kind. We currently have resources for
            {{ topicCount }}
            different topics.
        </p>

        <nuxt-link class="btn btn-dark" to="/topics">
            Explore Available Topics
        </nuxt-link>
    </div>
</template>

<script lang="ts">
// Imports
import { Component, Vue } from 'vue-property-decorator';
import TopicService from '@/services/TopicService';

// Component
@Component({
    async asyncData() {
        const topics = await new TopicService().getList();

        return { topicCount: topics.length };
    },
})
class Index extends Vue {}

// Export
export default Index;
</script>

<style lang="scss" scoped>
img#h4t-logo {
    max-width: 320px;
}
</style>
