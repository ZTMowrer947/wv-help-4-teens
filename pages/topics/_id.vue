<template>
    <div class="h-100 w-100 d-flex flex-column align-items-center">
        <img
            id="topic-logo"
            :src="require(`@/assets/images/${topic.id}.png`)"
            :alt="`Image for ${topic.name}`"
        />

        <h1 class="display-4 text-center text-lg-right mb-5">
            Resources for {{ topic.name }}
        </h1>

        <div
            class="w-75 d-flex flex-column align-items-center justify-content-center"
        >
            <ul class="list-unstyled">
                <li
                    v-for="resource of topic.resources"
                    :key="encodeString(topic.id + resource.description)"
                >
                    <a
                        :href="resource.link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <template v-if="resource.displayName">
                            {{ resource.displayName }}
                        </template>
                        <template v-else>
                            {{ resource.link }}
                        </template>
                    </a>
                    <p>{{ resource.description }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
// Imports
import { Component, Vue } from 'vue-property-decorator';
import TopicService from '@/services/TopicService';

// Component
@Component({
    async asyncData(ctx) {
        // Attempt to fetch topic from service
        const topic = await new TopicService().getById(ctx.params.id);

        // If topic was not found, create 404 error
        if (!topic) {
            ctx.error({
                statusCode: 404,
                message: 'No topic found with given ID',
            });
        }

        // Otherwise, return topic data
        return { topic };
    },
})
class TopicDetails extends Vue {
    encodeString(input: string) {
        return btoa(input);
    }
}

// Export
export default TopicDetails;
</script>

<style lang="scss" scoped>
#topic-logo {
    max-width: 480px;
}
</style>
