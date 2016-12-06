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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtdmMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gICogd2FpdCB1bnRpbCB0aGUgZG9jIGlzIHJlYWR5IHRvIG9iZXkgb3JkZXJzXG4gICovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oZSl7XG4gIHZhciB0aGlydHlEYXlMZWFkZXJzVVJMPVwiaHR0cHM6Ly9mY2N0b3AxMDAuaGVyb2t1YXBwLmNvbS9hcGkvZmNjdXNlcnMvdG9wL3JlY2VudFwiO1xuICB2YXIgYWxsVGltZUxlYWRlcnNVUkw9XCJodHRwczovL2ZjY3RvcDEwMC5oZXJva3VhcHAuY29tL2FwaS9mY2N1c2Vycy90b3AvYWxsdGltZVwiO1xuICB2YXIgZmlsdGVyTGFzdFRoaXJ0eURheXNMZWFkZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdFRoaXJ0eURheXNMZWFkZXJzXCIpO1xuXG4gIGZpbHRlckxhc3RUaGlydHlEYXlzTGVhZGVycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgIGdldExlYWRlckRldGFpbHModGhpcnR5RGF5TGVhZGVyc1VSTCk7XG4gIH0pO1xuICBcbiAgdmFyIGZpbHRlckFsbFRpbWVMZWFkZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsVGltZUxlYWRlcnNcIik7XG4gIGZpbHRlckFsbFRpbWVMZWFkZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgZ2V0TGVhZGVyRGV0YWlscyhhbGxUaW1lTGVhZGVyc1VSTCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldExlYWRlckRldGFpbHModXJsKXtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9ubG9hZD1mdW5jdGlvbihlKXtcbiAgICAgIHJlbmRlckJvYXJkKEpTT04ucGFyc2UoZS50YXJnZXQucmVzcG9uc2VUZXh0KSk7XG4gICAgfTtcbiAgICB4aHIub3BlbignR0VUJyx1cmwsdHJ1ZSk7XG4gICAgeGhyLnNlbmQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckJvYXJkKGxlYWRlcnMpe1xuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEJvYXJkLHtsZWFkZXJzOiBsZWFkZXJzfSksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN1bHRzXCIpKTtcbiAgfVxuXG4gIHZhciBMZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGxlYWRlckVsZW1lbnQ9UmVhY3QuY3JlYXRlRWxlbWVudFxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJyx7Y2xhc3NOYW1lOiAnby1jYW1wZXInfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJyx7c3JjOiB0aGlzLnByb3BzLmltZywgY2xhc3NOYW1lOiAnYy1jYW1wZXJfX2ltYWdlJ30pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJyx7Y2xhc3NOYW1lOiBcImMtY2FtcGVyX19uYW1lXCJ9LHRoaXMucHJvcHMudXNlcm5hbWUpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJyx7Y2xhc3NOYW1lOiBcImMtY2FtcGVyX19zY29yZS0tcmVjZW50XCJ9LHRoaXMucHJvcHMucmVjZW50KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3Bhbicse2NsYXNzTmFtZTogXCJjLWNhbXBlcl9fc2NvcmUtLWFsbHRpbWVcIn0sdGhpcy5wcm9wcy5hbGx0aW1lKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBCb2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGVtcHM9dGhpcy5wcm9wcy5sZWFkZXJzO1xuICAgICAgdmFyIGxlYWRlckxpc3Q9IHRlbXBzLm1hcChmdW5jdGlvbihsZWFkZXIpe1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMZWFkZXIse1xuICAgICAgICAgIHVzZXJuYW1lOiBsZWFkZXIudXNlcm5hbWUsXG4gICAgICAgICAgaW1nOiBsZWFkZXIuaW1nLFxuICAgICAgICAgIHJlY2VudDogbGVhZGVyLnJlY2VudCxcbiAgICAgICAgICBhbGx0aW1lOiBsZWFkZXIuYWxsdGltZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VsJyxudWxsLGxlYWRlckxpc3QpO1xuICAgIH1cbiAgfSk7XG5cbn0pO1xuIl0sImZpbGUiOiJtdmMuanMifQ==
