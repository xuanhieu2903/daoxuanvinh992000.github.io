document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelectorAll('div.nut ul li');
    var slides = document.querySelectorAll('div.slide div');
    for(var i = 0 ; i < nut.length; i++){
    nut[i].addEventListener('click',function(){
        var nutnay = this;
        var vitrislide = 0;
        for(var i = 0;nutnay = nutnay.previousElementSibling; vitrislide++){
            //chay den khi nut nay  = null thi dung.
            // chay xong lenh nay khi click vao nut ta lay dc vitrislide
        }
        for(var i = 0; i < slides.length; i++){
            slides[i].classList.remove('next');
        }
        for(var i = 0; i < slides.length; i++){
            slides[vitrislide].classList.add('next');
        }
    })
    }
     
        auto();
        function auto(){
        var thoigian = setInterval(function(){
            var slide = document.querySelector('div.slide div.next');
            var vitrislide = 0;
            for(var i = 0 ; slide = slide.previousElementSibling ; vitrislide ++){
            }
            for(var i = 0 ; i < slides.length; i++){
                slides[i].classList.remove('next'); // remove hết những thằng đang có class 'next'
            }
            if(vitrislide == slides.length - 1){
                slides[0].classList.add('next');
                    // tự động chuyển đến slide cuối cùng nó quay lại thằng 0
            }
            else{
            slides[vitrislide].nextElementSibling.classList.add('next');
                   //chuyển sang cái  tiếp theo.
        }
        },2000)
    }
     
    var x = setInterval(function(){
    console.log('slide');
    },1000);
     
    },false)