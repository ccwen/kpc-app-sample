/** @jsx React.DOM */
var queryinput=Require('query-input');
var resultlist=Require('result-list');
var searchworker=Require('search-worker');

var Main = React.createClass({
  getInitialState: function() {
    return {query: "this", db:"sample",result:[]};   
  },
  render: function() {
    return ( 
    	<div> 
        <queryinput query={this.state.query}/>
        <searchworker db={this.state.db} query={this.state.query}/>
        <resultlist result={this.state.result}/>
      </div>
    ); 
  },
  queryChange:function(data) {
      this.setState({query:data});
  },
  resultready:function(data) {
      this.setState({result:data.result});
  },
  componentWillMount:function() {
    mediator.subscribe("query.change",this.queryChange.bind(this));
    mediator.subscribe("result.ready",this.resultready.bind(this));
  }
});
module.exports=Main;