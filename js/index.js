	
	var swiper1 = new Swiper('.swiper1', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
    });


 	

  	var swiper2 = new Swiper('.swiper2', {
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });