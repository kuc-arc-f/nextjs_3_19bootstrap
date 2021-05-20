import Link from 'next/link';

const IndexRow = props => (
  <tr>
    <td><span className="mr-2">ID: {props.id}</span>
    </td>
    <td>
      <Link href={`/books/${props.id}`}>
        <a><h3>{props.title}
        </h3>
        </a>
      </Link>
    </td>
    <td className="p-2">
    <Link href={`/books/${props.id}`}>
        <a className="btn btn-sm btn-outline-primary"> Show</a>
      </Link>
    </td>
  </tr>
);
export default IndexRow;
