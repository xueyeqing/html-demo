/**
 * 遮罩层组件
 * @author dengrq
 * @version 2018-05-04
 * @description 遮罩层组件，使用maskLayer.show()显示，maskLayer.hide()关闭
 */
var maskLayer = function () {
    var maskDiv;
    var dialog;

    // 创建遮罩层
    var createLayer = function () {
        var div = document.createElement("div");
        div.style = "width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgba(0,0,0,0.5);opacity:0;display:none;transition: opacity 0.5s;";
        document.body.appendChild(div);
        maskDiv = div;
    };

    var show = function (dialogElement) {
        // display会对动画有影响，如果这里不用setTimeout()的话，opacity的过渡效果会看不见，立刻就把遮罩层和对话框都显示出来
        // 所以要先设置了display属性，等一会儿再设置opacity的值
        maskDiv.style.display = "initial";
        setTimeout(function () {
            maskDiv.style.opacity = 1;
        }, 100);

        if (dialogElement) {
            dialog = dialogElement;

            dialog.style.display = "initial";
            setTimeout(function () {
                dialog.style.opacity = 1;
            }, 100);
        }
    };

    var hide = function () {
        if (dialog) {
            dialog.style.opacity = 0;
            setTimeout(function () {
                dialog.style.display = "none";
            }, 500);
        }
        if (maskDiv) {
            maskDiv.style.opacity = 0;
            setTimeout(function () {
                maskDiv.style.display = "none";
            }, 500);
        }
    };

    createLayer();

    return {
        /**
         * 显示遮罩层与对话框
         * @param {*} dialogElement 对话框元素
         */
        show: show,
        /**
         * 隐藏遮罩层与对话框
         */
        hide: hide
    };
}();