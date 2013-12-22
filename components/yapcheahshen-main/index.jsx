/**
 * @jsx React.DOM
 */

var commentBox=Require('hello-world');
var jquery=Require('jquery');
var bootstrap=Require('bootstrap');
var kse=Require('kse'); 

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
var YaseMixin = {
  componentWillMount:function() {
    this.$yase=function() {
      return kse.$yase.apply(this,arguments);
    }
  }
}
var Main = React.createClass({
	mixins: [SetIntervalMixin,YaseMixin],
  getInitialState: function() {
    return {count: 1};
  },
  render: function() {
    return ( 
    	<div>
      <c1 data={this.state.count}/>
      <c2 data={this.state.count}/>
      {this.state.text}
      {this.state.text2}
      <InputBox/>
      </div>
    ); 
  },
  changestate:function() {
  	this.setState({count:this.state.count+1});	
  },
  componentDidMount:function() {
  	this.setInterval(this.changestate,500);
    that=this;
    kse.yase.getText({db:'sample',slot:1},function(err,data){
      that.setState({"text":data});
    });
    this.$yase("getText",{db:'sample',slot:2}).done(function(data){
      this.setState({"text2":data});
    })
  }  
});
 //qq
module.exports=Main;