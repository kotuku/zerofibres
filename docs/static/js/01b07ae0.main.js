$(document).ready(function(){
    // One page navigation
    $('.nav').singlePageNav({
        offset: $('.navbar').outerHeight()
    });

    //Google analytics tracking for single page website
    $('#carousel-example-captions').waypointVirtualPage({ url: '/home', pageTitle: 'Home page' });
    $('#about').waypointVirtualPage({ url: '/about', pageTitle: 'About', triggerDelay: 10000 });
    $('#services').waypointVirtualPage({ url: '/services', pageTitle: 'Services', triggerDelay: 10000 });
    $('#portfolio').waypointVirtualPage({ url: '/portfolio', pageTitle: 'Portfolio', triggerDelay: 10000 });
    $('#team').waypointVirtualPage({ url: '/team', pageTitle: 'Team', triggerDelay: 5000 });
    $('#blog').waypointVirtualPage({ url: '/blog', pageTitle: 'Blog', triggerDelay: 5000 });
    $('#contact').waypointVirtualPage({ url: '/contact', pageTitle: 'Contact', triggerDelay: 5000 });

    //Talk to us Button
    $('#btn').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // Scroll to top
    $('.smooth-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
    });
    // Contact
    $('#submit').click(function(){ 
        $.ajax({
            url: $(".frm").attr('action'),
            method: 'POST',
            data: $('.frm').serialize(),
            dataType: 'json',
            beforeSend: function () { $('#submit').attr('value', 'Message sending.....'); },
            success: function (data) { $('#submit').attr('value', 'Message sent successfully'); },
            error: function (err) { $('#submit').attr('value', 'There was an error!'); }
        });
        return false;   
    });
     
});