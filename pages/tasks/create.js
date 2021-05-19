import Link from 'next/link';
import Router from 'next/router'
import React, {Component} from 'react';
import Dexie from 'dexie';
import flash from 'next-flash';

import LibTask from '../../lib/LibTask';
import Layout from '../../components/layout'
//
export default class extends Component {
  constructor(props){
    super(props)
    this.state = {title: '', content: ''}
    this.handleClick = this.handleClick.bind(this);
//console.log(props)
  }
  componentDidMount(){
    var config = LibTask.get_const()
    this.db = new Dexie( config.DB_NAME );
    this.db.version(config.DB_VERSION).stores( config.DB_STORE );                 
  }  
  handleChangeTitle(e){
    this.setState({title: e.target.value})
  }
  handleChangeContent(e){
    this.setState({content: e.target.value})
  }   
  handleClick(){
    this.add_item()
  } 
  async add_item(){
    try {
      var item = {
        title: this.state.title,
        content: this.state.content,
        created_at: new Date(),
      }
//      console.log(item)
      await this.db.tasks.add( item )
      flash.set({ messages_success: 'Success , save' })
      Router.push('/tasks');
    } catch (error) {
      console.error(error);
    }    
  } 
  render() {
    return (
      <Layout>
        <div className="container">
          <Link href="/tasks">
            <a className="btn btn-outline-primary mt-2">Back</a>
          </Link>                   
          <div className="card w-75 shadow-sm my-2">
            <div className="card-body">
              <h1>Tasks - Create</h1>
              <div className="form-group">
                <label>Title:</label>
                <input type="text" className="form-control"
                onChange={this.handleChangeTitle.bind(this)} />
              </div>
              <div className="form-group">
                <label>Content:</label>
                <input type="text" className="form-control"
                  onChange={this.handleChangeContent.bind(this)}/>
              </div>
              <div className="form-group mt-4">
                <button className="btn btn-primary" onClick={this.handleClick}>Create
                </button>
              </div>                

            </div>        
          </div>
        </div>
      </Layout>
    )    
  } 
}

