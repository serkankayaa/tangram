$(document).ready(function() {
    
    //class a click edildiğinde şekil hareket ettirilir.
    $('.tang-drag').draggable({
        containment:'window',
        stack: '.tang-drag',
        snap: '.target-shape, .tang-drag', // hem şekiller arası hem de hedef puzzle arasında otomatik hizalama yapar.
        snapMode: 'inner',
        snapTolerance: 10,
    });

    //çift click ile şeklin rotasyonu 90 derecelik açılarla değişir.
    var pain = 90;
    $( ".tang-drag" ).dblclick(function() {
        $(this).css ({
            '-webkit-transform': 'rotate(' + pain + 'deg)',
               '-moz-transform': 'rotate(' + pain + 'deg)',
                 '-o-transform': 'rotate(' + pain + 'deg)',
                '-ms-transform': 'rotate(' + pain + 'deg)'
        });
        pain += 90;    
    });
});