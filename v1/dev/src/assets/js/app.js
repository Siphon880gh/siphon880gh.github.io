console.info("%cApp init: %cPassed", "font-weight:bold", "font-style:italic; color:green;");

/**
 * Eye icon that toggles display of description
 */
function toggleDescription(event, here) {
    var context = here.closest("figure");
    var descs = context.querySelector("figcaption");
    descs.classList.toggle("display-none");
    event.preventDefault();
    event.stopPropagation();
}