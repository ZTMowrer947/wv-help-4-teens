// Imports
import topicData, { Topic } from '../data';

// Service
export default class TopicService {
    #topicData: typeof topicData;

    constructor() {
        this.#topicData = topicData;
    }

    async getList(): Promise<Topic[]> {
        return this.#topicData;
    }

    async getById(id: string): Promise<Topic | undefined> {
        return this.#topicData.find(topic => topic.id === id);
    }
}
