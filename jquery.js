$(document).ready(fonction)(){
  slider.init();
  slider.play-defil();
});

slider={
  init: fonction(){
    slider.elem = $("#head_slider_content");
    slider.nbslide = slider.elem.find("img").length;
    slider.current = 0;


  $("#head_slider_fleche_droite").click(fonction(){
    slider.next();
  });
  $("#head_slider_fleche_gauche").click(fonction(){
    slider.prev();
  });
},

next.fonction(){
  slider.current++;
  if(slider.current > slider.nbslide-1){
    slider.current = 0;
    slider.elem.stop().animate ({margin-left:"0px"});
  }
  else{
    slider.elem.stop().animate ({margin-left: -slider.current*250+"px"});
  }
  prev: function(){
    slider.current--;
    if(slider.current < 0){
      slider.curent = slider.nbslider-1;
    }
    slider.elem.stop().animate({margin-left: -slider.current*250+"px"});
  },
  play defil:fonction(){
    slider.timer = window.setInterval("slider.next()", 5000);
  }
}


}
