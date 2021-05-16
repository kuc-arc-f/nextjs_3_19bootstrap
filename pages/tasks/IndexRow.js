import Link from 'next/link';
//
const IndexRow = props => (
  <li>
    <Link href={`/tasks/${props.id}`}>
      <a><h3>{props.title}</h3></a>
    </Link>
    <Link href={`/tasks/edit/${props.id}`}>
      <a>[ edit ]</a>
    </Link>    
    &nbsp;<span className="mr-2">ID: {props.id}</span> 
  </li>
);
export default IndexRow;
