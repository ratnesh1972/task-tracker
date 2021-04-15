import { useState } from 'react'

function AddTask({ onAdd }) {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please enter a task!');
            return;
        }

        onAdd({ text, day, reminder });

        setText("");
        setDay("");
        setReminder(false);

    }

    return (
        <div className="p-4">
            <form onSubmit={onSubmitHandler}>
                <div className="mb-2">
                    <label className="form-label">Task</label>
                    <input type="text" className="form-control" id="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="mb-2">
                    <label className="form-label">Day</label>
                    <input type="text" className="form-control" id="day" placeholder="Add Day" value={day} onChange={(e) => setDay(e.target.value)} />
                </div>
                <div className="mb-2 form-check">
                    <input type="checkbox" className="form-check-input" id="reminder" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                    <label className="form-check-label">Reminder</label>
                </div>
                <button type="submit" className="btn btn-block btn-primary ">Save Task</button>
            </form>
        </div>
    )
}

export default AddTask
