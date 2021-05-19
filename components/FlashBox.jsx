import Link from 'next/link';
import Head from 'next/head';
import React from 'react'
//
export default function Page(props){
  var messages_success = ""
  if( typeof props.messages_success != 'undefined'){
    messages_success = props.messages_success
  }
  var messages_error = ""
  if( typeof props.messages_error != 'undefined'){
    messages_error = props.messages_error
  }
  return (
  <div>
    { messages_success ? 
    <div className="p-3 mb-2 bg-success text-white"
     role="alert">{messages_success}</div> 
    : <div /> 
    }
    { messages_error ? 
    <div className="p-3 mb-2 bg-danger text-white"
     role="alert">
    {messages_error}</div> 
    : <div /> }      
  </div>
  );

}
