/** @jsx React.DOM */
var Result=React.createClass({ //for each result item
  render:function() {
    var outhtml=this.props.id+")"+this.props.text;
    return  <div className="resultitem" dangerouslySetInnerHTML={{__html: outhtml}} />
  }
}) 
var Resultlist = React.createClass({
  propTypes: {
       result: React.PropTypes.array.isRequired
  },
  shouldComponentUpdate:function(nextProps, nextState) {
    //this is important , otherwise render will keep calling yase
    return nextProps.result!=this.props.result; 
  },
  render: function() {
    return (
      <div ref="resultlist">
      {
        this.props.result.map(function(R){  //create Result for each result item
          return <Result id={R.id} text={R.text}></Result>
        })
      }
      </div>
    );
  }
});
module.exports=Resultlist;