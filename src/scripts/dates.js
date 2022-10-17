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
    var ordinal = {
      1 : "st",
      2 : "nd",
      3 : "rd",
      21 : "st",
      22 : "nd",
      23 : "rd",
      31 : "st"
    };
    return [d.getDate()+1] + " de " + month[d.getMonth()] + " " +d.getUTCFullYear();
  }