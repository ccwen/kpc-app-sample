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
  mixins:[React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {value: 'Hello!'};
  },  
  render: function() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input valueLink={this.linkState('value')} />
          <button>add</button>
          {this.state.value}
        </form>
    );
  }
});


 //qq
module.exports={c1:CommentBox, c2:CommentBox2, InputBox: InputBox};