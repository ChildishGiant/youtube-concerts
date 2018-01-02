var concerts;

$.getJSON("concerts.json", function(result){
  console.log(result)
  concerts = result;

  $.each(concerts, function(i, val) {
    $("body").append("<a href=" + i + ">" + val.title + "</a>" );
    $("#" + i).append(document.createTextNode(" - " + val));
  });
});
