////////////////////////////////////////////////////////////////////////////////
//                              BUSINESS LOGIC                                //
////////////////////////////////////////////////////////////////////////////////
//determination logic

////////////////////////////////////////////////////////////////////////////////
//                           USER INTERFACE LOGIC                             //
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  //next button to hide current '.question-content' div and show next
  $('button[name="next"]').click(function() {
    $(this).parent().slideUp();
    $(this).parent().next().slideDown();
  });

  //previous button to hide current '.question-content' div and show previous
  $('button[name="previous"]').click(function() {
    $(this).parent().slideUp();
    $(this).parent().prev().slideDown();
  });

  //submit button handler
  $('form').submit(function(e) {
    //block submission
    e.preventDefault();

    //gather form checked inputs
    var questions = {
      "question-one": $('input[name="question-one"]:checked'),
      "question-two": $('input[name="question-two"]:checked'),
      "question-three": $('input[name="question-three"]:checked'),
      "question-four": $('input[name="question-four"]:checked'),
      "question-five": $('input[name="question-five"]:checked'),
      "question-six": $('input[name="question-six"]:checked')
    };

    //form validate and cleanup data
      //loop to add bootstrap has-error class to each question that has no value
      //then reassign the value in the questions object to the value of the question
      //asked if passes validation
    for (var key in questions) {
      if (questions[key].val() === undefined) {
        $('input[name="' + key + '"]').parents('.form-group').addClass('has-error');
        if ($('#error-message').length === 0) {
          $('form').prepend('<div id="error-message" class="alert alert-danger" role="alert">All questions are required.</div>');
        }
      } else {
        $('input[name="' + key + '"]').parents('.form-group').removeClass('has-error');
        questions[key] = $('input[name="' + key + '"]:checked').val();
        if($('#error-message')) {
          $('#error-message').remove();
        }
      }
    }
      //create error at top of page saying to fill out all questions


    //call business logic

    //display results
      //hide form
      //show appropriate track w/ description
  });
});
