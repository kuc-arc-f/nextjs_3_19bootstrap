import Link from 'next/link';
//
const IndexRow = props => (
  <div className="row justify-content-center">
    <div className="task_card_box card shadow-lg mb-3">
      <div className="d-flex">
        <div className="card_col_icon py-4 ">
          <i className="bi bi-clipboard"></i>
        </div>
        <div className="card_col_body ms-auto p-2">
          <div className="card-body">
            <Link href={`/tasks/${props.id}`}>
              <a><h3>{props.title}</h3></a>
            </Link>  
            <span className="mr-2">ID: {props.id}</span>          
          </div>
        </div>
      </div>
    </div>
    <style>{`
    .card_col_body{ text-align: left; width: 100%;}
    .card_col_icon{ font-size: 2rem; }
    .task_card_box{ width : 75%;}
    `}</style>    
  </div>
);
export default IndexRow;
