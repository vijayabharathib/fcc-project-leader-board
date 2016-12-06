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
      drawBoard(JSON.parse(e.target.responseText));
    };
    xhr.open('GET',url,true);
    xhr.send();
  }

  function drawBoard(leaders){
    console.log(leaders);
    for(var i=0;i<leaders.length;i++){
      var leader=leaders[i];
      ReactDOM.render(React.createElement(Leader,{
        username: leader.username,
        img: leader.img,
        recent: leader.recent,
        alltime: leader.alltime
      }),document.querySelector("#results"));
    }
  }

  var Leader = React.createClass({
    render: function(){
      var leaderElement=React.createElement
      return React.createElement('li',{class: 'o-camper'},
        React.createElement('img',{src: this.props.img, class: 'c-camper__image'}),
        React.createElement('span',{class: "c-camper__name"},this.props.username),
        React.createElement('span',{class: "c-camper__score--recent"},this.props.recent),
        React.createElement('span',{class: "c-camper__score--alltime"},this.props.alltime)
      );
    }
  });

  var Board = React.createClass({
    render: function(){
      var temps=[{username: "u1"},{username: "u2"}];
      var leaderList= temps.map(function(leader){
        return React.createElement(Leader,{
          username: leader.username,
          img: "leader.img",
          recent: "leader.recent",
          alltime: "leader.alltime"
        });
      });
      return React.createElement('ul',null,leaderList);
    }
  });
  ReactDOM.render(React.createElement(Board,null),document.querySelector("#results"));

});
