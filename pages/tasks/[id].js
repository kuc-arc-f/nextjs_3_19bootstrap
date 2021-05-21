import Head from 'next/head'
import React from 'react'
import Link from 'next/link';
import Dexie from 'dexie';

import LibTask from '../../lib/LibTask';
import Layout from '../../components/layout'
//
export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = { title: "", content: "", }
    this.id  = parseInt(this.props.id)
console.log(this.id )
  }
  componentDidMount(){
    var config = LibTask.get_const()
    this.db = new Dexie( config.DB_NAME );
    this.db.version(config.DB_VERSION).stores( config.DB_STORE )
    this.get_items(this.id)                 
  } 
  static async getInitialProps(ctx) {
    console.log(ctx.query.id)
    var id = ctx.query.id
      return {
          id: id,
      };
  }     
  async get_items(id){
    try{
      const item = await this.db.tasks.get(id);
      this.setState({ 
          id: this.props.id,
          title: item.title, 
          content: item.content
      });        
      console.log(item);       
    } catch (err) {
        console.log(err);
    }
  }  
  render() {
    return (
    <Layout>
      <div className="container p-4">
        <Link href="/tasks">
          <a className="btn btn-light btnx-outline-orange mt-0">Back</a>
        </Link>          
        <div className="card shadow-sm my-2">
          <div className="card-body">
            <h1>{this.state.title}</h1>
            ID : {this.props.id}            
          </div>        
        </div>  
        <div className="card shadow-sm mb-2">
          <div className="card-body">
            Content:<br />
            {this.state.content}
          </div>        
        </div>        
      </div>
    </Layout>
    )
  }
}
