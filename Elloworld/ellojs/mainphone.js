/*info*/
$('#topRightImg').click(function () {
    $(".info").addClass('target')
    $('.infotext1').addClass('target1');
    $('.infotext2').addClass('target2');
    $('#topRightImg2').show()
    $('#topRightImg').hide()

})

$('#topRightImg2').click(function () {
    $('.info').removeClass('target');
    $('#topRightImg').show();
    $('#topRightImg2').hide();

})


$('#creative').click(function () {
    $('#creative').css('height', '100%');
    $('#creative .label').hide();
    $('.containerPhone').addClass('clickcreative');
    $('.phone').show();
    $('#creative .phone').show();

    $('.back').click(function () {
        stopBubble(event);
        $('.containerPhone').removeClass('clickcreative');
        $('#creative').css('height', '32%');
        setTimeout(
            "$('#creative .label').show();",600
        )

    })
})

$('#web3d').click(function () {

    $('#web3d').css('height', '100%');
    $('.containerPhone').addClass('clickweb3d');
    $('#web3d .label').hide();
    setTimeout(
        "window.location.href = 'http://8af9dde983e1.ih5.cn/idea/LcPv8-b';",300
    )

})

$('#elloGame').click(function () {
    $('#creative').css('height', '0%');
    $('#web3d').css('height', '0%');
    $('#elloGame').css('height', '100%');
    $('.containerPhone').addClass('clickelloGame');
    $('#elloGame .label').hide();
    $('#web3d .label').hide();
    $('#creative .label').hide();


    setTimeout(
        "window.location.href = 'http://demo.ileou.com/newello/index.php/Game';",300
    )
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

window.onload= function () {
    document.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, false);

}