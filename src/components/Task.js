import { FaTimes } from 'react-icons/fa';

function Task({ task, onDelete, onToggle }) {
    return (
        <div className={`card-body border mb-2 ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <div className="d-flex flex-row justify-content-between">
                <h6>{task.text} </h6>
                <FaTimes className="cancle" onClick={() => onDelete(task.id)} />
            </div>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
