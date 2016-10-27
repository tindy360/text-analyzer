//when user submits form listen for event.
$('form').submit(function(event) {
      event.preventDefault();


            // declare variables for data being worked with and set to 0
            var avgWordLength = 0;
            var uniqueWords = 0;
            var wordCount, wordReturn = 0;
            var countSentences, sentencesReturn =0;
            var avgSentenceLength = 0;


            //
            //input/store the user submited data in to the variables
            //split puncuation and spaces for word count
            countSentences = ($('textarea#user-text').val().split(' '));
            wordCount = ($('textarea#user-text').val().split(' '));
            uniqueWords = ($('textarea#user-text').val().split(' '));

                    // count through words
                    for (var i = 0; i < wordCount.length; i++) {
                      wordReturn += wordCount[i].length;
                    }

                    // count through sentences
                    for (var i = 0; i< countSentences.length; i++) {
                      sentencesReturn += countSentences[i].split(' ').length;
                    }


                    // count through unique words eliminate duplicates return lenght
                    uniqueWords = jQuery.uniqueSort(uniqueWords);

                    //count through puncuation to find number of sentences and divide for avg length
                    avgSentenceLength = (countSentences.length / wordCount.length);

                    //run math for average word lenght
                    avgWordLength = (wordReturn / wordCount.length);


                    // DOM  remove class for hidden classes
                    $('.text-report').removeClass('hidden');
                    //assign the output data to previously hidden clases
                    $('word-count').text(wordsCounted);
                    $('unique-words').text(uniqueWords);
                    $('average-word-length').text(avgWordLength);
                    $('average-sentence-length').text(avgSentenceLength)

                });
