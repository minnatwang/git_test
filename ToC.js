var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
  "<h2>On this page:</h2>" +
  "<ul>";

var newLine, el, title, link;

$("article strong").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  if (link.includes("sub")) {
    newLine =
      "<li>" +
      "<a href='" + link + "'>" +
      "<h4>"  + title + "</h4>"
      "</a>" +
      "</li>";
  } else {
    newLine =
      "<li>" +
      "<a href='" + link + "'>" +
      title +
      "</a>" +
      "</li>";
  }

  ToC += newLine;

});

ToC +=
  "</ul>" +
  "</nav>";

$("article").prepend(ToC);
