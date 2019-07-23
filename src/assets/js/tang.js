$(document).ready(function() {
    
    //class a click edildiğinde şekil hareket ettirilir.
    $('.tang-drag').draggable({
        containment:'window',
        stack: '.tang-drag',
        snap: '.target-shape',
        snapMode: 'inner',
        snapTolerance: 10,
    });

    //sağ click ile şeklin rotasyonu değişir.
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