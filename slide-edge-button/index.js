var lastMoveObj = null; // 是哪个项目被移动了

document.addEventListener('DOMContentLoaded', function () {
    var elements = document.getElementsByClassName('content');
    for (var i = 0; i < elements.length; i++) {
        bindTouchEvent(elements[i]);
    }
});

/**
 * 绑定触摸事件
 * @param {*} element
 */
function bindTouchEvent(element) {
    var startX, startY;
    var moveX = 0,
        moveY = 0;

    // 触摸开始，记录手指初始位置
    element.addEventListener('touchstart', function (e) {
        var touch = e.touches[0];
        startX = touch.pageX;
        startY = touch.pageY;

        // 如果已经有项目已经移动了位置且这次触摸的不是那个项目，则让那个项目复位        
        if (lastMoveObj != null && lastMoveObj != element) {
            lastMoveObj.parentNode.style.left = "0";
        }
    }, false);

    // 记录手指移动距离
    element.addEventListener('touchmove', function (e) {
        var touch = e.touches[0];
        moveX = touch.pageX - startX;
        moveY = touch.pageY - startY;
    }, false);

    // 根据手指移动方向作出不同的响应
    element.addEventListener('touchend', function (e) {
        var li = element.parentNode;
        var deleteBtn = li.querySelectorAll('.delete')[0];
        var width = document.defaultView.getComputedStyle(deleteBtn, null).width;
        var left = parseFloat((li.style.left).replace('px', '') || 0);

        // 如果X方向上的位移大于Y方向，则认为是左右滑动
        if (Math.abs(moveX) > Math.abs(moveY)) {
            if (moveX < 0 && left === 0) {
                // 向左滑动时项目左移，显示出隐藏的删除按钮
                li.style.left = "-" + width;
                lastMoveObj = element;
            } else if (moveX > 0 && left < 0) {
                // 向右滑动时恢复项目位置
                li.style.left = "0";
            }
        }

        moveX = 0;
        moveY = 0;
    }, false);
}