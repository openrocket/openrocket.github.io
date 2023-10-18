function attachCollapsibleListeners() {
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].removeEventListener("click", toggleCollapsible); // Remove existing listeners to prevent duplicate bindings
    coll[i].addEventListener("click", toggleCollapsible);
  }
}

function toggleCollapsible() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;

  // Define the min and max content sizes and their respective transition times
  const minSize = 200; // px
  const maxSize = 2000; // px
  const minTime = 0.2; // seconds
  const maxTime = 0.4; // seconds

  // LERP the transition time based on the content's size
  const lerpedTime = minTime + ((content.scrollHeight - minSize) / (maxSize - minSize)) * (maxTime - minTime);

  content.style.transitionDuration = `${lerpedTime}s`;

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0px"; // collapse
  } else {
    content.style.maxHeight = `${content.scrollHeight}px`; // expand
  }
}