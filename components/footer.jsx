//import Container from './container'

export default function Footer() {
  return (
  <footer className="footer_box myblog_bgcolor_main">
    <div className="container">
      <div className="py-28 flex flex-col lg:flex-row text-white">
        about:<br />
        Copyright , XXX Inc.
      </div>
    </div>
    <style>{`
    .footer_box {
      margin-top: 80px;
      color: #fff;
      padding: 140px 40px;
    }    
    `}</style>
  </footer>
  )
}
