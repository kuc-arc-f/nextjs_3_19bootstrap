import Link from 'next/link';
//
const IndexRow = props => (
  <tr>
    <td><span className="mr-2">ID: {props.id}</span>
    </td>
    <td>
    <Link href={`/tasks/${props.id}`}>
      <a><h3>{props.title}</h3></a>
    </Link>
    </td>
    <td>
    <Link href={`/tasks/edit/${props.id}`}>
      <a className="btn btn-sm btn-outline-dark">Edit</a>
    </Link>    
    </td>
  </tr>
);
export default IndexRow;
