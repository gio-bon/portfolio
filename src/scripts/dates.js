module.exports = function(date, part) {
    var d = new Date(date);
    if(part == 'year') {
      return d.getUTCFullYear();
    }
    var month = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
    return [d.getDate()] + " de " + month[d.getMonth()] + " " +d.getUTCFullYear();
  }