function reset() {
    document.getElementById("input").reset();
}
function check() {
    var kq = document.getElementById("output");
    var x, y, z, x1, x2, delta;
    x = parseFloat(document.getElementById("const1").value);
    y = parseFloat(document.getElementById("const2").value);
    z = parseFloat(document.getElementById("const3").value);
    delta = (y * y - 4 * x * z);
    if (delta == 0) {
        x1 = -y / (2 * x);
        x2 = -y / (2 * x);
        kq.innerHTML = "Phương trình có nghiệm kép: x1= x2 = " + x1;
    }
    else if (delta < 0) {
        kq.innerHTML = "Phương trình vô nghiệm";
    }
    else {
        x1 = (-y - Math.sqrt(delta)) / (2 * x);
        x2 = (-y + Math.sqrt(delta)) / (2 * x);
        kq.innerHTML = "Phương trình có 2 nghiệm phân biệt: x1= " + x1 + " và x2 = " + x2;
    }
}
function checkyear(x) {
    x = parseInt(x);
    if ((x % 4 == 0 && x % 100 != 0) || x % 400 == 0) {
        return 1;
    }
    return 0;
}

function checkex2() {
    var m, y;
    var kq2 = document.getElementById("outputex2");
    m = parseInt(document.getElementById("month").value);
    y = parseInt(document.getElementById("year").value);
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            kq2.innerHTML = "Tháng có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            kq2.innerHTML = "Tháng có 30 ngày";
            break;
        case 2:
            if (checkyear(y) == 1) {
                kq2.innerHTML = "Tháng có 29 ngày";
                break;
            }
            else {
                kq2.innerHTML = "Tháng có 28 ngày";
                break;
            }
        default:
            kq2.innerHTML = "Số liệu không hợp lệ";
            break
    }
}
function kiemtrasnt(x) {
    if (x < 2) {
        return 0;
    }
    for (var j = 2; j <= Math.sqrt(x); j++) {
        if (x % j == 0) {
            return 0;
        }
    }
    return 1;
}
function checkex3() {
    var n, i, dem = 0;
    var allkq='';
    var kq3 = document.getElementById("outputex3");
    n = parseInt(document.getElementById("n").value);
    for (i = 0; i <= n; i++) {
        if (kiemtrasnt(i)){
            allkq+= i +" ";
            dem++;
        }
    }
    kq3.innerHTML = allkq;
    if (dem == 0) {
        kq3.innerHTML = "-1";
    }
}
const slide = [
    {
        'bgColor': 'red',
        'text': '1st slide'
    },
    {
        'bgColor': 'blue',
        'text': '2nd slide'
    },
    {
        'bgColor': 'green',
        'text': '3rd slide'
    },
    {
        'bgColor': 'yellow',
        'text': '4th slide'
    },
    {
        'bgColor': 'pink',
        'text': '5th slide'
    }
];

const slideContainer = document.getElementById('slideContainer');
var slideIntervalID = null;

initSlide();

function initSlide() {
    const slideShow = document.createElement('div');
    slideShow.id = 'slideShow';
    slideShow.style.width = slide.length * 450 + 'px';
    slideShow.style.left = '0px';
    let htmlStr = '';
    for (let i = 0; i < slide.length; i++) {
        htmlStr += `<div class="slide" style="background:${slide[i].bgColor};"><span>${slide[i].text}</span></div>`;
    }
    slideShow.innerHTML = htmlStr;

    slideContainer.appendChild(slideShow);

    slideIntervalID = setInterval(next, 3000);
}

function onNextClick() {
    clearInterval(slideIntervalID);
    next();
    slideIntervalID = setInterval(next, 3000);
}

function onPreviousClick() {
    clearInterval(slideIntervalID);
    previous();
    slideIntervalID = setInterval(next, 3000);
}

function next() {
    const slideShow = document.getElementById('slideShow');
    const currentLeft = slideShow.style.left.replace('px', '') | 0;
    slideShow.style.left = (Number.parseInt(currentLeft) - 450) <= (slide.length * (-450)) ? 0 : `${Number.parseInt(currentLeft) - 450}px`;
}

function previous() {
    const slideShow = document.getElementById('slideShow');
    const currentLeft = slideShow.style.left.replace('px', '') | 0;
    slideShow.style.left = (Number.parseInt(currentLeft) + 450) > 0 ? `${(slide.length - 1) * (-450)}px` : `${Number.parseInt(currentLeft) + 450}px`;
}