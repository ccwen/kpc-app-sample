/**
 * @jsx React.DOM
 */

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },  
  render: function() {
    return (
      <div className="commentBox">
        Hello, sam! I am a CommentBox, great! {this.props.data}
      </div>
    );
  }
});
var CommentBox2 = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },  
  render: function() {
    return (
      <div className="commentBox2">
        Hello, world! I am another CommentBox. {this.props.data}
      </div>
    );
  }
});
var InputBox = React.createClass({
  getInitialState: function() {
    return {data: 1};
  },  
  render: function() {
    return (
    <form className="InputBox">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
});


 //qq
module.exports={c1:CommentBox, c2:CommentBox2, InputBox: InputBox};