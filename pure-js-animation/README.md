# 原生js实现slide up/slide down动画效果

写这个就是想试试不用jQuery，不用CSS3，用js怎么实现动画效果。

网上搜了一下，主要思路就是用 `setInterval/setTimeout` ，随着时间每次一点点改变某个元素属性的值。  
用 js 实现是兼容性比较好，不过现在大部分浏览器对 CSS3 的 `transtision` 其实也很好了，还方便很多。而且用 `js` 写的话要注意的地方比较多，不然性能可能会有影响。

不过当然知道一下原理还是有必要的，于是有了这个demo。