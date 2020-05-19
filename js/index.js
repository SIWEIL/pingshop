window.onload = function(){
    var lifeservice = document.querySelector(".lifeservice");
    var lis = lifeservice.querySelectorAll("li");
    
    for( var i = 0; i < lis.length; i++){
        var index = i * 82;
        console.log(index);
        lis[i].querySelector("i").style.backgroundPosition = '0 -' + index + 'px';
    }
}
