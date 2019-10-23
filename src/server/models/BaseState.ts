// Imports
import TopicService from "../services/TopicService";
import { Topic } from "../data";

// State
interface BaseState {
    scripts: string[];
    scriptHashes: string[];
    styles: string[];
    styleHashes: string[];
    topicService: TopicService;
    topics: Topic[];
}

// Export
export default BaseState;
