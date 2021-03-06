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
