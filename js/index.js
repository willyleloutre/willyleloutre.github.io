/**********ATTENTE DOCUMENT READY**************/
$(document).ready(function(){
/***********************************************/

// HOME ADAPTABLE AU NAVIGATEUR EN HAUTEUR (JUSQU'A "PRESENTATION")
		var windowH=$(window).height();
   var windowW=$(window).width();

   // This will execute whenever the window is resized
   $('#home').width(windowW);
   $('#home').height(windowH);
   $(window).resize(function() {
      var windowH=$(window).height();
      var windowW=$(window).width();
     // This will execute whenever the window is resized
      $('#home').width(windowW);
      $('#home').height(windowH);
   });

/********************************************************************************************************************/

// BOUTON RETOUR HAUT DU SITE SCROOL

	 $(window).scroll(function() {
	 				if ($(this).scrollTop() > 400) {
	 					$('.go-top').fadeIn(200);
	 				} else {
	 					$('.go-top').fadeOut(200);
	 				}
	 			});

	 			// Animate the scroll to top
	 			$('.go-top').click(function(event) {
	 				event.preventDefault();

	 				$('html, body').animate({scrollTop: 0}, 500);
	 			})

/********************************************************************************************************************/

				// ANIMATION DES YEUX AVEC LA SOURIS

				var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy){
				  // Initialise core variables
				  var r = $(pupil).width()/2;
				  var center = {
				    x: $(eyecontainer).width()/2 - r,
				    y: $(eyecontainer).height()/2 - r
				  };
				  var distanceThreshold = $(eyecontainer).width()/2 - r;
				  var mouseX = 0, mouseY = 0;

				  // Listen for mouse movement
				  $(window).mousemove(function(e){
				    var d = {
				      x: e.pageX - r - eyeposx - center.x,
				      y: e.pageY - r - eyeposy - center.y
				    };
				    var distance = Math.sqrt(d.x*d.x + d.y*d.y);
				    if (distance < distanceThreshold) {
				      mouseX = e.pageX - eyeposx - r;
				      mouseY = e.pageY - eyeposy - r;
				    } else {
				      mouseX = d.x / distance * distanceThreshold + center.x;
				      mouseY = d.y / distance * distanceThreshold + center.y;
				    }
				  });

				  // Update pupil location
				  var pupil = $(pupil);
				  var xp = 0, yp = 0;
				  var loop = setInterval(function(){
				    // change 1 to alter damping/momentum - higher is slower
				    xp += (mouseX - xp) / 1;
				    yp += (mouseY - yp) / 1;
				    pupil.css({left:xp, top:yp});
				  }, 1);
				};

				// DEFINIR LE POINT DE FIXATION DE LA SOURIS
				var chihuahuaeye1 = new DrawEye("#dogeyeleft", "#dogpupilleft", 620, 225);
				var chihuahuaeye2 = new DrawEye("#dogeyeright", "#dogpupilright", 685, 225);

/********************************************************************************************************************/

// ANIMATION DES 3 PASTILLES AU SCROOL
				// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});

/********************************************************************************************************************/

// ANIMATION DU LOGO
// vars
	var logo = $(".logo");
	var m1 = $(".logo .m1");
	var m2 = $(".logo .m2");
	var easings = ["easeOutQuad","easeInOutQuad","easeInOutBack","easeOutElastic","easeOutBounce"];
	var values = [[20,180,0],[170,170,0],[20,360,0],[350,0,0],[0,40,360],[0,320,0],[0,180,0],[180,180,0]];

  m1.colh = [0,0,0];
  m2.colh = [255,192,0]

	// logo hover
	logo.hover(function(){
		m1.logoanim(1);
		m2.logoanim(2);
	}, function(){
		m1.velocity("reverse");
		m2.velocity("reverse");
	});

	// logo anim prototype
	$.fn.logoanim = function(item) {

	// duration
	var duration = Math.round(Math.random()*400)+200;

	// anim object
	var a = Math.floor(Math.random() * values.length);

	// easing
	var e = Math.floor(Math.random() * easings.length);
	var easing = easings[e];
	if(e >= 2) {duration *= 2}

	// velocity
	$(this).velocity({
		rotateX: values[a][0] * (Math.round(Math.random())*2-1),
		rotateY: values[a][1] * (Math.round(Math.random())*2-1),
		rotateZ: values[a][2] * (Math.round(Math.random())*2-1),
     colorRed : this.colh[0],
		colorGreen : this.colh[1],
		colorBlue : this.colh[2]
	},{
		duration: duration,
		easing: easing
		});
	}

	// animate logo on document load
	$(document).ready(function() {
		m1.logoanim(1);
		m1.velocity("reverse");
		m2.logoanim(2);
		m2.velocity("reverse");
	});


	$('a[href^="#"]').click(function(event) {
		var id = $(this).attr("href");
		var target = $(id).offset().top;
		$('html, body').animate({scrollTop:target}, 500);
		event.preventDefault();
	});

function getTargetTop(elem){
	var id = elem.attr("href");
	var offset = 60;
	return $(id).offset().top - offset;
}


	$(window).scroll(function(e){
		isSelected($(window).scrollTop())
	});

var sections = $('a[href^="#"]');

function isSelected(scrolledTo){

	var threshold = 100;
	var i;

	for (i = 0; i < sections.length; i++) {
		var section = $(sections[i]);
		var target = getTargetTop(section);

		if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
			sections.removeClass("active");
			section.addClass("active");
		}

	};
}
























