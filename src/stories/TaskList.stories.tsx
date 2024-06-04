import type { Meta, StoryObj } from '@storybook/react';
import { defaultTaskListProps, TaskList } from '../components/TaskList';
import "../index.css";

const meta = {
    title: "Dorothy/TaskList",
    component: TaskList,
    parameters: {
        layout: "centered",
    }
} satisfies Meta<typeof TaskList>;

export default meta

type Story = StoryObj<typeof meta>

export const Incomplete: Story = {
    args: defaultTaskListProps
}

