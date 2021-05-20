import Link from 'next/link';
//
const TaskIndexRow = props => (
  <div className="card shadow-lg mb-2">
    <div className="card-body">
      <h3>{props.title}</h3>
      ID: {props.id}  
    </div>    
  </div>
);
export default TaskIndexRow;
