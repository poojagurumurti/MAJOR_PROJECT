//surprise colour!
//Referenced to in  home.js and viz.js also
var colourArray = [
  "#52bc69",
  "#ed5a7d",
  "#2ebbd1",
  "#d9513c",
  "#fec515",
  "#4b65ba",
  "#ff8a27",
  "#a7d41e",
];
//green, pink, blue, red, yellow, indigo, orange, lime
//var colourArray = ["#15a346", "#ed5a7d", "#23b1bf", "#ce5226", "#deb003", "#574882", "#ff8a27", "#a7d41e"];

function getColours() {
  var generatedColours = new Array();
  while (generatedColours.length < 4) {
    var n = Math.floor(Math.random() * colourArray.length);
    if ($.inArray(n, generatedColours) == -1) {
      generatedColours.push(n);
    }
  }
  return generatedColours;
}
var generatedColours = getColours();
var surpriseColour = colourArray[generatedColours[0]];
var colourTheSecond = colourArray[generatedColours[1]];
var colourTheThird = colourArray[generatedColours[2]];
var colourTheFourth = colourArray[generatedColours[3]];

$(document).ready(function () {
  $("#about").html(
    '<h4>About the project</h4><img class="close-overlay" src="img/cross_white.png" /><div class="content"><p><strong><span style="line-height: 200%;">Introduction</span></strong><br/>Algorithms serve as the basis for computational thinking and programming abilities, students should develop a strong understanding of these challenging concepts. We had seen that using traditional teaching techniques made it more challenging for both students and teachers to articulate their ideas. Since, as the saying goes, "a picture is worth a thousand words," many academics and educators believe that implementing the algorithms can help Students to learn through using algorithm visualization approaches. Therefore, we created a teaching technique<strong>(ALGOMAGIC)</strong> that helps students and teachers learn about various searching and sorting algorithms through visualization and hands-on experience. </p><p>More specifically, dynamic algorithm visualization plays an algorithms actions like a continuous movie. The human visual system provides a better way of understanding these important conceptual processes through visualization. These techniques help the student better understand the concepts</p><p><strong><span style="line-height: 200%;">Publications</span></strong><br/>Paper titled “Visualizer for Algorithms and Path Finding with User Interface design” has been published in Volume 11 Issue V May 2023, <a href="https://doi.org/10.22214/ijraset.2023.52237" target="_blank">IJRASET</a>.</p></div>'
  );

  $("#team").html(
    '<h4>The team</h4><img class="close-overlay" src="img/cross_white.png" /><div class="content"><Initial><strong><span style="line-height: 200%;">Project Teammates</span></strong><br/>Arpita M H<br/>Pooja G T<br/>Keerti Angadi<br/>Shraddha Kittur<br/><br><strong><span > Project Coordinator and Guide</span></strong><br/>Prof.Varsha S.Jadhav<br/>Dr. Leena I.Sakri<br/><br><strong><span >Advisor</span></strong><br/>Pruthviraj</div>'
  );

  $("#termsofuse").html(
    '<h4>Terms of use</h4><img class="close-overlay" src="img/cross_white.png" /><div class="content"><p>If you are a data structure and algorithm teacher, you are allowed to use this website for your classes. You can take screen shots from this website and use the screen shots elsewhere as long as you cite this website as a reference.</p><!--I think we need a better copyright/terms of use statement--></div>'
  );

  $(".colour").css("color", surpriseColour); //name
  $("h4").css("background-color", surpriseColour); //about, contact us etc. button background

  //title
  $("#title a").click(function () {
    $("#title a").removeClass("selected-viz");
    $(this).addClass("selected-viz");
  });

  //overlays stuff
  $("#trigger-about").click(function () {
    $("#dark-overlay").fadeIn(function () {
      $("#about").fadeIn();
    });
  });
  $("#trigger-team").click(function () {
    $("#dark-overlay").fadeIn(function () {
      $("#team").fadeIn();
    });
  });
  $("#trigger-terms").click(function () {
    $("#dark-overlay").fadeIn(function () {
      $("#termsofuse").fadeIn();
    });
  });

  $(".close-overlay").click(function () {
    $(".overlays").fadeOut(function () {
      $("#dark-overlay").fadeOut();
    });
  });
});
