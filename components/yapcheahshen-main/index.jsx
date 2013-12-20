/**
 * @jsx React.DOM
 */
//var React=require('../react');
var commentBox=require('../hello-world');
var c1=commentBox.c1;
var c2=commentBox.c2;
var InputBox=commentBox.InputBox;

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};

var Main = React.createClass({
	mixins: [SetIntervalMixin],
  getInitialState: function() {
    return {count: 1};
  },
  render: function() {
    return ( 
    	<div>
      <c1 data={this.state.count}/>
      <c2 data={this.state.count}/>
      <InputBox/>
      </div>
    );
  },
  changestate:function() {
  	this.setState({count:this.state.count+1});	
  },
  componentDidMount:function() {
  	this.setInterval(this.changestate,500);
  }
});
 //qq
module.exports=Main;