import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router'
import React from 'react'
import Dexie from 'dexie';
import flash from 'next-flash';

import LibTask from '../../../lib/LibTask';
import Layout from '../../../components/layout'
//
export default class extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
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
          title: item.title, 
          content: item.content
      });        
      console.log(item);       
    } catch (err) {
        console.log(err);
    }
  }   
  handleChangeTitle(e){
    console.log("handleChangeTitle:")
    this.setState({title: e.target.value})
  }
  handleChangeContent(e){
    this.setState({content: e.target.value})
  }  
  async handleClickDelete(){
    console.log("#deete-id:" , this.id)
    try {
      await this.db.tasks.delete(parseInt(this.id) );
      flash.set({ messages_success: 'Success , delete item' })
      Router.push('/tasks');
//console.log(item)
    } catch (error) {
      console.error(error);
    }     
  } 
  async handleClick(){
  console.log("#-handleClick")
//console.log(this.state)
    await this.update_item()
  }     
  async update_item(){
    try {
      await this.db.tasks.update(parseInt( this.id ) , {
        title: this.state.title,
        content: this.state.content,
      });
      flash.set({ messages_success: 'Success , save' })
      Router.push('/tasks');      
//console.log(item)
    } catch (error) {
      console.error(error);
    }     
  }  
  render() {
    return (
    <Layout>
      <div className="container">
        <Link href="/tasks">
          <a className="btn btn-light btnx-outline-orange mt-2">Back</a>
        </Link>
        <div className="card w-75 shadow-sm my-2">
          <div className="card-body">
            <h1>Tasks - Edit</h1>
            <div className="form-group mb-2">
              <label>Title:</label>
              <input type="text" id="title" className="form-control"
              value={this.state.title}
              onChange={this.handleChangeTitle.bind(this)} />
            </div>
            <div className="form-group mb-2">
              <label>Content:</label>
              <input type="text" className="form-control"
                value={this.state.content}
                onChange={this.handleChangeContent.bind(this)}/>
            </div>
            <div className="form-group">
              <button className="btn btn-secondary btnx-orange" onClick={this.handleClick}>Save
              </button>
            </div>
            <hr />
            <div className="form-group">
              <button className="btn btn-outline-danger" onClick={this.handleClickDelete}>Delete
              </button>
            </div>
          </div>
        </div>             
        <hr />
        ID : {this.props.id}
      </div>
    </Layout>
    );
  };
}

