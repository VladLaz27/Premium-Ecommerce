    var link = document.querySelector(".show-menu");

    var popup = document.querySelector(".mn-list");
    var close = popup.querySelector(".close-menu");

    link.addEventListener("click", function (evt) {
    	popup.classList.add("modal-show");
  	});