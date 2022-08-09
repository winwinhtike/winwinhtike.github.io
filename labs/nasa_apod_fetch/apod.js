$(document).ready(
  function () {
    $("#view_button").click(getPicture);
  });

function getPicture() {
  var url = 'https://api.nasa.gov/planetary/apod';
  let data = {
    api_key: 'DEMO_KEY',
    date: $("#date").val()
  }

  // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-4-3  << append querystring to the url
  url += "?" + new URLSearchParams(data);

  console.log(url);

  fetch(url)
  .then((response) => {
        return response.json();
      })
    .then(data => showPicture(data))
    .catch(error => noPicture(error));


  function showPicture(data) {
    $("#pic").attr("src", data.url);
  }
  function noPicture(error) {
    alert(error.responseText);
  }
}