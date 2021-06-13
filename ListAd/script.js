(function($) {
    
    function listObject(target, childrenClassName){
        this.target = target;
        this.childrenClassName = childrenClassName;
        this.placeAd = placeAd;
    }

    function placeAd() {
        var result = `A Beautiful ${this.target} ${this.childrenClassName}`;
        pretty_print(result);
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

        // Debug hide divs
        //Item 01
        $('#community div.wrapped:nth-child(3)').hide()

        //Item 02
        $('#community div.wrapped:nth-child(4)').hide()

        //Item 03
        //$('#community div.wrapped:nth-child(5)').hide()

        //Item 04
        //$('#community div.wrapped:nth-child(6)').hide()

        //Item 05
        //$('#community div.wrapped:nth-child(7)').hide()

        var ad = $('#Ad');
        var prependToDiv = $('#community').find('div.wrapped:visible:first');


        PlaceAdvertisment(ad, prependToDiv);
      
    });
 })(jQuery);