

$('p').on('click',function(){
    var a=Math.round(Math.random()*255);
    var b=Math.round(Math.random()*255);
    var c=Math.round(Math.random()*255);
    $(this).css('background-color','rgb('+a+','+b+','+c+')');
    
});