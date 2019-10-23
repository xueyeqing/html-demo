var currentPage = 1; // 当前页码
var viewport = null;
var pageWidth = window.innerWidth; // 页面宽度
var currentPos = 0; // 页面当前位置

document.addEventListener("DOMContentLoaded", function () {
    bindTouchEvent();
    bindSelectPage();
}, false);

/** 
 * 设置当前页码
 */
function setPageNumber(newPage) {
    var points = document.querySelectorAll(".pagenumber div");
    points[currentPage - 1].className = "";
    points[newPage - 1].className = "now";
    currentPage = newPage;
}

/**
 * 点击页码跳转页面
 */
function bindSelectPage() {
    var points = document.querySelectorAll(".pagenumber div");
    points.forEach(function (point, index) {
        point.addEventListener("touchstart", function (e) {
            e.stopPropagation(); // 禁止冒泡，否则还会触发document的touchstart事件

            // 使用动画过渡让页面滑动到最终的位置
            var translate = (index * -pageWidth);
            viewport.style.transition = "0.3s ease transform";
            viewport.style.transform = "translate3d(" + (index * -pageWidth) + "px, 0, 0)";
            setPageNumber(index + 1);

            currentPos = translate;
        }, false);
    });
}

/** 
 * 绑定触摸事件
 */
function bindTouchEvent() {
    var startX, startY;
    var startTime = 0;
    var initialPos = 0; // 每次滑动开始的初始位置
    var isTouchEnd = true; // 标记当前滑动是否已结束
    var moveLength = 0; // 手指当前滑动的距离
    var direction = "left"; // 手指滑动的方向
    var maxMoveLength = -pageWidth * (document.getElementsByClassName("pageview").length - 1); // 页面可以向做左滑动的最大值
    viewport = document.getElementById("viewport");

    // 移动开始时，记录初次手指触摸位置与时间
    document.addEventListener("touchstart", function (e) {
        e.preventDefault();

        if (isTouchEnd) {
            var touch = e.touches[0];
            startX = touch.pageX;
            startY = touch.pageY;
            startTime = new Date().getTime();
            isTouchEnd = false; // 当前滑动开始
            initialPos = currentPos; // 记录滑动开始时页面所在位置
            viewport.style.transition = ""; // 取消动画效果
        }
    }, false);

    // 开始移动时，页面要跟着手指滑动距离移动
    document.addEventListener("touchmove", function (e) {
        e.preventDefault();

        //如果当前滑动已结束，不管其他手指是否在屏幕上都禁止该事件
        if (isTouchEnd) return;

        var touch = e.touches[0];
        var moveX = touch.pageX - startX;
        var moveY = touch.pageY - startY;

        // 如果X方向上的位移大于Y方向，则认为是左右滑动
        if (Math.abs(moveX) > Math.abs(moveY)) {
            moveLength = moveX;
            var translate = initialPos + moveLength; // 当前需要移动到的位置

            // 判断边界，如果translate>0 或 < maxWidth，则表示页面超出边界，此时不移动页面
            if (translate <= 0 && translate >= maxMoveLength) {
                viewport.style.transform = "translate3d(" + translate + "px, 0, 0)";
                currentPos = translate;
            }

            direction = moveX <= 0 ? "left" : "right";
        }
    }, false);

    // 手指离开屏幕时，计算最终需要停留在哪一页
    document.addEventListener("touchend", function (e) {
        e.preventDefault();

        if (isTouchEnd || moveLength === 0) return;

        isTouchEnd = true; // 标记当前完整的滑动事件已经结束

        // 计算手指在屏幕上停留的时间，采取不同的响应方式
        var endTime = new Date().getTime();
        var duration = endTime - startTime;
        var translate = 0;
        if (duration < 300) { // 如果停留时间小于300ms，则认为是快速滑动切换，页面切换到下一页
            translate = (direction === "left") ? (initialPos - pageWidth) : (initialPos + pageWidth);
            // 判断边界值，可以循环滑动
            translate = translate > 0 ? maxMoveLength : translate;
            translate = translate < maxMoveLength ? 0 : translate;
        } else { // 滑动时间大于300ms，认为是慢速滑动，此时根据移动距离来判断是否切换到下一页
            // 如果滑动距离小于屏幕的50%，则不切换下一页，并且回退页面已移动的距离
            if (Math.abs(moveLength) < (pageWidth * 0.5)) {
                translate = currentPos - moveLength;
            } else {
                //如果滑动距离大于屏幕的50%，则滑动到下一页
                translate = (direction === "left") ? (initialPos - pageWidth) : (initialPos + pageWidth);
            }
            translate = translate > 0 ? maxMoveLength : translate;
            translate = translate < maxMoveLength ? 0 : translate;
        }
        currentPos = translate;

        // 使用动画过渡让页面滑动到最终的位置
        viewport.style.transition = "0.3s ease transform";
        viewport.style.transform = "translate3d(" + translate + "px, 0, 0)";

        // 设置页码
        var page = (-currentPos / pageWidth) + 1;
        setPageNumber(page);

        moveLength = 0;
    }, false);
}