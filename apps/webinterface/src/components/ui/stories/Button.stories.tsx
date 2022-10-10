import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Button } from '../Button';

export default {
    title: 'UI/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <div>
        <Button label='Button label'></Button>
    </div>
);

export const RegularButton = Template.bind({});
RegularButton.args = { };
