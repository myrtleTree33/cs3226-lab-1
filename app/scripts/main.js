$(document).ready(function() {
  var content = [{
      // 0
      header: "Match the Icons",
      description: "Draw a line from the icons on the left to the matching icon on the right.",
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
      description: "Draw a line to match the equipment on the left, with the related activity on the right.",
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
      header: "Group the Activities",
      description: "Group the activities on the left with similar activities on the right.",
      picsLeft: [
        "../images/round-icons/free-60-icons-27.png",
        "../images/round-icons/free-60-icons-56.png",
        "../images/round-icons/free-60-icons-57.png",
        "../images/round-icons/free-60-icons-48.png",
      ],
      picsRight: [
        "../images/round-icons/free-60-icons-15.png",
        "../images/round-icons/free-60-icons-30.png",
        "../images/round-icons/free-60-icons-21.png",
        "../images/round-icons/free-60-icons-53.png",
      ]
    },

    // 3
    {
      header: "Match the Silhouette",
      description: "Draw a line to match the silhouette.",
      picsLeft: [
        "../images/round-icons/free-60-icons-20.png",
        "../images/round-icons/free-60-icons-25.png",
        "../images/round-icons/free-60-icons-17.png",
        "../images/round-icons/free-60-icons-21.png",
      ],
      picsRight: [
        "../images/round-icons/free-60-icons-20.png",
        "../images/round-icons/free-60-icons-25.png",
        "../images/round-icons/free-60-icons-17.png",
        "../images/round-icons/free-60-icons-21.png",
      ]
    },

    // 4
    {
      header: "Match the Shapes",
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
      description: "Match the number of umbrellas with the given number.",
      picsLeft: [
        "../images/numerals/three.png",
        "../images/numerals/four.png",
        "../images/numerals/five.png",
        "../images/numerals/eight.png",
      ],
      picsRight: [
        "../images/numerals/3.png",
        "../images/numerals/4.png",
        "../images/numerals/5.png",
        "../images/numerals/8.png",
      ]
    },

    // 6
    {
      header: "Match the Colors",
      description: "Match the pictures on the left with their primary colors on the right.",
      picsLeft: [
        "../images/round-icons/free-60-icons-21.png",
        "../images/round-icons/free-60-icons-11.png",
        "../images/round-icons/free-60-icons-14.png",
        "../images/round-icons/free-60-icons-50.png"
      ],
      picsRight: [
        "../images/colors/red.png",
        "../images/colors/yellow.png",
        "../images/colors/green.png",
        "../images/colors/blue.png"
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
      $(this).removeClass('match-img-silhouette');
      $(this).attr('src', (dataObj[key])[i]);

      // for silhouette option
      if (idx === 3 && key === "picsRight") {
        $(this).addClass('match-img-silhouette');
      }
    });

  }

  document.populate = function(idx) {
    populatePic(idx, 'picsLeft');
    populatePic(idx, 'picsRight');
  }

  // populate(content[0]);

  $('li.nav-li').each(function(i) {
    var elem = $(this);
    elem.text(content[i].header);
    elem.click(function() {
      $('.match-container').removeClass('invisible');
      document.populate(i);
    });
  });

});
