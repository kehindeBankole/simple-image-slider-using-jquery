$(function(){
            var gallery = $(".gallery").find("img");
            var imglist = [
                "images/download.jpg" ,
                "images/yw5kLU.jpg" ,
                "images/zUCRgb6.png"
            ];
            
            var x = 0;

            setInterval(function(){
            
            x = (x + 1) % imglist.length;
            gallery.fadeOut(function(){
               $(this).attr("src" , imglist[x]);
               $(this).fadeIn();
           })

            } , 2000)
        })
        