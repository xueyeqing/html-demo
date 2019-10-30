# canvas绘制时钟

## 属性及方法

  - beginPath() 新开始一条路径，绘制方法被指向新路径
  - closePath() 闭合当前路径，让绘制命令重新指向上下文
  - stroke() 通过线条来绘制图像轮廓
  - fill() 通过填充路径的内容区域生成实心图形
  - moveTo(x, y) 描述起点坐标
  - lineTo(x, y) 描述终点坐标
  - rect(x, y, width, height)绘制矩形x,y为绘制的起点坐标，width和height为要绘制矩形的宽高，无需加px。 
      需要配和stroke绘制带边框的矩形，或者fill绘制实心矩形
  - strokeRect(x, y. width, height) 参数同上，绘制边框矩形
  - fillRect(x,y,width,height) 参数同上，绘制填充矩形
  - clearRect(x,y,width,height) 清除指定区域矩形,会留下一块白色矩形区域
  - arc(x,y,r,sangle,eangle,counterclockwise) 
       圆弧 x,y为绘制圆的圆心坐标  r为圆的半径  sangle,eangle为圆的起始角度和结束角度  counterclockwise，可选参数，表示绘制圆是顺时针还是逆时针，true为逆时针
  - strokeStyle 描边的颜色   
  - fillStyle 填充的颜色
  - shadowColor 阴影颜色
  - shadowBlur 阴影模糊级别
  - shadowOffsetX 阴影水平偏移量
  - shadowOffsetY 阴影垂直偏移量
  - lineCap 设置线条两端结束位置的形状 
      <br> butt默认 <br> round圆形帽 <br> square正方形
  - lineJoin 设置线条与线条接合处的样式
      <br> miter (默认)， 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。
      <br> round 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
      <br> bevel 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
    
  - lineWidth 线条宽度，以像素计算，没有px
  - rotate(angle)旋转  角度转弧度公式
        <br> deg乘以Math.PI/180
        <br> deg为要绘制的角度
        <br> Math.PI为圆周率，也就是180度，但是它为一个浮点数，即使除以180也不能忽略它的小数

  - translate(x, y) 移动原点
      将一个坐标原点向x,y正方向移动，如果坐标原点不在原来的位置，则以新的位置加上要移动的位置
  - scale(x, y) 缩放x轴和y轴分别设置缩放
  - rotate(x, y) 旋转 凡是牵扯到度数，都用公式deg乘以Math.PI/180来计算

  - arcTo(x1,y1,x2,y2,r) 画圆角，
    一般两个直线相交的地方，用此方法绘制成圆弧，x1,y1指圆弧开始的x坐标和y坐标，x2,y2指圆弧结束的x和y坐标，r指半径

 - setLineDash/lineDashOffset/getLineDash 绘制虚线
 - setLineDash([实线长度, 间隙长度])方法接受一个数组，来指定线段与间隙的交替
 - lineDashOffset设置起始偏移量
 - getLineDash()返回当前虚线的样式，为一个数组

 - fillText(text, x, y [, maxWidth]) 绘制填充文本 
    text文本
    x,y指定的坐标
    maxWidth最大宽度，可选
 - strokeText(text, x, y [, maxWidth]) 绘制文本边框 <br> 
    text文本
    x,y指定坐标
    maxWidth最大宽度，可选
 - font 文本样式 <br> 
    和css设置字体相似，复合设置
    例如：context.font='100px sans-serif';

 - textAlign/textBaseline/direction <br> 
    textAlign(文本对齐选项): start|end|left|right|center 
    <br> textBaseline(基线对齐选项)：top|hanging|middle|alphabetic|ideographic|bottom 
    <br> direction(文本方向)：ltr|rtl|inherit

- 绘制图片 drawImage(imgElement,x,y,width,height) <br> 
    <br>x,y绘制图片的起始坐标
    <br>imgElement 要绘制的图片元素,或者为一个canvas的引用
    <br>width,height,设置图片的宽高

- 裁剪图片 drawImage(imgElement,sx, sy, swidth, sheight, x,y,width,height) <br> 
  imgElement 要绘制的图片元素,或者为一个canvas的引用。<br> sx, sy (可选)要裁剪的起始位置
    <br>swidth, sheight (可选)要裁剪区域的宽高
    <br>x,y放置原始图片的位置
    <br>width,height (可选)原始图片的宽高
    <br>为了不失真，一般尝试让swidth, sheight和width、height相等，x,y原点，去改变sx,sy(裁剪的起始位置)即可，实际根据需求来定

- save()/restore() <br>
    save() 保存状态，保存在栈中，类似于数组的push 。<br>restore() 恢复状态，类似于数组的pop

- clip() 裁剪路径 <br>
    把一个路径之外的内容进行裁剪，只保留路径本身内部的内容

## 用于控制动画的常用方法
-  setInterval()
-  setTimeout()
-  requestAnimationFrame()
      只执行一次，一般通过递归调用来完成动画制作
      接受一个回调函数，专门提供给动画的api，默认刷新帧率为一秒60次，优于以上两个方法，
      比如页面未激活状态下回自动暂停，节省cpu的开销
-  cancelAnimationFrame() 用来停止此方法的执行
