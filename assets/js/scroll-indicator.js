// When the user scrolls the page, execute myFunction 
function scrollIndicator() {
  var mainSection = document.getElementsByClassName("main-section")[0];
  var secScroll = mainSection.scrollTop;
  var height = mainSection.scrollHeight - mainSection.clientHeight;
  var scrolled = 1 + (secScroll / height) * 99;
  document.getElementById("indicatorBar").style.width = scrolled + "%";
}