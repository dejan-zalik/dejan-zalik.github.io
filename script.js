var points = ['.','..','...'];

var displayLoading = function (point) {
  document.getElementById('loading').innerHTML = 'Loading' + point;
}

something();

setInterval(something, 3000);

function something() {
  points.forEach((point, i) => {
    setTimeout(() => {
      displayLoading(point)
    }, 1000 + (i *1000))
  })
}
