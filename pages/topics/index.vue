<template>
    <div class="d-flex flex-column align-items-center">
        <h1 class="display-4">Topic Listing</h1>
        <p class="mt-5">
            Please select one of the topic cards below to retrieve a list of
            resources relating to that topic.
        </p>

        <div
            class="w-75 h-100 d-flex flex-column align-items-center justify-content-center"
        >
            <div class="row">
                <div
                    v-for="topic of topics"
                    :key="topic.id"
                    class="col-12 col-sm-6 col-md-4 col-lg-3 topic"
                >
                    <nuxt-link
                        class="btn btn-dark btn-block my-2"
                        :to="`/topics/${topic.id}`"
                        ><h5 class="card-title">{{ topic.name }}</h5></nuxt-link
                    >
                </div>
            </div>
        </div>
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

        return { topics };
    },
})
class TopicListing extends Vue {}

// Export
export default TopicListing;
</script>
