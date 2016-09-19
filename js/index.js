$(function() {
	$(window).on("load", function() {
		test();
		//当页面滚动时执行的效果
		var dataImg = {
			"data": [{
				"src": "img.jpg"
			}, {
				"src": "img1.jpg"
			}, {
				"src": "img2.jpg"
			}, {
				"src": "img3.jpg"
			}, {
				"src": "img4.jpg"
			}, {
				"src": "img5.jpg"
			}, {
				"src": "img6.jpg"
			}, {
				"src": "img7.jpg"
			}, {
				"src": "img8.jpg"
			}, {
				"src": "img9.jpg"
			}, {
				"src": "img10.jpg"
			}]
		};
		window.onscroll = function() {
			if (scroll()) {
				$.each(dataImg.data, function(index, element) {
					var box = $("<div>").addClass("box").appendTo($(".article"));
					$("<img>").attr("src", "./images/" + $(element).attr("src")).appendTo(box);
				});
				test();
			}
		}
		window.onresize=function(){
		test();
		}

	});
	// 判断页面是否滚动
	function scroll() {
		var lastH = $(".box").last().get(0).offsetTop + Math.floor($(".box").last().outerHeight(true) / 2),
			documentH = $(document).height(),
			scrollH = $(window).scrollTop();
		return (lastH < documentH + scrollH) ? true : false;
	}

	//页面图片的摆放形式
	function test() {
		var boxWidth = $(".box").eq(0).outerWidth(true),
			article = $(".article").outerWidth(),
			num = Math.floor(article / boxWidth),
			boxArr = [];
		$(".box").each(function(index, element) {
			var boxHeight = $(".box").eq(index).outerHeight(true);
			if (index < num) {
				boxArr[index] = boxHeight;
				$(element).css({
					position: "absolute",
					top: "0px",
					left: boxWidth*index
				});
			} else {
				var minboxHeight = Math.min.apply(null, boxArr),
					minboxIndex = $.inArray(minboxHeight, boxArr);
				$(element).css({
					position: "absolute",
					top: minboxHeight,
					left: $(".box").eq(minboxIndex).position().left
				});
				boxArr[minboxIndex] += $(".box").eq(index).outerHeight(true);
			}
		});
	}



});