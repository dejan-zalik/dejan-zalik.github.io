var points = ['.','..','...'];

var displayLoading = function (point) {
  document.getElementById('loading').innerHTML = 'Loading' + point;
}

loading();

setInterval(loading, 3000);

function loading() {
  points.forEach((point, i) => {
    setTimeout(() => {
      displayLoading(point)
    }, 1000 + (i *1000))
  })
}
