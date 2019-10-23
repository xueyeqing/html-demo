$(document).ready(function () {
    var itemsPerPage = 4; // 每页显示多少个视频
    var page = 1; // 当前是第几页

    var $_ul = $('.content ul');
    var width = $('.content').width();
    var totalPage = Math.ceil($_ul.find('li').length / itemsPerPage); // 一共有多少页

    // 下一页按钮事件
    $('.btn-next').on('click', function () {
        if (!$_ul.is(':animated')) { // 要先判断元素是否正处于动画状态，只有否的情况才为元素添加动画

            // 视频翻页
            if (page < totalPage) {
                $_ul.animate({
                    left: '-=' + width
                }, 'normal');
                page++;
            } else { // 已经到达最后一页
                $_ul.animate({
                    left: 0
                }, 'normal');
                page = 1;
            }

            // 标示页面的圆点要一起切换
            $('.page-number span').removeClass('current');
            $('.page-number span').eq(page - 1).addClass('current');
        }
    });

    // 上一页按钮事件
    $('.btn-last').on('click', function () {
        if (!$_ul.is(':animated')) {
            if (page > 1) {
                $_ul.animate({
                    left: '+=' + width
                }, 'normal');
                page--;
            } else { // 已经是第一页
                $_ul.animate({
                    left: -width * (totalPage - 1)
                }, 'normal');
                page = totalPage;
            }

            // 标示页面的圆点要一起切换
            $('.page-number span').removeClass('current');
            $('.page-number span').eq(page - 1).addClass('current');
        }
    });
});