function animate(obj, target, callback){
    // 清除以前的定时器
    clearInterval(obj.time);
    obj.timer = setInterval(function(){
        // 步长值写在定时器里，改为整数
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            // 停止定时器，停止动画
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}