  $('.h-bottom>div').tap(function(){
      window.location.href="orderTime.html"; 
}) 
    
		$('.top-up>p').tap(function(){
			console.log($(this).index())
			if($(this).index() ===0){
				var top1 = $('.repeat').offset().top
				$('html').scrollTop(top1)
			}
			if($(this).index() ===1){
				var top2 = $('.repeat').eq(1).offset().top
				$('html').scrollTop(top2)
			}
			if($(this).index() ===2){
				var top3 = $('.repeat').eq(2).offset().top
				$('html').scrollTop(top3)
			}
		})
		$('.lingdui').tap(function(){
			window.location.href='theLeader.html' 
		})
		$('.lingjieshao').tap(function(){
			window.location.href='tourLeader.html'
		})