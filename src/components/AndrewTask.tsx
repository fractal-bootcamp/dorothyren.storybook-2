import { useState } from "react"


export const AndrewTask = () => {
    const [checked, setChecked] = useState(false)

    const checkedStyles = checked ? 'bg-green-200 border border-green-500' : 'bg-white border border-black'
    const checkedBoxStyles = checked ? 'bg-green-500 border border-green-500' : 'bg-white border border-gray-200'

    return (
        <div className={`${checkedStyles} flex flex-row max-w-sm w-[90%] h-16 items-center p-4 rounded-lg`}>
            <button className={`w-6 h-6 ${checkedBoxStyles} rounded-md`} onClick={() => setChecked(!checked)}></button>
            <div className="flex-col text-md ml-4">
                <div className="text-green-900 font-bold">Title</div>
                <div className="text-gray-500 text-sm">Description</div>
            </div>
        </div>
    )
}