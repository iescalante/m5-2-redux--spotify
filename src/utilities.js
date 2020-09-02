export const shortVersion = (num) => {
  let exponential = String(num).length;

  if (exponential < 4) {
    return String(num);
  }
  if (exponential > 3 && exponential < 7) {
    return num.toString().substr(0, exponential - 3) + "K";
  }
  if (exponential > 6 && exponential < 10) {
    return num.toString().substr(0, exponential - 6) + "M";
  }
  if (exponential > 9) {
    return num.toString().substr(0, exponential - 9) + "B";
  }
};
