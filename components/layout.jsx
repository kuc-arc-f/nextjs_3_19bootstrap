import Head from 'next/head'
import Footer from './footer'
import Navibar from './Navibar'
import Modal from './modal_about';


export default function Layout({ preview, children }) {
  return (
  <div className="bg-light">
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />        
      <link href="/css/main.css" rel="stylesheet"></link>
      <link href="/css/bgcolor.css" rel="stylesheet"></link>
      <link href="/css/components/buttons.css" rel="stylesheet"></link>
    </Head>
    <Navibar />
    <div className="py-0">
      <main>{children}</main>
    </div>
    <Modal></Modal>
    <Footer />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
     integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script>
    <style>{`
    .main_wrap{ background: #EEE;}
    `}</style> 
  </div>
  )
}
