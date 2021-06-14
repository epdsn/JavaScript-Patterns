(function ($) {
    function insertCards(parent, childCssClass) {
        let randomCount = getRandomInt(0, 10);
        for (let index = 0; index <= randomCount; index++) {
            parent.append(
                $('<div/>', { 'class': childCssClass }).append(
                    $('<span/>', { text: "Card 01-" + (index + 1) })
                )
            );
        }
    }
    function PlaceAdvertisment(advertisment, target, childCssClass) {
        let _cardLength = target.children('div.' + childCssClass).length;
        if (_cardLength > 2) {
            advertisment.insertAfter(target.find("div." + childCssClass + ":nth-child(3)"))
        } else {
            if (_cardLength > 0)
                advertisment.appendTo(target)
        }
        advertisment.show();
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    $(document).ready(function () {
        var prependToDiv = $('#community').find('div.wrapped:visible:first');
        var advertisment = $('#Ad');
        insertCards(prependToDiv, 'card')
        PlaceAdvertisment(advertisment, prependToDiv, 'card');
    });
})(jQuery);