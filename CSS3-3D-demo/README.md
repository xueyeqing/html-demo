这是最近看了几篇CSS 3D方面的文章后写的demo。

---

# `pictures-swing-rotate-efft`：图片旋转木马浏览效果。

这个主要参考了张鑫旭大神的 [好吧，CSS3 3D transform变换，不过如此！](http://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/) 最后的例子。

---

# `cube`：CSS 3D 立方体。
这个参考了这两篇文章：[不只是平面：css三维变换的应用](http://acgtofe.com/posts/2013/09/css-3d-transform) 和 [3d transform的坐标空间及位置](http://acgtofe.com/posts/2015/12/xyz-3d-in-css)，这两篇文章对 CSS 3D 的知识方面讲得非常详细，有兴趣的同学可以读一下。

这个demo里面我添加了点击按钮可以四个方向旋转立方体的功能，但是这个功能有个bug。
因为 CSS 的旋转是会把坐标轴也一起旋转的，所以我代码里面简单地固定点击哪个按钮就旋转哪个轴这样是不对的。但是我暂时也没想到正确的实现，就先这样吧=_=

