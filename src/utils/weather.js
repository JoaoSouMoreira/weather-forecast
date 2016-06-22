export function convertTemperature(unit, temperature) {
  switch (unit) {
    case 'C':
      return (parseInt(temperature) - 273.15).toFixed(1);
      break;
    case 'F':
      return ((parseInt(temperature) - 273.15) * 1.8 + 32).toFixed(1);
      break;
    case 'K':
      return parseInt(temperature);
      break;
    default:
      return parseInt(temperature);
      break;
  }
}
