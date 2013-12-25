/** @jsx React.DOM */
// the first line need double stars for jsx directive
/*
reference:
http://facebook.github.io/react/docs/tutorial.html
http://facebook.github.io/react/blog/2013/11/05/thinking-in-react.html
http://blog.whn.se/post/69621609605/writing-good-react-components
*/

var queryinput=Require('query-input');   // publish query.change when input is changed
var resultlist=Require('result-list');   // render search result
var searchworker=Require('search-worker'); // invoke search engine, invisible component

var Main = React.createClass({
  getInitialState: function() {
    return {query: "sutra text", db:"sample",result:[]};   //default values
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
      this.setState({"result":res.result});  
  }
}); 
module.exports=Main;