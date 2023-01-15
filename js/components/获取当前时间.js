//获取当前时间
var t=null;
t=setTimeout(time,1000)
function time(){
    clearTimeout(t)
    dt=new Date();
    var y=dt.getFullYear();
    var mt=addZero(dt.getMonth()+1);
    var day=addZero(dt.getDate());
    var h=addZero(dt.getHours());
    var m=addZero(dt.getMinutes());
    var s=addZero(dt.getSeconds());
    document.querySelector('.showTime').innerHTML='当前时间:'+y+'年'+mt+'月'+day+'日'+' '+h+':'+m+':'+s+'';
    t=setTimeout(time,1000)
};
function addZero(n){
    return n>9? n:'0'+n
}