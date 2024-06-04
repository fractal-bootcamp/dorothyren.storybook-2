import { Task } from "./Task"
import { ReactElement } from "react"

//create an array with all the data that you want to render on screen
// figure out how to render one instance of that data
// React component is a building block of React - it's a box that can hold other boxes (turn one project's data into one React component)
// map takes all the data and applies the transformation to all of them

export const defaultTaskListProps =
    [
        {
            title: "Dishwashing",
            description: "Wash and dry dishes, pots, pans",
            isComplete: true,
        },
        {
            title: "Laundry",
            description: "Wash dry fold clothes",
            isComplete: false,
        },
        {
            title: "Vaccuuming",
            description: "vacuum carpets, rugs, and floors",
            isComplete: false,
        },
        {
            title: "Dusting",
            description: "dust furniture and shelves",
            isComplete: false,
        },

    ]


export function TaskList(props = defaultTaskListProps) {
    return (
        <>
            <div className="flex-col flex-grow:1 ml-4">
                <div className="flex-row text-lg text-black font-family:Inter ">
                    {props[0].title}
                </div>
                <div className="text-gray-500 text-sm">
                    {props[0].description}
                </div>
            </div>
        </>
    )
}

// function projectList(projectList: {
//     title: string;
//     description: string;
// }): ReactElement {
//     return <TaskList props={taskList} />
// // }

// export default function ProjectTaskList() {
//     return (
//         <div>
//             {taskList.map(projectList)}
//         </div>
//     )
// }