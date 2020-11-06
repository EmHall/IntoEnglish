function __textCalculatorCounter(){

        var value = $('#calculateText').val();
        var spanWords = $('#calculatedWordsTotal'),
            spanChars = $('#calculatedCharsTotal'),
            spanPrice = $('#calculatedPriceTotal');


        if (value.length == 0) {
            spanWords.html(0);
            spanChars.html(0);
            return;
        }

        var selectedPricing = $("input[name=calculatePrice]:checked").val();
        var wordCount = value.trim().replace(/\s+/gi, ' ').split(' ').length;
        var totalChars = value.length;
        var totalPrice = (wordCount * parseFloat(Math.round(selectedPricing * 100) / 100));

        spanWords.html(wordCount);
        spanChars.html(totalChars);
        spanPrice.html(totalPrice.toFixed(2));
    }
    
    
    $(document).ready(function(){
    	var textblock = $('#calculateText');
        textblock.change(__textCalculatorCounter);
        textblock.keydown(__textCalculatorCounter);
        textblock.keypress(__textCalculatorCounter);
        textblock.keyup(__textCalculatorCounter);
        textblock.blur(__textCalculatorCounter);
        textblock.focus(__textCalculatorCounter);
        $('#pricesGroup label').click(__textCalculatorCounter);
    });