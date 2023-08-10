window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
            document.getElementById('navBar').className = 'header';
            document.getElementById('footer').className = 'footer';
            document.getElementById('downArrow').className = 'downArrowMoved';
            document.getElementById('downText').className = 'downTextMoved';
            document.getElementById('discord').className = 'btn';
            document.getElementById('gitHub').className = 'btn';
            document.getElementById('email').className = 'btn';
            document.getElementById('linkedIn').className = 'btn';
    } else {
            document.getElementById('navBar').className = '';
            document.getElementById('footer').className = '';
            document.getElementById('downArrow').className = 'downArrow';
            document.getElementById('downText').className = 'downText';
            document.getElementById('discord').className = 'btn discord';
            document.getElementById('gitHub').className = 'btn gitHub';
            document.getElementById('email').className = 'btn email';
            document.getElementById('linkedIn').className = 'btn linkedIn';
    }
    // if (document.documentElement.scrollTop > 1500) {
    //     document.getElementById('photoOne').classname = 'photo photoOne';
    // } else {
    //     document.getElementById('photoOne').classname = 'photo notInFrame';
    // }
}