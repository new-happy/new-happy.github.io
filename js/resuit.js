  $('header>a').tap(function(event){
      	  event.preventDefault();
      	  window.history.go(-1);
      })

		$('.departure-city').tap(function(event){
			event.preventDefault();
			$('.city').css('display','block')
		})
		$('.cancel').tap(function(event){
			event.preventDefault();
			document.querySelector('.city').style.display = 'none'
		})
	
		$('.city-down-a>div span').tap(function(event){
			  event.preventDefault();
			    $(this).addClass('active')
			  	$(this).parent().siblings().find('span').removeClass('active')
			  	$(this).siblings('button').find('img').attr('src','images/button1.jpg')
			
			  $(this).parent().siblings().find("button>img").attr('src','images/button.jpg')
			}) 	

		var hanArr = document.querySelectorAll('.handle>span')

			$('.handle>span').tap(function(event){
				event.preventDefault();
				$(this).addClass('active')
				$(this).siblings().removeClass('active')
			})
					 	
				

		var office = false;
		$('.determine').tap(function(event){
			event.preventDefault();
			if(office == false){
				document.querySelector('.destination').style.display = 'block'
				$('.destination').addClass('active')
				$('.city-b').removeClass('active') 	
				$('.city-down-a>div span').removeClass('active')
				$('.city-down-a>div img').attr('src','images/button.jpg')
				$('.city-down-b').addClass('active')
				$('.city-down-b').siblings().find('img').attr('src','images/button1.jpg')
			   office = true;
			   return
			}else{
				 document.querySelector('.city').style.display = 'none'
				document.querySelector('.destination').style.display = 'none'
				 office = false;
			}		
		})