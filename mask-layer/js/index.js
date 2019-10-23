window.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('showMaskLayerBtn');
    var dialog = document.getElementsByClassName("dialog")[0];

    button.addEventListener('click', function () {
        maskLayer.show(dialog);
    }, false);

    dialog.addEventListener('click', function () {
        maskLayer.hide();
    }, false);
}, false);