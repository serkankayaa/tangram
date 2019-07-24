$(document).ready(function() {

    $('.shp-rotate').hide();
    $('.tang-drag').hover(function(){
        $(this).children('.shp-rotate').show();
    }, function(){
        $(this).children('.shp-rotate').hide();
    });

    //class a click edildiğinde şekil hareket ettirilir.
    $('.tang-drag').draggable({
        containment:'window',
        stack: '.tang-drag',
        snap: '.target-shape, .tang-drag', // hem şekiller arası hem de hedef puzzle arasında otomatik hizalama yapar.
        snapMode: 'inner',
        snapTolerance: 20,
    });

    //çift click ile şeklin rotasyonu kare ise 45 değilse 90 derecelik açılarla değişir.
    var nonSquarePain = 90;
    var squarePain = 45;
    $('.shp-rotate').click(function() {
        var squareId = $(this).parent().attr('id');
        var checkSquare = squareId.includes("square");

        if(checkSquare) {
            $(this).parent().css ({
                '-webkit-transform': 'rotate(' + squarePain + 'deg)',
                   '-moz-transform': 'rotate(' + squarePain + 'deg)',
                     '-o-transform': 'rotate(' + squarePain + 'deg)',
                    '-ms-transform': 'rotate(' + squarePain + 'deg)'
            });
        }
        else {
            $(this).parent().css ({
                '-webkit-transform': 'rotate(' + nonSquarePain + 'deg)',
                   '-moz-transform': 'rotate(' + nonSquarePain + 'deg)',
                     '-o-transform': 'rotate(' + nonSquarePain + 'deg)',
                    '-ms-transform': 'rotate(' + nonSquarePain + 'deg)'
            });
        }

        squarePain += 45;
        nonSquarePain += 90;    
    });
});