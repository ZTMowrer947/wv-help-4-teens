// Imports
import { mount } from '@vue/test-utils';
import Logo from '@/components/Logo.vue';

// Test suite
describe('Logo.vue', () => {
    it('should render without errors', () => {
        // Mount component
        const wrapper = mount(Logo);

        // Expect component to be a Vue instance
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
