if (document.documentElement.clientWidth <= 1104) {
        function Scroll(){
            var height = window.pageYOffset;
            if(height > 5) {
                header.style.marginTop  = "0px";
            }
        }
        window.addEventListener("scroll",Scroll);
        }else{
            function Scroll(){
            var navbar = document.getElementById('navbar');
            var tagline = document.getElementById('tagline');
            var taglinenav = document.getElementById('tagline-nav');
            var btnnav = document.getElementById('btnnav');
            var namelogo = document.getElementById('name-logo');
            var headerbawah = document.getElementById('header-bawah');
            var headeratas = document.getElementById('header-atas');
            var marginnav = document.getElementById('margin-nav');
            var homenav = document.getElementById('home-nav');
            var bordernav = document.getElementById('border-nav');
            var height = window.pageYOffset;
            var width = window.innerWidth;
            if(height > 5) {
                navbar.style.display = "";
                tagline.style.display = "block";
                btnnav.style.display = "block";
                headeratas.style.display = "none";
                marginnav.style.top = "20px";
                marginnav.style.right = "28px";
                homenav.style.paddingRight = "540px";
                bordernav.style.width = "100%";
            }else{
                navbar.style.display = "";
                tagline.style.display = "none";
                btnnav.style.display = "none";
                headeratas.style.display = "block";
                marginnav.style.top = "180px";
                marginnav.style.right = "130px";
                homenav.style.paddingRight = "600px";
                bordernav.style.width = "66.8%";
            }if(height > 350) {
                navbar.style.backgroundColor = "black";
                taglinenav.style.display = "block";
                namelogo.style.display = "block";
                headerbawah.style.display = "none";
            }else{
                navbar.style.backgroundColor = "transparent";
                taglinenav.style.display = "none";
                namelogo.style.display = "none";
                headerbawah.style.display = "block";
            }if (width <= 1366 & height <= 5) {
                bordernav.style.width = "52.5%";
            }
        }
        window.addEventListener("scroll",Scroll);
    }

    

  $(document).ready(function() {
      
    var swiper1 = new Swiper('.swiper1', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
    });
      
    var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 3,
      centeredSlides: true,
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
        
    });
      
    var swiper3 = new Swiper('.swiper3', {
      slidesPerView: 3,
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
        
    });
      
    var swiper4 = new Swiper('.swiper4', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
    });
      

  });


$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".scroll", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $(".btn-scroll").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});