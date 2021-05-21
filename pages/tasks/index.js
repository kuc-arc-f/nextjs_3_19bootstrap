import Link from 'next/link';
import Dexie from 'dexie';
import React from 'react';
import flash from 'next-flash';

import Layout from '../../components/layout'
import LibTask from '../../lib/LibTask';
import LibDexie from '../../lib/LibDexie';
import IndexRow from './IndexRow';
import FlashBox from '../../components/FlashBox'
//
export default class Page extends React.Component {
  static async getInitialProps(ctx) {
    return { 
      flash: flash.get(ctx) || {},
    }
  }
  constructor(props){
    super(props)
    this.state = {data: '', items_org: ''}
    this.handleClickExport = this.handleClickExport.bind(this);
// console.log(props)
  }  
  async componentDidMount(){
    try{
      var config = LibTask.get_const()
      this.db = new Dexie( config.DB_NAME );
      this.db.version(config.DB_VERSION).stores( config.DB_STORE );  
      var items = await this.db.tasks.toArray()
      if(items.length < 1){
        await LibTask.add_init_items(this.db )
        items = await this.db.tasks.toArray()
      }
      this.items_org = items
      items = LibDexie.get_reverse_items(items)
      this.setState({ data: items })
//console.log( items.length )
    } catch (err) {
      alert(err)
      console.log(err);
    }     
  }
  tabRow(){
    if(this.state.data instanceof Array){
//console.log(this.state.data )
      return this.state.data.map((item, index) => {
        return (<IndexRow key={index}
                id={item.id} title={item.title} />       
        )
      })      
    }
  }
  handleClickExport(){
    console.log("handleClickExport:")
//    var content = JSON.stringify( this.state.data );
    var content = JSON.stringify(this.items_org);
//console.log(this.items_org)
    var blob = new Blob([ content ], { "type" : "application/json" });
    var fname = "tasks.json"
    if (window.navigator.msSaveBlob){
      console.log("#-msSaveBlob")
    }else{
      console.log("#-msSaveBlob-false")
      document.getElementById("download").href = window.URL.createObjectURL(blob);
    }
  }
  render() {
    return (
    <Layout>
      <FlashBox messages_success={this.props.flash.messages_success} 
      messages_error={this.props.flash.messages_error} />      
      <div className="container bg-white p-4">
        <h3>Tasks</h3>
        <div className="row">
          <div className="col-sm-6">
            <Link href="/tasks/create">
              <a className="btn btn-secondary btnx-orange mt-0">New</a>
            </Link>          
          </div>
          <div className="col-sm-6">
            <a className="btn btn-sm btn-outline-dark mt-0 mr-2"
             id="download" download="tasks.json"
              onClick={this.handleClickExport}>
              Export
            </a>
            &nbsp;
            <Link href="/tasks/import">
                <a className="btn btn-sm btn-secondary btnx-orange ml-2" target="_blank">Import</a>
            </Link>            
          </div>          
        </div>
        <hr className="mt-2 mb-2" />
        <table className="table table-striped table-hover">
          <tbody>
          {this.tabRow()}
          </tbody>
        </table>
      </div>
    </Layout>
    )
  }
}
