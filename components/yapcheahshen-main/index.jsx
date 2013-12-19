/**
 * @jsx React.DOM
 */
var React=require('../react');
var commentBox=require('../hello-world');
var c1=commentBox.c1;
var c2=commentBox.c2;
var Main = React.createClass({
  render: function() {
    return ( 
    	<div>
      <c1 id="12"/>
      <c2 id="2"/>
      </div>
    );
  }
});
 //qq
module.exports=Main;