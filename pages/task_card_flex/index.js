import Link from 'next/link';
import Dexie from 'dexie';
import React from 'react';

import Layout from '../../components/layout_bootstrap'
import LibTask from '../../lib/LibTask';
import LibDexie from '../../lib/LibDexie';
import IndexRow from './IndexRow';
//
export default class Page extends React.Component {
  constructor(props){
    super(props)
    this.state = {data: '', items_org: ''}
  }  
  async componentDidMount(){
    try{
      var config = LibTask.get_const()
      this.db = new Dexie( config.DB_NAME );
      this.db.version(config.DB_VERSION).stores( config.DB_STORE );  
      var items = await this.db.tasks.toArray()
      this.items_org = items
      items = LibDexie.get_reverse_items(items)
      this.setState({ data: items })
//  console.log( items )
    } catch (err) {
      alert(err)
      console.log(err);
    }     
  }
  tabRow(){
    if(this.state.data instanceof Array){
console.log(this.state.data )
      return this.state.data.map((item, index) => {
        return (<IndexRow key={index}
                id={item.id} title={item.title} />       
        )
      })      
    }
  }
  render() {
    return (
    <Layout>
      <div className="container">
        <h3>TaskCardFlex</h3>
        <hr className="mt-2 mb-2" />
        {this.tabRow()}
      </div>
    </Layout>
    )
  }
}
