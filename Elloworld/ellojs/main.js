j(document).ready(function () {


    /*info*/
    j('#topRightImg').click(function () {
        j('.info').addClass('target');
        j('.infotext1').addClass('target1');
        j('.infotext2').addClass('target2');
        j('#topRightImg2').show()
        j('#topRightImg').hide()

    })

    j('#topRightImg2').click(function () {
        j('.info').removeClass('target');
        j('#topRightImg').show()
        j('#topRightImg2').hide()

    })

    /*content*/
    j('body').height(j(document).height() + 'px');

    j('#web3d').css('width', '86%');
    j('#creative').css('width', '7%');
    j('#elloGame').css('width', '7%');
    j('.iframe1').show();
    j('.overframe3').show();
    j('.iframe3').hide();
    j('.overframe1').hide();
    j('#creative .center .centerPad').hide();
    j('#creative .center .phone').hide();
    j('#creative .center .book').hide();

    j('#creative .center .label').show();
    j('#elloGame .center .label').show();

    /*click webb3d*/
    j('#web3d').click(function (event) {
        j('.iframe1').show();
        j('.overframe3').show();
        j('.iframe3').hide();
        j('.overframe1').hide();
        j('#creative .center .centerPad').hide();
        j('#creative .center .phone').hide();
        j('#creative .center .book').hide();
        j(".back").hide();

        /*停止动画*/
        j('#web3d').stop(true, true);
        j('#creative').stop(true, true);
        j('#elloGame').stop(true, true);

        /*宽度改变*/
        j('#web3d').animate({width: '86%'});
        j('#creative').animate({width: '7%'});
        j('#elloGame').animate({width: '7%'});


        /*底部不显示*/
        j('#creative .bottom,#web3d .bottom,#elloGame .bottom').hide();

        /*缩小的区域显示label*/
        j('#web3d .center .label').hide();
        j('#creative .center .label').show();
        j('#elloGame .center .label').show();


        /*/!*click close*!/
         j('.close').click(function (event) {
         /!*阻止事件冒泡*!/
         stopBubble(event);

         j('.zkpad').hide();
         j('.phone').hide();
         j('.overframe1').show();
         j('.overframe3').show();
         j('.iframe1').show();
         j('.iframe3').show();
         j('#web3d').animate({width: '33.3333%'});
         j('#creative').animate({width: '33.3333%'});
         j('#elloGame').animate({width: '33.3333%'});
         j('.label').hide();
         j('.close').hide();

         })
         */
    })
    /*click creative*/
    j('#creative').click(function (event) {

        j('.phone').show();
        j('.iframe1').hide();
        j('.iframe3').hide();
        j('.iframe3').hide();
        j('.overframe1').hide();
        j('#creative .center .centerPad').show();
        j('#creative .center .phone').show();
        j('#creative .center .book').show();
        j(".back").show();
        j('#web3d').stop(true, true);
        j('#creative').stop(true, true);
        j('#elloGame').stop(true, true);

        j('#web3d').animate({width: '7%'});
        j('#creative').animate({width: '86%'});
        j('#elloGame').animate({width: '7%'});

        j('#creative .center .label').hide();
        j('#web3d .center .label').show();
        j('#elloGame .center .label').show();
        j('#creative .bottom').hide();
        j('#web3d .bottom').hide();
        j('#elloGame .bottom').hide();
        j('#web3d .close').hide();
        j('#creative .close').show();
        j('#elloGame .close').hide();


        /*j('.close').click(function (event) {
         stopBubble(event);
         j('.zkpad').hide();
         j('.phone').hide();

         j('.overframe1').show();
         j('.overframe3').show();
         j('.iframe1').show();
         j('.iframe3').show();

         j('#web3d').animate({width: '33.3333%'});
         j('#creative').animate({width: '33.3333%'});
         j('#elloGame').animate({width: '33.3333%'});

         j('.label').hide();
         j('.close').hide();
         j('.bottom').show();
         j('.centerPad').show();
         })*/


    })

    /*click ellogame*/
    j('#elloGame').click(function (event) {
        j('.overframe3').hide();
        j('.iframe3').show();
        j('.iframe1').hide();
        j('#creative .center .centerPad').hide();
        j('#creative .center .phone').hide();
        j('#creative .center .book').hide();
        j(".back").hide();

        j('#web3d').stop(true, true);
        j('#creative').stop(true, true);
        j('#elloGame').stop(true, true);


        j('#web3d').animate({width: '7%'});
        j('#creative').animate({width: '7%'});
        j('#elloGame').animate({width: '86%'});

        j('#elloGame .center .label').hide();
        j('#web3d .center .label').show();
        j('#creative .center .label').show();
        j('#elloGame .bottom').hide();
        j('#web3d .bottom').hide();
        j('#creative .bottom,.center .gallery').hide();
        j('#web3d .close').hide();
        j('#creative .close').hide();
        j('#elloGame .close').show();

        j('.close').click(function (event) {
            stopBubble(event);
            j('.zkpad').hide();
            j('.phone').hide();
            j('.overframe1').show();
            j('.overframe3').show();
            j('.iframe1').show();
            j('.iframe3').show();
            j('#web3d').animate({width: '33.3333%'});
            j('#creative').animate({width: '33.3333%'});
            j('#elloGame').animate({width: '33.3333%'});

            j('.label').hide();
            j('.close').hide();
            j('.bottom').show();
            j('.centerPad').show();

        })
    })

    /*click pad*/
    j('.centerPad').click(function (event) {
        event.preventDefault();
        j('.center').addClass('clickPad')
        j('.back').addClass('is-visible');

        j('.back').on('click', function () {
            j('.center').removeClass('clickPad');
            j('.back').removeClass('is-visible');
        });
    })


    /*click book*/
    j('.book').click(function (event) {
        event.preventDefault();
        j('.center').addClass('clickBook');
        j('.back').addClass('is-visible');
        j('.pen').addClass('fadeout')

        j('.back').on('click', function () {
            j('.center').removeClass('clickBook');
            j('.back').removeClass('is-visible');
            j('.pen').removeClass('fadeout')
        });
    })

    /*click phone*/
    j('.phone').click(function (event) {
        event.preventDefault();
        j('.center').addClass('clickPhone')
        j('.back').addClass('is-visible');

        j('.back').on('click', function () {
            j('.center').removeClass('clickPhone');
            j('.back').removeClass('is-visible');
        });
    })


    /*阻止事件冒泡*/
    function stopBubble(e) {
        //如果提供了事件对象，则这是一个非IE浏览器
        if (e && e.stopPropagation) {
            //因此它支持W3C的stopPropagation()方法
            e.stopPropagation();
        } else {
            //否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
        return false;
    }


    /*gallery*/
    var containerWidth = 200;

    var num = j('#list').children('li').length;
    j('#list').width(containerWidth * num);
    j('#list li').width(containerWidth);

    j('#list').css("left", -containerWidth);

    var container = document.getElementById("container");
    var list = document.getElementById("list");
    /* var button = document.getElementById("button").getElementsByTagName('span');*/
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 1;
    var animated = false;

    function showButton() {
        for (var i = 0; i < button.length; i++) {
            if (button[i].className == 'on') {
                button[i].className = '';
                break;
            }
        }
        button[index - 1].className = 'on';
    }


    function animate(offset) {
        animated = true;

        var newLeft = parseInt(list.style.left) + offset;
        var time = 300;//位移总时间
        var interval = 10;//位移间隔时间
        var speed = offset / (time / interval);//每次位移量

        function go() {
            if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);

            }
            else {
                animated = false;
                list.style.left = newLeft + 'px';
                if (newLeft > -containerWidth) {
                    list.style.left = -containerWidth * (num - 2) + 'px';
                }
                if (newLeft < -containerWidth * (num - 2)) {
                    list.style.left = -containerWidth + 'px';
                }

            }
        }

        go();


    }

    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 3000)
    }

    function stop() {
        clearInterval(timer);
    }

    next.onclick = function () {
        if (index == 2) {
            index = 1;
        }
        else {
            index += 1;
        }


        showButton();
        if (animated == false) {
            animate(-containerWidth);
        }
    }

    prev.onclick = function () {
        if (index == 1) {
            index = 2;
        }
        else {
            index -= 1;
        }
        showButton();
        if (animated == false) {
            animate(containerWidth);
        }
    }


    for (var i = 0; i < button.length; i++) {
        button[i].onclick = function () {
            if (this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = (myIndex - index) * (-containerWidth);

            index = myIndex;
            showButton();
            if (!animated) {
                animate(offset);
            }
        }
    }
    container.onmouseover = stop;
    container.onmouseout = play;

    play();
})
