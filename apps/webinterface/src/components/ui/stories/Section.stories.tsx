import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Section } from '../Section';

export default {
    title: 'UI/Section',
    component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args}></Section>;

export const RegularSection = Template.bind({});
RegularSection.args = { name: 'Section name', description: 'Section description' };
