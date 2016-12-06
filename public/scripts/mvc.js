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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtdmMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gICogd2FpdCB1bnRpbCB0aGUgZG9jIGlzIHJlYWR5IHRvIG9iZXkgb3JkZXJzXG4gICovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oZSl7XG4gIHZhciB0aGlydHlEYXlMZWFkZXJzVVJMPVwiaHR0cHM6Ly9mY2N0b3AxMDAuaGVyb2t1YXBwLmNvbS9hcGkvZmNjdXNlcnMvdG9wL3JlY2VudFwiO1xuICB2YXIgYWxsVGltZUxlYWRlcnNVUkw9XCJodHRwczovL2ZjY3RvcDEwMC5oZXJva3VhcHAuY29tL2FwaS9mY2N1c2Vycy90b3AvYWxsdGltZVwiO1xuICB2YXIgZmlsdGVyTGFzdFRoaXJ0eURheXNMZWFkZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdFRoaXJ0eURheXNMZWFkZXJzXCIpO1xuICBmaWx0ZXJMYXN0VGhpcnR5RGF5c0xlYWRlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICBnZXRMZWFkZXJEZXRhaWxzKHRoaXJ0eURheUxlYWRlcnNVUkwpO1xuICB9KTtcbiAgdmFyIGZpbHRlckFsbFRpbWVMZWFkZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsVGltZUxlYWRlcnNcIik7XG4gIGZpbHRlckFsbFRpbWVMZWFkZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgZ2V0TGVhZGVyRGV0YWlscyhhbGxUaW1lTGVhZGVyc1VSTCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldExlYWRlckRldGFpbHModXJsKXtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9ubG9hZD1mdW5jdGlvbihlKXtcbiAgICAgIGRyYXdCb2FyZChKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3BvbnNlVGV4dCkpO1xuICAgIH07XG4gICAgeGhyLm9wZW4oJ0dFVCcsdXJsLHRydWUpO1xuICAgIHhoci5zZW5kKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Qm9hcmQobGVhZGVycyl7XG4gICAgY29uc29sZS5sb2cobGVhZGVycyk7XG4gICAgZm9yKHZhciBpPTA7aTxsZWFkZXJzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIGxlYWRlcj1sZWFkZXJzW2ldO1xuICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGVhZGVyLHtcbiAgICAgICAgdXNlcm5hbWU6IGxlYWRlci51c2VybmFtZSxcbiAgICAgICAgaW1nOiBsZWFkZXIuaW1nLFxuICAgICAgICByZWNlbnQ6IGxlYWRlci5yZWNlbnQsXG4gICAgICAgIGFsbHRpbWU6IGxlYWRlci5hbGx0aW1lXG4gICAgICB9KSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdHNcIikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBMZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGxlYWRlckVsZW1lbnQ9UmVhY3QuY3JlYXRlRWxlbWVudFxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJyx7Y2xhc3M6ICdvLWNhbXBlcid9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbWcnLHtzcmM6IHRoaXMucHJvcHMuaW1nLCBjbGFzczogJ2MtY2FtcGVyX19pbWFnZSd9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3Bhbicse2NsYXNzOiBcImMtY2FtcGVyX19uYW1lXCJ9LHRoaXMucHJvcHMudXNlcm5hbWUpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJyx7Y2xhc3M6IFwiYy1jYW1wZXJfX3Njb3JlLS1yZWNlbnRcIn0sdGhpcy5wcm9wcy5yZWNlbnQpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJyx7Y2xhc3M6IFwiYy1jYW1wZXJfX3Njb3JlLS1hbGx0aW1lXCJ9LHRoaXMucHJvcHMuYWxsdGltZSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRlbXBzPVt7dXNlcm5hbWU6IFwidTFcIn0se3VzZXJuYW1lOiBcInUyXCJ9XTtcbiAgICAgIHZhciBsZWFkZXJMaXN0PSB0ZW1wcy5tYXAoZnVuY3Rpb24obGVhZGVyKXtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGVhZGVyLHtcbiAgICAgICAgICB1c2VybmFtZTogbGVhZGVyLnVzZXJuYW1lLFxuICAgICAgICAgIGltZzogXCJsZWFkZXIuaW1nXCIsXG4gICAgICAgICAgcmVjZW50OiBcImxlYWRlci5yZWNlbnRcIixcbiAgICAgICAgICBhbGx0aW1lOiBcImxlYWRlci5hbGx0aW1lXCJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsbnVsbCxsZWFkZXJMaXN0KTtcbiAgICB9XG4gIH0pO1xuICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChCb2FyZCxudWxsKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdHNcIikpO1xuXG59KTtcbiJdLCJmaWxlIjoibXZjLmpzIn0=
