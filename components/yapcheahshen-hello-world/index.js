/**
 * @jsx React.DOM
 */
var React=require('../react');
var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.DOM.div( {className:"commentBox"}, 
        " Hello, world! I am a CommentBox, great! ", this.props.id
      )
    );
  }
});
var CommentBox2 = React.createClass({displayName: 'CommentBox2',
  render: function() {
    return (
      React.DOM.div( {className:"commentBox2"}, 
        " Hello, world! I am another CommentBox. ", this.props.id
      )
    );
  }
});
 //qq
module.exports={c1:CommentBox, c2:CommentBox2};