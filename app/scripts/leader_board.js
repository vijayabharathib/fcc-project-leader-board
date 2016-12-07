/**
  * anonymous function
  * with module reveal pattern
  * only public method would be
  * getLeaderDetails that takes URL as input
  */
var LeaderBoard=(function(){

  function getLeaderDetails(url){
    var xhr = new XMLHttpRequest();
    xhr.onload=function(e){
      _renderBoard(JSON.parse(e.target.responseText));
    };
    xhr.open('GET',url,true);
    xhr.send();
  }

  function _renderBoard(leaders){
    ReactDOM.render(React.createElement(Board,{leaders: leaders}),document.querySelector(".results"));
  }

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
      leaderList.unshift(header);
      return React.createElement('ul',null,leaderList);
    }
  });

  return {
    getLeaderDetails: getLeaderDetails
  };
})();
