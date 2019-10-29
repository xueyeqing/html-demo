# table 表格的实现

![](https://github.com/xueyeqing/html-demo/blob/master/table/image/a.png)

## 要点 
- 监听元素滚动 实现同步效果

    ```
    <script type="text/javascript">
      var l = document.querySelector('#result-table-left')
      var r = document.querySelector('#result-table-body')
      var ll = document.querySelector('#result-table-head')
      r.addEventListener('scroll', function () {
        l.scrollTop = r.scrollTop
        ll.scrollLeft = r.scrollLeft
      })
    </script>
    
    ```