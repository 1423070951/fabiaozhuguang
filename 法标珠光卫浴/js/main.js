
//导航二级菜单
    var li=document.getElementById("menu").children[0].children;
        for(var i=0;i<li.length;i++){
            li[i].onmouseover=function(){
                this.children[2].style.display="block"
            }
            li[i].onmouseout=function(){
                this.children[2].style.display="none"
            }
        }
/*搜索条单击字没*/
  function checkPwd2(){
         document.getElementById("pwd1").value="";
    }


//产品展示百叶窗
$("#box ul li a").hover(function(){
    $(this).stop().animate({
        width:'600px'
    })
//    .stop()清除动画队列，可以理解为当前正在运行的动画
},function(){
    $(this).stop().animate({
        width:'80px'
    })
})



//品牌遮罩
$(function(){
     $("#brandList li").hover(function(){
        $(this).find("a").stop().animate({"opacity":1},1000);
            },function(){
             $(this).find("a").stop().animate({"opacity":0},1000);
                })
         })





/*qq交谈*/
         $(function() {
	    $(".btn_top").hide();
		$(".btn_top").bind("click",function(){
			$('html, body').animate({scrollTop: 0},300);return false;/*获取现在滚动条位置为滚动条事件*/
		})
		$(window).bind('scroll resize',function(){
			if($(window).scrollTop()<=300){
				$(".btn_top").hide();
			}else{
				$(".btn_top").show();
			}
		})
   })
         
         
         
/*百度分享*/    
         window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	



/*卫浴精选*/

              $(function(){
             $(".bottom1 li").hover(function(){
                 $(this).find("a").stop().animate({"margin-top":"-175px"},500).css({"opacity":1});
             },function(){
                 $(this).find("a").stop().animate({"margin-top":"175px"},500).css({"opacity":1});
             })
         })

/*新闻页面隐藏和显示*/  
     $(document).ready(function(){
//         .ready表示文档结构已加载完成
            var a=$(".newsp ul li:gt(5)");
            a.hide();
            $(".showmore a").click(function(){
               $("#wrap").masonry(); /*调用瀑布流*/
              if(a.is(":visible")){
//                  a.hide();
//                  $(this).find("span").text("显示更多新闻");
              }else{
                  a.show();
                   $(this).find("span").text("本页加载更多...");
              }
            })
        })
        
     
    /*点击换图*/
      $(document).ready(function() {
            $(".img1").click(function () {//click点击 attr改变属性节点

                $(".img5").attr("src", "../img/products/bat (1).jpg")
             $(".dayou").html("<h5>东方之子FB-1500</h5><p>不带龙头尺寸：1520*1540*685mm <br>带龙头尺寸：1520*1540*690mm</p><p> *产品图片及尺寸图仅供参考，如有变更，恕不另行通知，产品式样及尺寸以实物为准 </p>");
            })
            $(".img2").click(function () {
                $(".img5").attr("src", "../img/products/bat (2).jpg")
                $(".dayou").html("<h5>牛郎织女FB-1750</h5><p>尺寸：1760*1320*680mm</p><p> *产品图片及尺寸图仅供参考，如有变更，恕不另行通知，产品式样及尺寸以实物为准 </p>");
            })
            $(".img3").click(function () {
                $(".img5").attr("src", "../img/products/bat (3).jpg")
                $(".dayou").html("<h5>一生一世FB-1250</h5><p>不带龙头尺寸：1390*1390*690mm <br>带龙头尺寸：1390*1390*675mm</p><p> *产品图片及尺寸图仅供参考，如有变更，恕不另行通知，产品式样及尺寸以实物为准 </p>");
            })
            $(".img4").click(function () {
                $(".img5").attr("src", "../img/products/bat (4).jpg")
                $(".dayou").html("<h5>东方丽人FB-1500/1600/1700</h5><p>FB-1500不带龙头尺寸：1490*840*675mm <br>FB-1500带龙头尺寸：1490*840*695mm</p><p>FB-1600不带龙头尺寸：1490*840*675mm <br>FB-1600带龙头尺寸：1490*840*695mm<p><p>FB-1700不带龙头尺寸：1490*840*675mm <br>FB-1700带龙头尺寸：1490*840*695mm <P>*产品图片及尺寸图仅供参考，如有变更，恕不另行通知，产品式样及尺寸以实物为准 </p>");
            })
            $(".img55").click(function () {
                $(".img5").attr("src", "../img/products/bat (5).jpg")
                 $(".dayou").html("<h5>戴美人FB-1500</h5><p>不带龙头尺寸：1390*1390*690mm<p> *产品图片及尺寸图仅供参考，如有变更，恕不另行通知，产品式样及尺寸以实物为准 </p>") 
            })
             $(".img6").click(function () {
                $(".img5").attr("src", "../img/products/bat (6).jpg")
                 $(".dayou").html("<h5>拿破仑FB-1350</h5><p>不带龙头尺寸：1350*1350*735mm<p> *产品图片及尺寸图仅供参考，如有变更，恕不另行通知，产品式样及尺寸以实物为准 </p>") 
            })
              $(".img7").click(function () {
                $(".img5").attr("src", "../img/products/bat (7).jpg")
               
                $(".dayou").html("<h5> 路易FB-1400/1500/1700</h5><p>尺寸：1415*760*580mm <br>尺寸：1515*760*580mm<br>尺寸：1715*760*580mm<p> *产品图片及尺寸图仅供参考，如有变更，恕不另行通知，产品式样及尺寸以实物为准 </p>") 
            })
        })   
      
      
      
      /*地图*/
       //创建和初始化地图函数：
        function initMap(){
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
        }

        //创建地图函数：
        function createMap(){
            var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
            var point = new BMap.Point(118.986303,28.967437);//定义一个中心点坐标
            map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
            window.map = map;//将map变量存储在全局
        }

        //地图事件设置函数：
        function setMapEvent(){
            map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
            map.enableScrollWheelZoom();//启用地图滚轮放大缩小
            map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
            map.enableKeyboard();//启用键盘上下左右键移动地图
        }

        //地图控件添加函数：
        function addMapControl(){
            //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
            //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
            //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
        }


        initMap();//创建和初始化地图
         