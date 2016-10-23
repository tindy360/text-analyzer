// for average sentence lenght we need to find the number of sentces and divide
// the number of words.
function averageSentenceLength() {
    // word count
    var wordCount = $('#user-text').val().split(/[\s\.,;]+/);

    // number of sentences
    var sentenceCount = $ String.prototype.count = function(search) {
        var m = this.match(new RegExp(search.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "g"));
        return m ? m.length : 0;
    }
    return (wordCount / sentenceCount) = avgSentenceLength
}
//loop for number of unque words

// function to run report
function textReport(text) {

}
var lenghtSentences = averageSentenceLength()


var reportText = $('.js_text-report');
textReport.find('.js-word-count').text(wordCount);
textReport.find('.js-unique-word-count').text();
textReport.find('.js-average-word-length').text();
textReport.find('.js-average-sentence-length').text(avgSentenceLength);
textReport.removeClass('hidden');



// trigger and event listner.
$('.js-text-form').submit(function(event) {
    event.preventDefault();
    var userText = $(this).find('#user-text').val();
    textReport(removeReturns(userText));
})
