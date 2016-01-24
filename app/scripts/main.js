$(document).ready(function() {
  var content = [{
      // 0
      header: "Match the icons",
      description: "Draw a line from the frog on the left to the matching frog on the right.",
      picsLeft: [
        "../images/round-icons/free-60-icons-19.png",
        "../images/round-icons/free-60-icons-20.png",
        "../images/round-icons/free-60-icons-10.png",
        "../images/round-icons/free-60-icons-40.png",
      ],
      picsRight: [
        "../images/round-icons/free-60-icons-19.png",
        "../images/round-icons/free-60-icons-20.png",
        "../images/round-icons/free-60-icons-10.png",
        "../images/round-icons/free-60-icons-40.png",
      ]
    },

    // 1
    {
      header: "Match the Activity",
      description: "Match the objects on the left with their activities",
      picsLeft: [
        "../images/round-icons/free-60-icons-20.png",
        "../images/round-icons/free-60-icons-15.png",
        "../images/round-icons/free-60-icons-41.png",
        "../images/round-icons/free-60-icons-19.png",
      ],
      picsRight: [
        "../images/round-icons/free-60-icons-09.png",
        "../images/round-icons/free-60-icons-28.png",
        "../images/round-icons/free-60-icons-40.png",
        "../images/round-icons/free-60-icons-07.png",
      ]
    },

    // 2
    {
      header: "All Kinds of weather",
      description: "Draw a line to match the children in the weather.",
      pics: [
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png"
      ]
    },

    // 3
    {
      header: "Draw a line to match",
      description: "Draw a line to match the silhouette.",
      pics: [
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png"
      ]
    },

    // 4
    {
      header: "Match the shapes",
      description: "Match the geometric shapes on the left with the ones on the right.",
      picsLeft: [
        "../images/shapes/shape-1.png",
        "../images/shapes/shape-2.png",
        "../images/shapes/shape-3.png",
        "../images/shapes/shape-4.png"
      ],
      picsRight: [
        "../images/shapes/shape-1.png",
        "../images/shapes/shape-2.png",
        "../images/shapes/shape-3.png",
        "../images/shapes/shape-4.png"
      ]
    },

    // 5
    {
      header: "Count and Match",
      description: "Match the number of bricks with the given number.",
      pics: [
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png",
        "../images/smiley.png"
      ]
    }
  ]

  function populatePic(idx, key) {
    var selector = key === 'picsLeft' ? '.match-img-left' : '.match-img-right';
    var dataObj = _.cloneDeep(content[idx]);
    dataObj[key] = _.shuffle(dataObj[key]);
    $('.notify h1').text(dataObj.header);
    $('.notify p').text(dataObj.description);
    $(selector).each(function(i) {
      $(this).attr('src', (dataObj[key])[i]);
    });
  }

  document.populate = function(idx) {
    populatePic(idx, 'picsLeft');
    populatePic(idx, 'picsRight');
  }

  // populate(content[0]);

  //TODO debug this code
  $('li.nav-li').each(function(i) {
    var elem = $(this);
    elem.text(content[i].header);
    elem.click(function() {
      $('.match-container').removeClass('invisible');
      document.populate(i);
    });
  });

});
