(function($) {
    function insertCards(parent, childCssClass){
        var randomCount = getRandomInt(0,10);

        for (let index = 0; index <= randomCount; index++) {
            parent.append(
                $('<div/>', {'class': childCssClass}).append(
                    $('<span/>', {text: "Card 01-" + randomCount})
                )
            );
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function PlaceAdvertisment(advertisment, target) {
        var _cardLength = target.children('div.card').length;  
        if (_cardLength > 2) {
            advertisment.insertAfter(target.find("div.card:nth-child(3)"))
        } else {
            if (_cardLength > 0)
                advertisment.appendTo(target)
        }
        advertisment.show();        
    }

    $(document).ready(function(){
        var prependToDiv = $('#community').find('div.wrapped:visible:first');
        var ad = $('#Ad');
        insertCards(prependToDiv, 'card')
        PlaceAdvertisment(ad , prependToDiv);
    });

 })(jQuery);