import Layout from '../components/layout'
//
export default function Page() {
  return (
  <Layout>
    <div className="container mx-auto px-5 py-4 bg-white">
      <h1>About</h1>
      <p>Next.js + Bootstrap 5 , IndexedDB CRUD sample</p>
      <hr />
      <p>Date: 2021/05/19</p>
      <hr />
      <h3>author :</h3>
      <p>
        <a className="" href="https://twitter.com/kuc_arc_f">@kuc_arc_f</a>
      </p>
      <p><a className="" href="https://kuc-arc-f.com">https://kuc-arc-f.com</a>
      </p>
    </div>
  </Layout>
  )
}
