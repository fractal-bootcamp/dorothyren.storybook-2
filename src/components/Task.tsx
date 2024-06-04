import React from 'react';
import { useState } from "react"
import './Task.css';

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
    const [checked, setChecked] = useState(false)

    const checkedStyles = checked ? 'bg-green-200 border border-gray-100' : 'bg-white border border-gray-100'
    const checkedBoxStyles = isComplete ? 'bg-green-200 border border-gray-100' : 'bg-white border border-gray-100'

    return (
        <><div className={`${checkedBoxStyles} flex flex-row max-w-sm w-[90%] h-16 items-center p-4 rounded-lg`}>
            <button className={`w-6 h-6 ${checkedBoxStyles} rounded-md`} onClick={() => setChecked(!checked)}>
            </button>
            <div className="flex-col flex-grow:1 ml-4">
                <div className="flex-row text-lg text-black font-family:Inter ">
                    {title}
                </div>
                <div className="text-gray-500 text-sm">
                    {description}
                </div>
            </div>
        </div>
        </>
    )
}

export default Task;