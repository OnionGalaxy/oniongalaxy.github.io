(function(){

    "use strict";

    document.addEventListener('DOMContentLoaded', function(){ 

        var windowHeight = $(window).height();
        var barPosition = $('.nav-header').innerHeight();

       // console.log(windowHeight);
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if(scroll > barPosition){
              //  console.log('thas passat');
            }
            else{
              //  console.log('noo encara');
            }
        })

    });

})();