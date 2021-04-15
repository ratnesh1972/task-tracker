import Task from "./Task"

function Tasks({ tasks, onDelete, onToggle }) {
    return (
        <div className="p-4">
            {tasks.map((task) => {
                return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            })}
        </div>
    )
}

export default Tasks
