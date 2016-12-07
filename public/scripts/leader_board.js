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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsZWFkZXJfYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gICogYW5vbnltb3VzIGZ1bmN0aW9uXG4gICogd2l0aCBtb2R1bGUgcmV2ZWFsIHBhdHRlcm5cbiAgKiBvbmx5IHB1YmxpYyBtZXRob2Qgd291bGQgYmVcbiAgKiBnZXRMZWFkZXJEZXRhaWxzIHRoYXQgdGFrZXMgVVJMIGFzIGlucHV0XG4gICovXG52YXIgTGVhZGVyQm9hcmQ9KGZ1bmN0aW9uKCl7XG5cbiAgLyoqXG4gICAgKiByZXF1ZXN0IGZvciBsZWFkZXIgZGV0YWlscyBvbiB0aGUgdXJsIHN1cHBsaWVkXG4gICAgKiBvbiBzdWNjZXNzZnVsIHJlc3VsdCwgcmVuZGVyIHRoZSBib2FyZFxuICAgICovXG4gIGZ1bmN0aW9uIGdldExlYWRlckRldGFpbHModXJsLHJvb3Qpe1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub25sb2FkPWZ1bmN0aW9uKGUpe1xuICAgICAgX3JlbmRlckJvYXJkKEpTT04ucGFyc2UoZS50YXJnZXQucmVzcG9uc2VUZXh0KSxyb290KTtcbiAgICB9O1xuICAgIHhoci5vcGVuKCdHRVQnLHVybCx0cnVlKTtcbiAgICB4aHIuc2VuZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbmRlckJvYXJkKGxlYWRlcnMscm9vdCl7XG4gICAgLy9yZW5kZXIgdGhlIHZpcnR1YWwgRE9NIGJhc2VkIG9uIGJvYXJkXG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9hcmQse2xlYWRlcnM6IGxlYWRlcnN9KSxyb290KTtcbiAgfVxuXG4gIC8qKlxuICAgICogbGVhZGVyIGNvbXBvbmVudCBmb3IgdGhlIGJvYXJkXG4gICAgKiBwcm9wcyBhcmUgc3VwcGxpZWQgYnkgdGhlIGNhbGxpbmcgQm9hcmQgY2xhc3NcbiAgICAqL1xuICB2YXIgTGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBsZWFkZXJFbGVtZW50PVJlYWN0LmNyZWF0ZUVsZW1lbnRcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScse2NsYXNzTmFtZTogJ28tY2FtcGVyJ30sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycse3NyYzogdGhpcy5wcm9wcy5pbWcsIGNsYXNzTmFtZTogJ2MtY2FtcGVyX19pbWFnZSd9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jyx7Y2xhc3NOYW1lOiBcImMtY2FtcGVyX19uYW1lXCJ9LHRoaXMucHJvcHMudXNlcm5hbWUpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLHtjbGFzc05hbWU6IFwiYy1jYW1wZXJfX3Njb3JlLS1yZWNlbnRcIn0sdGhpcy5wcm9wcy5yZWNlbnQpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLHtjbGFzc05hbWU6IFwiYy1jYW1wZXJfX3Njb3JlLS1hbGx0aW1lXCJ9LHRoaXMucHJvcHMuYWxsdGltZSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICAqIHJvb3QgbGV2ZWwgYm9hcmQgZWxlbWVudFxuICAgICogYWxsIHRoZSBsZWFkZXJzIGZyb20gdGhlIGFqYXggcmVxdWVzdCBhcmUgYWRkZWQgYXMgY2hpbGQgY29tcG9uZW50c1xuICAgICovXG4gIHZhciBCb2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgbGVhZGVycz10aGlzLnByb3BzLmxlYWRlcnMuc2xpY2UoMCwxMCk7XG4gICAgICB2YXIgbGVhZGVyTGlzdD0gbGVhZGVycy5tYXAoZnVuY3Rpb24obGVhZGVyKXtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGVhZGVyLHtcbiAgICAgICAgICB1c2VybmFtZTogbGVhZGVyLnVzZXJuYW1lLFxuICAgICAgICAgIGltZzogbGVhZGVyLmltZyxcbiAgICAgICAgICByZWNlbnQ6IGxlYWRlci5yZWNlbnQsXG4gICAgICAgICAgYWxsdGltZTogbGVhZGVyLmFsbHRpbWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBoZWFkZXI9UmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLHtjbGFzc05hbWU6ICdvLWNhbXBlcl9faGVhZGVyJ30sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2Rpdicse2NsYXNzTmFtZTogJ2MtY2FtcGVyX19oZWFkZXJfX3VzZXInfSxcIkNhbXBlclwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jyx7Y2xhc3NOYW1lOiAnYy1jYW1wZXJfX2hlYWRlcl9fYnJvd25pZSd9LFwiQnJvd25pZXNcIilcbiAgICAgICAgKTtcbiAgICAgIC8vaW5zZXJ0IGEgaGVhZGVyIGZvciB0aGUgY29tcG9uZW50LFxuICAgICAgLy8gdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBib2FyZFxuICAgICAgbGVhZGVyTGlzdC51bnNoaWZ0KGhlYWRlcik7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndWwnLG51bGwsbGVhZGVyTGlzdCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIC8vbW9kdWxlIHJldmVhbCBwYXR0ZXJuOlxuICAgIC8vcmV2ZWFsIG9ubHkgZ2V0TGVhZGVyRGV0YWlscyBhcyBwdWJsaWMgYWNjZXNzIFxuICAgIGdldExlYWRlckRldGFpbHM6IGdldExlYWRlckRldGFpbHNcbiAgfTtcbn0pKCk7XG4iXSwiZmlsZSI6ImxlYWRlcl9ib2FyZC5qcyJ9
