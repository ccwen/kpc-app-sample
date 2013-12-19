/**
 * @jsx React.DOM
 */
var React=require('../react');
var commentBox=require('../hello-world');
var c1=commentBox.c1;
var c2=commentBox.c2;
var Main = React.createClass({displayName: 'Main',
  render: function() {
    return ( 
    	React.DOM.div(null, 
      c1( {id:"12"}),
      c2( {id:"2"})
      )
    );
  }
});
 //qq
module.exports=Main;