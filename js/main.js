window.onload = function() {
		//基本的时钟控件函数，用来控制图片轮播
		var imgIndex = 1; //表示当前图片是第几张
		var imgCount = 2; //表示图片的张数
		setInterval(function() {
			imgIndex++; //imgIndex=imgIndex+1;
			if (imgIndex > imgCount) imgIndex = 1;
			// console.log("个人编程");
			var container = document.getElementById("container");
			var content = container.getElementsByClassName("content");
			var pics = content[0].getElementsByClassName("pics");
			var a = pics[0].getElementsByTagName("a");
			// console.log(a[0].href);
			if (imgIndex == 2)
				a[0].href = "http://www.qq.com";
			else if (imgIndex == 1) {
				a[0].href = "http://www.baidu.com";
			}
			var img = a[0].getElementsByTagName("img");
			// console.log(img[0].src);
			img[0].src = "upload/pics/a" + imgIndex + ".jpg";
		}, 3000);

		var btnMore = document.querySelector("#wrapper>#container>.content>section .pager>button");
		btnMore.addEventListener("click", function() {
			// alert("个人编程");
			var myArticle = document.querySelector("#wrapper>#container>.content>section .myArticle");
			var artstr =
				'<article class="zzarticle">\
								<header>\
									<div class="st">\
										<span>PHP</span>\
										<div></div>\
									</div>\
									<h3>php7.2中count函数统计元素个数报错</h3>\
								</header>\
								<section>\
									<img src="upload/pics/pppsy.jpg" >\
									语法检查更加严格，首先必须要判断count函数中的参数必须是数组，然后才能使用...\
									注意：关键是通过is_array函数来判断$test是否为一个数组！\
								</section>\
								<footer>\
									<img src="img/time_gray.png" /> 时间、\
									<img src="img/eye_gray.png" /> 浏览量、\
									<img src="img/comment_gray.png" /> <span class="commentCount">评论量</span>、\
									<img src="img/fabulous_gray.png" /> <span class="fabulousCount">点赞量</span>\
								</footer>\
							</article>';
			myArticle.insertAdjacentHTML("afterend", artstr);
			myArticle.insertAdjacentHTML("afterend", artstr);
			myArticle.insertAdjacentHTML("afterend", artstr);
			myArticle.insertAdjacentHTML("afterend", artstr);
		}, false);
		
		//一键分享
		var imgs = document.querySelectorAll("#container .content>aside .share img");
		
		for(var i=0;i<imgs.length;i++){
// 			console.log(imgs[i].alt);
// 			continue;
			imgs[i].addEventListener("click", function() {
				goShare(this.alt);
			}, false);
		}
		

		function goShare(s) {
			var title=document.querySelector("title").innerText;
			var pic=document.querySelector("#wrapper .toper>header .mylogo");
			var picPath=pic.src;
			var desc=document.querySelector("meta[name=Description]").content;
			// console.log(desc.content);
			//qq空间接口
			if (s == 'qzone') {
				window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + document.location.href +
					'?sharesource=qzone&title=' + title + '&pics=' +picPath + '&summary='+desc);
			}
			//新浪微博
			if (s == 'sina') {
				window.open('http://service.weibo.com/share/share.php?url=' + document.location.href + '?sharesource=weibo&title=' +
					title + '&pic=' + picPath);
			}
			//qq好友
			if (s == 'qq') {
				window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + document.location.href +
					'?sharesource=qzone&title=' + title + '&pics=' + picPath + '&summary='+desc);
				}
			//生成微信二维码
			if (s == 'wechat') {
				alert("欢迎分享微信！");
			}
		}

		//标签云背景自动生成
		var zzcloudtds=document.querySelectorAll("#container .content>aside .zzNoteCloud .content table tr td");
		//console.log(zzcloudtds);
		for(var i=0;i<zzcloudtds.length;i++){
			//console.log(zzcloudtds[i]);
			var r=Math.random()*255;
			var g=Math.random()*255;
			var b=Math.random()*255;
			zzcloudtds[i].setAttribute("style","background-color:rgba("+r+","+g+","+b+","+0.8+")");
		}
}
