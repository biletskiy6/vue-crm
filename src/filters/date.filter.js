export default (value, param) => {
  let options = {};

  if (param.includes("date")) {
    options.day = "numeric";
    options.month = "long";
    options.year = "numeric";
  }

  if (param.includes("time")) {
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.second = "2-digit";
  }

  return new Intl.DateTimeFormat("ru-RU", options).format(value);
};