//sorry for the mess
var current_index = 0,
    index,
    menu,
    menu_items_count,
    mouse_down,
    mouse_start_y,
    pull_step,
    total_pull = 80,
    release = 40,
    pull_release = total_pull + release;

$(document).on('selectstart', false);

$(document).ready(function(){
	$("#menu li").each(function(i,e){
   	$(this).attr("data-index",i)
	});

	//
	menu = $("#menu").html();
	menu_items_count = $("#menu li").length;
	pull_step = total_pull/(menu_items_count-1);
	//


  $("#menu").css("transform","translate3d("+getItemX(0)+"px,0,0)");
  $("#menu li").removeClass("show");
  $("#menu li").eq(0).addClass("show");
});

$("#header").mousedown(function(e){

	//
	mouse_down = true;
	mouse_start_y = e.pageY;
	//

	if(index == menu_items_count-1) {
		index = 0;
	} else {
		var $item = $("#menu li").eq(index);
		$("#menu").html(menu);
		$("#menu li").eq($item.attr("data-index")).remove();
		$item.prependTo($("#menu"));
		$("#menu li").eq(0).addClass("show");
		$("#menu").addClass("notrans");
		$("#menu").css("transform","translate3d("+getItemX(0)+"px,0,0)");
    }
});

$(document).mouseup(function(e){
	if(mouse_down) {
	//
	mouse_down = false;
	$("#header").animate({height: 46},300);
	$("#menu").removeClass("show");
	$(".pullmenu-icon").removeClass("hide");
	//



	if(index>0) {

		if(index==menu_items_count-1) {

      	$(".reload i").addClass("anim");

      	setTimeout(function(){
				$("#menu li").removeClass("show");
				$("#menu").css("transform","translate3d("+getItemX(0)+"px,0,0)");
				$(".reload i").removeClass("anim");

				setTimeout(function(){

					$("#menu li").eq(0).addClass("show");
				},500);
			},1000);

      } else {

        current_index = index;

        $(".pages").addClass("hide");

        setTimeout(function(){

          $(".pages").removeClass("hide");
          $(".page").hide();

          switch($("#menu li").eq(index).attr("data-index")) {
            case '0': $("#latest").show(); break;
            case '1': $("#rond_1").show(); break;
            case '2': $("#rond_2").show(); break;
            case '3': $("#rond_3").show(); break;
            }
        },1000);
		}
	}
  }
});

$(document).mousemove(function(e){

	$("#menu").removeClass("notrans");

	if(mouse_down) {

		var diff = Math.max(0, e.pageY - mouse_start_y);
		if(diff>pull_release) diff = pull_release + (diff-pull_release)/(diff*0.01);

		$("#header").height(46+diff);

		index = Math.max(0,Math.min(menu_items_count-2, Math.floor((diff-release)/pull_step)));
		if(diff>pull_release+pull_step*2) index = menu_items_count-1;

		if(diff>release) {
			$("#menu").addClass("show");
			$(".pullmenu-icon").addClass("hide");
		} else {
      	$("#menu").removeClass("show");
			$(".pullmenu-icon").removeClass("hide");
		}

		$("#menu").css("transform","translate3d("+getItemX(index)+"px,0,0)");
		$("#menu li").removeClass("show");
		$("#menu li").eq(index).addClass("show");

		$(".loader-icon").css("transform", "rotate("+(diff*20)+"deg)");
	}
});

var getItemX = function(index){
	var $item = $("#menu li").eq(index);
	var item_offset = $item.offset().left;
	var item_width = $item.outerWidth();
	var menu_offset = $("#menu").offset().left;
	var screen_width = $("#screen").width();
	return (menu_offset-item_offset)+(screen_width-item_width)/2;
};

/***********************************************/
});
