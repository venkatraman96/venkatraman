$(document).ready(function() {
    
        
    /* ======= Chart ========= */
    
    $('.chart').easyPieChart({		
		barColor:'#00BCD4',//Pie chart colour
		trackColor: '#e8e8e8',
		scaleColor: false,
		lineWidth : 5,
		animate: 2000,
		onStep: function(from, to, percent) {
			$(this.el).find('span').text(Math.round(percent));
		}
    });  
       /* ======= Scrollspy ======= */
  // $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});
    
   /* ======= ScrollTo ======= */
   $('.scrollto').on('click', function(e){
       
       //store hash
       var target = this.hash;
               
       e.preventDefault();
       
       $('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
       
   });
	
    /* ======= DEMO THEME CONFIG ====== */
	$('#config-trigger').click(function(e){
    	
		e.preventDefault();
		
		//$("#config-panel").toggleClass('config-panel-open');
		
		if($(this).hasClass('config-panel-open')){
          $("#config-panel").animate({
            right: "-=190" //same as the panel width
           }, 500);
          $(this).removeClass('config-panel-open').addClass('config-panel-hide');
         }
         else {      
         $("#config-panel").animate({
           right: "+=190" //same as the panel width
           }, 500);
          $(this).removeClass('config-panel-hide').addClass('config-panel-open');    
         }
	});
    
    $('#config-close').on('click', function(e) {
        e.preventDefault();
        $('#config-trigger').click();
    });
    
    
    $('#color-options a').on('click', function(e) { 
        var $styleSheet = $(this).attr('data-style');
        var $chartColor = $(this).attr('data-chart');
        
		$('#theme-style').attr('href', $styleSheet);
				
		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');
		
		e.preventDefault();
		
        // On click destory the current pie chart
        $('.chart').data('easy-pie-chart', null);
        
        //Create a new pie chart with a new colour
		$('.chart').easyPieChart({		
    		barColor: $chartColor,
    		trackColor: '#e8e8e8',
    		scaleColor: false,
    		lineWidth : 5,
    		animate: 2000,
    		onStep: function(from, to, percent) {
    			$(this.el).find('span').text(Math.round(percent));
    		}
    	}); 
		
	});


});