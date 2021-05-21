import Link from 'next/link';
import React from 'react';
import flash from 'next-flash';
import Router from 'next/router'
import Dexie from 'dexie';

import Layout from '../../components/layout'
import FlashBox from '../../components/FlashBox'
import LibTask from '../../lib/LibTask';
import LibBook from '../../lib/LibBook';
import LibDexie from '../../lib/LibDexie';
import IndexRow from './IndexRow';
//
export default class Page extends React.Component {
  static async getInitialProps(ctx) {
// console.log(json)
    return { 
      items: [] ,user_id :"",
      flash: flash.get(ctx) || {},
    }
  }
  constructor(props){
    super(props)
    this.state = {data: '', items_org: ''}
//console.log(this.props)
  }
  async componentDidMount(){
    var config = LibTask.get_const()
    this.db = new Dexie( config.DB_NAME );
    this.db.version(config.DB_VERSION).stores( config.DB_STORE );  
    var items = await this.db.books.toArray()
    if(items.length < 1){
      await LibBook.add_init_items(this.db )
      items = await this.db.books.toArray()
    }
    this.items_org = items
    items = LibDexie.get_reverse_items(items)
    this.setState({ data: items })    
  }
  handleClickExport(){
    console.log("handleClickExport:")
    var content = JSON.stringify(this.items_org);
//console.log(this.items_org)
    var blob = new Blob([ content ], { "type" : "application/json" });
    var fname = "books.json"
    if (window.navigator.msSaveBlob){
      console.log("#-msSaveBlob")
    }else{
      console.log("#-msSaveBlob-false")
      document.getElementById("download").href = window.URL.createObjectURL(blob);
    }
  }       
  tabRow(){
    if(this.state.data instanceof Array){
// console.log(this.state.data )
      return this.state.data.map((item, index) => {
        return (<IndexRow key={index}
          category_name=""
          id={item.id} title={item.title} date="" />       
        )
      })      
    }
  }  
  render() {
    const items = this.state.data
//console.log(items)
    return (
    <div className="bg-white">
    <Layout>
      <FlashBox messages_success={this.props.flash.messages_success} 
      messages_error={this.props.flash.messages_error} />      
      <div className="container bg-white p-2">
        <h1 className="text-5xl font-bold my-2">Books</h1>
        <hr className="my-2" />
        <div className="row">
          <div className="col-sm-6">
            <Link href="/books/create">
              <a className="btn btn-secondary btnx-orange mb-2">Create</a>
            </Link>  
          </div>
          <div className="col-sm-6">
            <a className="btn btn-sm btn-light btnx-outline-orange mr-2"
             id="download" download="books.json"
              onClick={this.handleClickExport.bind(this)}>
              Export
            </a>
            &nbsp;
            <Link href="/books/import">
                <a className="btn btn-sm btn-secondary btnx-orange ml-2" target="_blank">Import</a>
            </Link>                        
          </div>
        </div>
        <table className="table table-striped table-hover">
          <tbody>
          {this.tabRow()}
          </tbody>
        </table>
      </div>
    </Layout>
    </div>
    )
  }
}
