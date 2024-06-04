import React from 'react';

interface TaskProps {
    title: string;
    description: string;
    isComplete: boolean;
}

export const Task = ({
    title,
    description,
    isComplete,
}: TaskProps) => {
    return (
        <><div className="task-card">
            <div className="task-checkbox flex-column">
                checkbox
            </div>
            <div className="flex-column">
                <div className="flex-row">
                    {title}
                </div>
                <div className="flex-row">
                    {description}
                </div>
            </div>
        </div>
        </>
    )
}

export default Task;