/**
  * anonymous function
  * with module reveal pattern
  * only public method would be
  * getLeaderDetails that takes URL as input
  */
var LeaderBoard=(function(){

  /**
    * request for leader details on the url supplied
    * on successful result, render the board
    */
  function getLeaderDetails(url,root){
    var xhr = new XMLHttpRequest();
    xhr.onload=function(e){
      _renderBoard(JSON.parse(e.target.responseText),root);
    };
    xhr.open('GET',url,true);
    xhr.send();
  }

  function _renderBoard(leaders,root){
    //render the virtual DOM based on board
    ReactDOM.render(React.createElement(Board,{leaders: leaders}),root);
  }

  /**
    * leader component for the board
    * props are supplied by the calling Board class
    */
  var Leader = React.createClass({
    render: function(){
      var leaderElement=React.createElement
      return React.createElement('li',{className: 'o-camper'},
        React.createElement('img',{src: this.props.img, className: 'c-camper__image'}),
        React.createElement('div',{className: "c-camper__name"},this.props.username),
        React.createElement('div',{className: "c-camper__score--recent"},this.props.recent),
        React.createElement('div',{className: "c-camper__score--alltime"},this.props.alltime)
      );
    }
  });

  /**
    * root level board element
    * all the leaders from the ajax request are added as child components
    */
  var Board = React.createClass({
    render: function(){
      var leaders=this.props.leaders.slice(0,10);
      var leaderList= leaders.map(function(leader){
        return React.createElement(Leader,{
          username: leader.username,
          img: leader.img,
          recent: leader.recent,
          alltime: leader.alltime
        });
      });
      var header=React.createElement('li',{className: 'o-camper__header'},
        React.createElement('div',{className: 'c-camper__header__user'},"Camper"),
        React.createElement('div',{className: 'c-camper__header__brownie'},"Brownies")
        );
      //insert a header for the component,
      // this should be the first child of the board
      leaderList.unshift(header);
      return React.createElement('ul',null,leaderList);
    }
  });

  return {
    //module reveal pattern:
    //reveal only getLeaderDetails as public access 
    getLeaderDetails: getLeaderDetails
  };
})();
