var wakeuptime=7;
var noon=12;
var lunchtime=12;
var naptime=lunchtime+2;
var evening=16;
let digitalClock = () => {
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let amorpm=hours>=12?'pm':'am';
    if(hours>12){
        hours=hours-12;
       }
    else if(hours===0){hours=12;}
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("amorpm").innerHTML=amorpm;
    setTimeout(digitalClock,500);
}
digitalClock();
var updateClock=function(){
var time=new Date().getHours();
var messagetext;
var image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
var timeEventJS = document.getElementById("timeEvent");
var lolcatImageJS=document.getElementById('lolcatImage');
if(time==wakeuptime)
 {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";   
    messagetext="Wake Up!";
 }
else if(time==lunchtime)
{
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg"   
    messagetext="Let's have some lunch!";
 }
else if(time==naptime)
{
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg"   
messagetext="Sleep Time!";
}
else if(time<noon){
image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
messagetext="Good Morning!"
}
else if(time>=evening){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messagetext="Good Evening! Dance Time!";
}
else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
 messagetext="Good Afternoon!"
 }
 console.log(messagetext);
 timeEventJS.innerText = messagetext;
 lolcatImageJS.src=image;
 lolcatImageJS.height= "520";
 lolcatImageJS.width= "500.3";
 digitalClock();
};
updateClock();
setInterval(updateClock,1000);