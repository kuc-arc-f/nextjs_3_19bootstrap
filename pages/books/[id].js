import Head from 'next/head'
import React from 'react'
import Link from 'next/link';
import Router from 'next/router'
import flash from 'next-flash';
import Dexie from 'dexie';

import Layout from '../../components/layout'
import LibBook from '../../lib/LibBook'
import LibTask from '../../lib/LibTask';
import LibCommon from '../../lib/LibCommon'
//
export default class extends React.Component {
  static async getInitialProps(ctx) {
    console.log(ctx.query.id)
    var category_items = LibBook.get_category_items()
    var tags = LibBook.get_tag_items() 
    var id = ctx.query.id
      return {
          id: id, category_items: category_items,
          tags: tags
      };
  }  
  constructor(props){
    super(props)
    this.state = { item: {} , tags: [] }
    this.id  = parseInt(this.props.id)
//console.log(props )
  }
  componentDidMount(){
    var config = LibTask.get_const()
    this.db = new Dexie( config.DB_NAME );
    this.db.version(config.DB_VERSION).stores( config.DB_STORE )
    this.get_items(this.id)
  }
  async get_items(id){
    try{
      var item = await this.db.books.get(id);
      item.category = LibBook.get_category_item(
        parseInt(item.category_id ), this.props.category_items
      )  
      var tag_arr = JSON.parse(item.tag_ids || '[]')
      var tags = LibBook.get_tags(tag_arr , this.props.tags)
console.log(item)
      this.setState({ item: item , tags: tags }); 
    } catch (err) {
        console.log(err);
    }
  }
  async handleClickDelete(){
console.log("#deete-id:" , this.props.id)
//console.log(this.props )
    try {
      await this.db.books.delete(parseInt(this.props.id) );
      flash.set({ messages_success: 'Success , delete item' })
      Router.push('/books');
    } catch (error) {
      console.error(error);
    } 
  }        
  render(){
    var tags = this.state.tags
    var item = this.state.item
    var categoryName = ""
    if(typeof (item.category) != 'undefined'){
      categoryName = item.category.name
    }
    return (
    <Layout>
      <div className="container py-2">
        <Link href="/books">
          <a className="btn btn-light btnx-outline-orange my-2">Back</a></Link>
        <div className="card shadow-sm my-2">
          <div className="card-body">
            <h1 className="mx-2">{item.title}</h1>
            ID : {this.id} <br />
            <hr className="my-2" />
            Category : {categoryName}
            <hr className="my-2"/>          
            Tag : 
            {tags.map((item, index) => {
      //console.log(item)
              return (<span key={index}> #{item.name}</span>)
            })}      
            <hr className="my-2"/>
            <div>Content: 
              <pre>{item.content}</pre> 
            </div>
            <hr className="my-2"/>
            Pub date : {item.pub_date}  
            <hr className="my-2"/>
            Price: {item.price} JPY
            <hr className="my-2"/>
            <div className="form-group my-2">
              <button className="btn btn-danger" 
                onClick={this.handleClickDelete.bind(this)}>Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    )
  }
}

