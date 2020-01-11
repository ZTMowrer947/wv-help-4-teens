import topicData, { Topic } from "../data";

// Service
export default class TopicService {
    private topicData: typeof topicData;

    public constructor() {
        this.topicData = topicData;
    }

    public async getTopics(): Promise<Topic[]> {
        return this.topicData;
    }

    public async getTopicById(id: string): Promise<Topic | undefined> {
        return this.topicData.find(topic => topic.id === id);
    }
}
