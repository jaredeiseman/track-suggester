////////////////////////////////////////////////////////////////////////////////
//                              BUSINESS LOGIC                                //
////////////////////////////////////////////////////////////////////////////////
//determination logic
var determine = function (questions) {
  if (questions['question-six'] === 'design-caveat') {
    return 'design-caveat';
  }
  if (questions['question-one'] === 'design') {
    return 'design';
  } else if (questions['question-one'] === 'design-backend') {
    if (questions['question-two'] === 'design') {
      return 'design';
    } else {
      if (questions['question-three'] === 'java') {
        return 'java';
      } else {
        if (questions['question-four'] === 'c') {
          return 'c';
        } else {
          if (questions['question-five'] === 'php') {
            return 'php';
          } else {
            return 'ruby';
          }
        }
      }
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
//                           USER INTERFACE LOGIC                             //
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  //next button to hide current '.question-content' div and show next
  $('button[name="next"]').click(function() {
    $(this).parent().slideUp();
    $(this).parent().next().slideDown();
    $('.progress-bar').append('<div class="progress-indicator pull-left"></div>');
  });

  //previous button to hide current '.question-content' div and show previous
  $('button[name="previous"]').click(function() {
    $(this).parent().slideUp();
    $(this).parent().prev().slideDown();
    $('.progress-indicator:last-child').remove();
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
      //create error at top of page saying to fill out all questions if fail/remove if pass
      //if any fail validation, flag a failure and return
    var failed;

    for (var key in questions) {
      if (questions[key].val() === undefined) {
        failed = true;
        $('input[name="' + key + '"]').parents('.form-group').addClass('has-error');
        if ($('#error-message').length === 0) {
          $('form').prepend('<div id="error-message" class="alert alert-danger" role="alert">All questions are required.</div>');
        }
      } else {
        failed = false;
        $('input[name="' + key + '"]').parents('.form-group').removeClass('has-error');
        questions[key] = $('input[name="' + key + '"]:checked').val();
        if($('#error-message')) {
          $('#error-message').remove();
        }
      }
    }
    if (failed) {
      return;
    }

    //call business logic
    var track = determine(questions);

    //hide form
    $('form').hide();

    //show appropriate track w/ description
    $('#' + track).css('display', 'flex');
  });
});
