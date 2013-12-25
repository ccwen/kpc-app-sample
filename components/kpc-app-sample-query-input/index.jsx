/** @jsx React.DOM */
var QueryInput = React.createClass({
  propTypes: {
    //list of PropTypes  http://facebook.github.io/react/docs/reusable-components.html
    onQueryChange: React.PropTypes.func.isRequired
  },
  onChange:function(e) {
    if (this.timer) clearTimeout(this.timer);

    var handleInput=this.handleInput.bind(this);
    //if no input after 0.4 second, run the callback
    this.timer=setTimeout(handleInput,400); 
  },
  handleInput:function() {
    var newquery=this.refs.inputquery.getDOMNode().value;
    this.props.onQueryChange(newquery);
  },
  render: function() {
    return ( // the input box
      <div>
        <input ref="inputquery" onChange={this.onChange} defaultValue={this.props.query||""}></input>
      </div>
    );
  }
});
module.exports=QueryInput;