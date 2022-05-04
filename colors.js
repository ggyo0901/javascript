var Links = {
    setColor: function (color) {
        // var links = document.querySelectorAll('a');

        // var i = 0;
        // while (i < links.length) {
        //     links[i].style.color = color;
        //     i = i + 1;
        // }'

        //j쿼리로 위에와 같은 반복문 만들기
        $('a').css('color',color);
    }
}

var Body = {
    setColor2: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color',color)
    },
    setBackColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color)
    }
}


function a(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackColor('black');
        Body.setColor2('white');
        self.value = 'day';

        Links.setColor('powderblue');
    } else {
        Body.setBackColor('white');
        Body.setColor2('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}