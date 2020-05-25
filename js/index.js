window.addEventListener('load', function(){
    // 轮播图
    // 左右按钮
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 鼠标经过显示左右按钮
    focus.addEventListener('mouseenter', function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function(){
            arrow_r.click();
        }, 3000);
    });
    // 动态生成小圆点
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    
    for(var i = 0; i < ul.children.length; i++){
        var li = document.createElement('li');
        // 记录小圆点的索引号，通过自定义属性来做
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function(){
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        this.className = 'current';
        // 点击小圆点，移动图片
        var index = this.getAttribute('index');
        num = index;
        circle = index;
        animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    // 克隆第一张图(li)放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 点击按钮图片滚动
    var num = 0;
    var circle = 0;
    // flag 节流阀
    var flag = true;
    arrow_r.addEventListener('click', function(){
        if(flag){
            flag = false;
            if(num == ul.children.length - 1){
            ul.style.left = 0;
            num = 0;
            }
        }
        num++;
        animate(ul, -num * focusWidth, function(){
            // 打开节流阀
            flag = true;
        });
        circle++;
        circle = circle == ol.children.length ? 0 : circle;
        circleChange();
    })
    
    arrow_l.addEventListener('click', function(){
        if(flag){
            flag = false;
            if(num == ul.children.length - 1){
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + "px";
            
            }
        }     
        num--;
        animate(ul, -num * focusWidth, function(){
            flag = true;
        });
        circle--;
        circle = circke < 0 ? ol.children.length - 1 : circle;
        circleChange();
    })


    // 精灵图使用
    var lifeservice = document.querySelector(".lifeservice");
    var lis = lifeservice.querySelectorAll("li");
    
    for( var i = 0; i < lis.length; i++){
        var index = i * 82;
        
        lis[i].querySelector("i").style.backgroundPosition = '0 -' + index + 'px';
    }

    function circleChange(){
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className = "";
        }
        ol.children[circle].className = 'current';
    }

    // 自动播放
    var timer = setInterval(function(){
        arrow_r.click();
    }, 3000);
})



