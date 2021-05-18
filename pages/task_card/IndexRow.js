import Link from 'next/link';
//
const IndexRow = props => (
  <div className="card shadow-sm mb-2">
    <div className="card-body">
      <Link href={`/tasks/${props.id}`}>
        <a><h3>{props.title}</h3></a>
      </Link>
      <span className="mr-2">ID: {props.id}</span>
    </div>
  </div>
);
export default IndexRow;
