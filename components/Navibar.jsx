import Link from 'next/link';
import Head from 'next/head';
//
export default function Page(){
  var name  = process.env.MY_SITE_NAME;
//console.log(d)
// navbar-light
  return (
  <nav className="navbar navbar-expand-md navbar-dark myblog_bgcolor_sub" >
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{name}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
       data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dev
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/task_card">taskCard</a></li>
              <li><a className="dropdown-item" href="/task_card_flex">taskCardFlex</a></li>
            </ul>
          </li>           
          <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Master
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/category">BookCategory</a></li>
              <li><a className="dropdown-item" href="/tags">BookTags</a></li>
            </ul>
          </li>           
          <li className="nav-item">
            <a className="nav-link active" href="/tasks">Tasks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/books">Books</a>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle nav-icon-face" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-emoji-neutral rounded-circle"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/">action1</a></li>
              <li><a className="dropdown-item" href="/">action2</a></li>
            </ul>
          </li>          

          <li className="nav-item">
            <a className="nav-link active" href="#" data-bs-toggle="modal"
             data-bs-target="#NavigateAboutModal">About
            </a>            
          </li>          
        </ul>
      </div>
    </div>
    <style>{`
    .nav-icon-face{font-size: 1.4rem;}
    .nav-icon-img{ width : 32px;}
    `}</style> 
  </nav>
  )
}
