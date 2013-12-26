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

var Main = React.createClass({
  mixins:Require('kse-mixins'),
  getInitialState: function() {
    return {query: "sutra text", db:"sample",result:[]};   //default values
  },
  render: function() { //top level layout
    return ( 
    	<div> 
        <queryinput query={this.state.query} onQueryChange={this.queryChange}/>
        <resultlist result={this.state.result}/>
      </div>
    ); 
  },
  queryChange:function(query) {
    this.setState({"state":query});
    this.$yase("search",{db:this.state.db,query:query,output:["text"]})
        .done(function(data){
        this.setState({"result":data.result});  
    })
  },
  componentDidMount:function() {
    this.queryChange(this.state.query);
  }
}); 
module.exports=Main;