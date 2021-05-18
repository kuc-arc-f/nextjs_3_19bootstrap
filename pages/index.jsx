import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout_bootstrap'

export default function Index(data) {
  return (
  <div className="bg-gray-100">
    <Head><title>{process.env.MY_SITE_NAME}</title>
    </Head>    
    <Layout>
      <div className="container">
        <h1 className="my-4">Home</h1>
        <p>This is home page.</p>
        <hr className="my-2" />
        <div className="icon_wrap">
          <i className="bi bi-alarm mx-2"></i>
          <i className="bi bi-calendar mx-2"></i>
          <i className="bi bi-house-fill mx-2"></i>
        </div>        
        <hr className="my-2" />
      </div>
    </Layout>
    <style>{`
    .icon_wrap{ font-size: 2rem; color: green; }
    `}</style>     
  </div>
  )
}

export async function getStaticProps() {
  return {
    props : {
      blogs: [],
      site_name : process.env.MY_SITE_NAME,
//      info_text : "CMSの関連記事を公開予定しております。",        
    }
  };
}
