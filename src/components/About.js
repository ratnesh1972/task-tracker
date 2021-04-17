import { Link } from 'react-router-dom';
function About() {
    return (
        < div className="p-4" >
            <p>Task Tracker is small app built with React.js. It provides feature of adding and deleting tasks. Its using json-server as a mock server.</p>
            <Link to="/">Go Back</Link>
        </div >
    )
}

export default About
