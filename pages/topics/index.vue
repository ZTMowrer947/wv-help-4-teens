<template>
    <div class="d-flex flex-column align-items-center h-100">
        <h1 class="display-4">Topic Listing</h1>
        <p class="mt-5">
            Please select one of the topic cards below to retrieve a list of
            resources relating to that topic.
        </p>

        <div
            class="w-75 h-100 d-flex flex-column align-items-center justify-content-center"
        >
            <b-row>
                <b-col
                    v-for="topic of topics"
                    :key="topic.id"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    class="topic"
                >
                    <nuxt-link
                        class="btn btn-dark btn-block my-2"
                        :to="`/topics/${topic.id}`"
                    >
                        <h5 class="card-title">{{ topic.name }}</h5>
                    </nuxt-link>
                </b-col>
            </b-row>
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
