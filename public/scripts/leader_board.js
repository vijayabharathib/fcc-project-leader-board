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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsZWFkZXJfYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gICogYW5vbnltb3VzIGZ1bmN0aW9uXG4gICogd2l0aCBtb2R1bGUgcmV2ZWFsIHBhdHRlcm5cbiAgKiBvbmx5IHB1YmxpYyBtZXRob2Qgd291bGQgYmVcbiAgKiBnZXRMZWFkZXJEZXRhaWxzIHRoYXQgdGFrZXMgVVJMIGFzIGlucHV0XG4gICovXG52YXIgTGVhZGVyQm9hcmQ9KGZ1bmN0aW9uKCl7XG5cbiAgZnVuY3Rpb24gZ2V0TGVhZGVyRGV0YWlscyh1cmwpe1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub25sb2FkPWZ1bmN0aW9uKGUpe1xuICAgICAgX3JlbmRlckJvYXJkKEpTT04ucGFyc2UoZS50YXJnZXQucmVzcG9uc2VUZXh0KSk7XG4gICAgfTtcbiAgICB4aHIub3BlbignR0VUJyx1cmwsdHJ1ZSk7XG4gICAgeGhyLnNlbmQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJCb2FyZChsZWFkZXJzKXtcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChCb2FyZCx7bGVhZGVyczogbGVhZGVyc30pLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c1wiKSk7XG4gIH1cblxuICB2YXIgTGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBsZWFkZXJFbGVtZW50PVJlYWN0LmNyZWF0ZUVsZW1lbnRcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScse2NsYXNzTmFtZTogJ28tY2FtcGVyJ30sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycse3NyYzogdGhpcy5wcm9wcy5pbWcsIGNsYXNzTmFtZTogJ2MtY2FtcGVyX19pbWFnZSd9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jyx7Y2xhc3NOYW1lOiBcImMtY2FtcGVyX19uYW1lXCJ9LHRoaXMucHJvcHMudXNlcm5hbWUpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLHtjbGFzc05hbWU6IFwiYy1jYW1wZXJfX3Njb3JlLS1yZWNlbnRcIn0sdGhpcy5wcm9wcy5yZWNlbnQpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLHtjbGFzc05hbWU6IFwiYy1jYW1wZXJfX3Njb3JlLS1hbGx0aW1lXCJ9LHRoaXMucHJvcHMuYWxsdGltZSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGxlYWRlcnM9dGhpcy5wcm9wcy5sZWFkZXJzLnNsaWNlKDAsMTApO1xuICAgICAgdmFyIGxlYWRlckxpc3Q9IGxlYWRlcnMubWFwKGZ1bmN0aW9uKGxlYWRlcil7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExlYWRlcix7XG4gICAgICAgICAgdXNlcm5hbWU6IGxlYWRlci51c2VybmFtZSxcbiAgICAgICAgICBpbWc6IGxlYWRlci5pbWcsXG4gICAgICAgICAgcmVjZW50OiBsZWFkZXIucmVjZW50LFxuICAgICAgICAgIGFsbHRpbWU6IGxlYWRlci5hbGx0aW1lXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgaGVhZGVyPVJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJyx7Y2xhc3NOYW1lOiAnby1jYW1wZXJfX2hlYWRlcid9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLHtjbGFzc05hbWU6ICdjLWNhbXBlcl9faGVhZGVyX191c2VyJ30sXCJDYW1wZXJcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2Rpdicse2NsYXNzTmFtZTogJ2MtY2FtcGVyX19oZWFkZXJfX2Jyb3duaWUnfSxcIkJyb3duaWVzXCIpXG4gICAgICAgICk7XG4gICAgICBsZWFkZXJMaXN0LnVuc2hpZnQoaGVhZGVyKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsbnVsbCxsZWFkZXJMaXN0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TGVhZGVyRGV0YWlsczogZ2V0TGVhZGVyRGV0YWlsc1xuICB9O1xufSkoKTtcbiJdLCJmaWxlIjoibGVhZGVyX2JvYXJkLmpzIn0=
