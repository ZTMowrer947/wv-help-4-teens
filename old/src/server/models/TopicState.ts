// Imports
import { Topic } from "../data";
import BaseState from "./BaseState";

// State
interface TopicState extends BaseState {
    topic: Topic;
}

// Export
export default TopicState;
