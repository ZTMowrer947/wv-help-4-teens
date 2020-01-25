<template>
    <header class="flex-shrink-0 bg-dark">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand to="/">WV Help4Teens</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mr-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item-dropdown text="Topics" right>
                        <b-dropdown-item
                            v-for="topic of topics"
                            :key="topic.id"
                            :to="`/topics/${topic.id}`"
                        >
                            {{ topic.name }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script lang="ts">
// Imports
import { Component, Vue } from 'vue-property-decorator';
import { Topic } from '@/data';
import TopicService from '@/services/TopicService';

// Component
@Component({})
class Header extends Vue {
    topics: Topic[] = [];

    mounted() {
        new TopicService().getList().then(recievedTopic => {
            this.topics = recievedTopic;
        });
    }
}

// Export
export default Header;
</script>
