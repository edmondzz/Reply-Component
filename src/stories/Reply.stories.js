import React from 'react';
import ReplyComponent from "./Reply"

export default {
    title: "Reply",
    component: ReplyComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
}

const Template = (args) => <ReplyComponent {...args}/>

export const Reply = Template.bind({})
