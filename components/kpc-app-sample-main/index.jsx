/** @jsx React.DOM */
// the first line need double stars for jsx directive

//Require("a") == require("../a")
var queryinput=Require('query-input');   // publish query.change when input is changed
var resultlist=Require('result-list');   // render search result
var searchworker=Require('search-worker'); // invoke search engine, invisible component

var Main = React.createClass({
  getInitialState: function() {
    return {query: "this", db:"sample",result:[]};   //default values
  },
  render: function() { //top level layout
    return ( 
    	<div> 
        <queryinput query={this.state.query} onQueryChange={this.queryChange}/>
        <searchworker db={this.state.db} query={this.state.query} onResultReady={this.resultReady}/>
        <resultlist result={this.state.result}/>
      </div>
    ); 
  },
  queryChange:function(query) {
      this.setState({"query":query}); // searchworker will do it's work
  },
  resultReady:function(res) {
      // receive from yase , res.result is an array
      // other information in res
      this.setState({"result":res.result});  
  }
}); 
module.exports=Main;