/**
 * @jsx React.DOM
 */

var commentBox=Require('hello-world');
var mixins=Require('react-mixins');

var c1=commentBox.c1;
var c2=commentBox.c2;
var InputBox=commentBox.InputBox;

var Main = React.createClass({
	mixins: mixins,
  getInitialState: function() {
    return {count: 1}; 
  },
  render: function() {
    return ( 
    	<div>
      <c1 data={this.state.count}/>
      <c2 data={this.state.count}/>
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

    this.$yase("getText",{db:'sample',slot:2}).done(function(data){
      this.setState({"text2":data});
    })
  }  
});
 //qq
module.exports=Main;