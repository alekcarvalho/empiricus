export const numberToViews = function(number) {
  if (!number) {
    return 0
  } else {
    return Number(number).toLocaleString('pt-BR')
  }
}
