// JavaScript Document

$(document).ready(function() {
  var xPosition;
  var yPosition;
  var rotation;
  var zIdx = 1;

  function imageStart() {
    $(".imgWrapper").each(function() {
      var xRandom = (Math.random() + 0.3) * 9;
      xPosition = xRandom + "%";
      $(this).css('left', xPosition);

      var yRandom = (Math.random() + 0.3) * 9;
      yPosition = yRandom + "%";
      $(this).css('top', yPosition);

      $('.images').fadeIn(2000);
    });
  };

  function imageRotation() {
    $(".images").each(function() {
      rotation = "rotate(" + (Math.random() * -40 + 20) + "deg)";
      $(this).css('transform', rotation);
    });
  }

  imageStart();
  imageRotation();
  setTimeout(function() {
    imagePosition();
  }, 100);

  function imagePosition() {
    $(".imgWrapper").each(function() {
      var xRandom = Math.random() * 90;
      xPosition = xRandom + "%";
      $(this).css('left', xPosition);

      var yRandom = (Math.random() + 0.1) * 77;
      yPosition = yRandom + "%";
      $(this).css('top', yPosition);

      $('.images').fadeIn(1000);
    });
  };

  // Shuffle element positions on page
  $("#shuffle").mousedown(function() {
    $('.images').css('transition', 'all 2.0s ease');
    $('.imgWrapper').css('position', 'absolute');
    imagePosition();
    imageRotation();
  });

  $("#sort").mousedown(function() {
    docWidth = $(document).width() - 1000;
    docWidth = docWidth / 2;
    xSet = 0;
    xSort = docWidth;
    ySet = 0;
    ySort = 100;
    sortCounter = 0;
    console.log(docWidth);
    $('.imgWrapper').css('transition', 'all 2.0s ease');
    $(".imgWrapper").each(function() {
      if (sortCounter == 10) {
        sortCounter = 0;
        ySort = ySort + 100;
        xSort = docWidth;
        xSet = 0;
      }
      ySet = ySort + 'px';
      xSet = xSort + 'px';

      $(this).css('left', xSet);
      $(this).css('top', ySet);
      xSort = xSort + 105;
      sortCounter++;
    });
  });

  $('.images').mouseenter(function() {
    $(this).css('transform', 'rotate(0deg)');
    $(this).css('transition', 'all 1.0s ease, z-index 0.2s ease');
    $(this).css('z-index', zIdx);
    zIdx++;
  });

  $('.images').mouseleave(function() {
    rotation = "rotate(" + (Math.random() * -40 + 20) + "deg)";
    $(this).css('transform', rotation);
  });

  $('.imgWrapper').mousedown(function() {
    $(this).css('transition', 'height 1.0s ease, width 1.0s ease, box-shadow 1.0s ease');
  });
  $('.imgWrapper').draggable();

});