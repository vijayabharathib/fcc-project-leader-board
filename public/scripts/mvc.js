/**
  * wait until the doc is ready to obey orders
  */

document.addEventListener("DOMContentLoaded",function(e){
  var thirtyDayLeadersURL="https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  var allTimeLeadersURL="https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
  var filterLastThirtyDaysLeaders=document.querySelector(".lastThirtyDaysLeaders");
  var rootBoard=document.querySelector(".results");
  filterLastThirtyDaysLeaders.addEventListener("click",function(){
    LeaderBoard.getLeaderDetails(thirtyDayLeadersURL,rootBoard);
  });

  var filterAllTimeLeaders=document.querySelector(".allTimeLeaders");
  filterAllTimeLeaders.addEventListener("click",function(){
    LeaderBoard.getLeaderDetails(allTimeLeadersURL,rootBoard);
  });

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtdmMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gICogd2FpdCB1bnRpbCB0aGUgZG9jIGlzIHJlYWR5IHRvIG9iZXkgb3JkZXJzXG4gICovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oZSl7XG4gIHZhciB0aGlydHlEYXlMZWFkZXJzVVJMPVwiaHR0cHM6Ly9mY2N0b3AxMDAuaGVyb2t1YXBwLmNvbS9hcGkvZmNjdXNlcnMvdG9wL3JlY2VudFwiO1xuICB2YXIgYWxsVGltZUxlYWRlcnNVUkw9XCJodHRwczovL2ZjY3RvcDEwMC5oZXJva3VhcHAuY29tL2FwaS9mY2N1c2Vycy90b3AvYWxsdGltZVwiO1xuICB2YXIgZmlsdGVyTGFzdFRoaXJ0eURheXNMZWFkZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFzdFRoaXJ0eURheXNMZWFkZXJzXCIpO1xuICB2YXIgcm9vdEJvYXJkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c1wiKTtcbiAgZmlsdGVyTGFzdFRoaXJ0eURheXNMZWFkZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgTGVhZGVyQm9hcmQuZ2V0TGVhZGVyRGV0YWlscyh0aGlydHlEYXlMZWFkZXJzVVJMLHJvb3RCb2FyZCk7XG4gIH0pO1xuXG4gIHZhciBmaWx0ZXJBbGxUaW1lTGVhZGVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbFRpbWVMZWFkZXJzXCIpO1xuICBmaWx0ZXJBbGxUaW1lTGVhZGVycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgIExlYWRlckJvYXJkLmdldExlYWRlckRldGFpbHMoYWxsVGltZUxlYWRlcnNVUkwscm9vdEJvYXJkKTtcbiAgfSk7XG5cbn0pO1xuIl0sImZpbGUiOiJtdmMuanMifQ==
