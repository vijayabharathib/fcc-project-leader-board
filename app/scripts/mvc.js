/**
  * wait until the doc is ready to obey orders
  */

document.addEventListener("DOMContentLoaded",function(e){
  var thirtyDayLeadersURL="https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  var allTimeLeadersURL="https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
  var filterLastThirtyDaysLeaders=document.querySelector("#lastThirtyDaysLeaders");

  filterLastThirtyDaysLeaders.addEventListener("click",function(){
    getLeaderDetails(thirtyDayLeadersURL);
  });
  
  var filterAllTimeLeaders=document.querySelector("#allTimeLeaders");
  filterAllTimeLeaders.addEventListener("click",function(){
    getLeaderDetails(allTimeLeadersURL);
  });

  function getLeaderDetails(url){
    var xhr = new XMLHttpRequest();
    xhr.onload=function(e){
      renderBoard(JSON.parse(e.target.responseText));
    };
    xhr.open('GET',url,true);
    xhr.send();
  }

  function renderBoard(leaders){
    ReactDOM.render(React.createElement(Board,{leaders: leaders}),document.querySelector("#results"));
  }

  var Leader = React.createClass({
    render: function(){
      var leaderElement=React.createElement
      return React.createElement('li',{className: 'o-camper'},
        React.createElement('img',{src: this.props.img, className: 'c-camper__image'}),
        React.createElement('span',{className: "c-camper__name"},this.props.username),
        React.createElement('span',{className: "c-camper__score--recent"},this.props.recent),
        React.createElement('span',{className: "c-camper__score--alltime"},this.props.alltime)
      );
    }
  });

  var Board = React.createClass({
    render: function(){
      var temps=this.props.leaders;
      var leaderList= temps.map(function(leader){
        return React.createElement(Leader,{
          username: leader.username,
          img: leader.img,
          recent: leader.recent,
          alltime: leader.alltime
        });
      });
      return React.createElement('ul',null,leaderList);
    }
  });

});
