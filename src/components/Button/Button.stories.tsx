import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Button from "./Button";
import {IButton} from './Button'

export default {
  title: "mrb-ui/Button",
  component: Button,
  argTypes: {
    children: {
    name: 'children',
    type: { name: 'string', required: false },
    description: 'children description',
    table: {
      type: { 
        summary: 'something short', 
       detail: 'someth ing really really long' 
      },
      defaultValue: { summary: 'defaultValue' , 
       detail: 'someth ing really really long'},
    },
    control: {
      type: 'text'
    }
  },
  
  tailwindStyle: { control: 'text'},
  color: { control: 'select', options: ['primary', 'secondary','error', 'warning','info', 'success'] }, 
  size: { control: 'radio', options: ['small', 'medium','large'] },
  state: { control: 'radio', options: ['text', 'contained','outlined'] },
  uppercase: { control: 'boolean' },
  borderRadius: { control: 'number' },
  rounded: { control: 'boolean' },

  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "I'm a button 😎",
  tailwindStyle:"hover:py-24",
  cssStyle:`&{box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.64), 0 17px 50px 0 rgba(255,0,0,0.69);
  }
  `,
  color: "primary",
  size: "small",
  state:"contained",
  uppercase:false,
  borderRadius:5,
  rounded:false,

};
