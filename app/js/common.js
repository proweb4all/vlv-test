$(function() {

  $('.myslider').slick({
		  infinite: true,
		  autoplay: true,
		  autoplaySpeed: 5000,
		  аccessibility: true,
		  speed: 1000,
		  dots: true,
		  arrows: false,
		  responsive: [
  		]
  });

	$(".tel").mask("+375 (999) 999-99-99"); 

	$('.burger').click(function(event){
  	event.preventDefault();
		display = $('.nav-nav').css('display');
		if(display == 'none'){
			$(this).text('✖');
			$('.nav-nav').slideDown(300).css("display", "flex");
		}
		if(display != 'none'){
			$(this).text('☰');
			$('.nav-nav').slideUp(300);
		}
	});

	$('.nav-nav').click(function(event){
		display = $('.burger').css('display');
		if(display != 'none'){
			$('.burger').text('☰');
			$(this).slideUp(300);
		}
	});

	setTimeout(function() {
		document.querySelector('progress').value = 25;
		document.querySelector('.progress-value').innerHTML = '25';
	}, 0);

  //E-mail Ajax Send
  $("form.slide-form").submit(function() {
    var c = $(this);
    return $.ajax({
      type: "POST",
      url: "mail.php",
      data: c.serialize()
    }).done(function() {
      $(c).find(".success").addClass("active").css("display", "flex").hide().fadeIn(), setTimeout(function() {
        $(c).find(".success").removeClass("active").fadeOut(), c.trigger("reset")
      }, 8e3)
    }), !1
  }); 

// JS меню
  $itemsMenu = $('.nav-nav-item');
  $itemsMenu.on('click', function (e) {
      e.preventDefault();
      var selector = $(this).attr('href'); /* #about - строка */
      console.log(selector);
      var h = $(selector);  //jquery-элемент заголовка 
      console.log(h);
      console.log(h.offset().top);
      $('html, body').stop().animate({
          scrollTop: h.offset().top - 145
      }, 'slow', 'swing');
      console.log($('html, body').offset().top);
	});


});
