import toDecimal from "../helpers/toDecimal";

export default function evaluate(expression) {
  if (!expression.match(/%/gi)) {
    let result = Function("return " + expression)();
    if (
      String(result).match(/\./gi) &&
      String(result).split(".")[1].length > 1
    ) {
      return result.toFixed(1);
    }
    return result;
  }

  // I hate regular expressions :)
  const percents = expression.match(/(\+|-|\*|\/)\d*%/gi);
  const accPercent = expression
    .match(/((\+|-|\*|\/)\d*|\d*)(\+|-|\*|\/)\d.*%/gi)[0]
    .match(/((\+|-|\*|\/)\d|\d)*(\+|-|\*|\/)/gi)
    .map((element) => {
      return element.replaceAll(/\+|-|\*|\//gi, "").replaceAll(" ", "");
    });
  const percentNoOperator = percents.map((element) => {
    return element.replaceAll(/\+|-|\*|\//g, "");
  });

  percents.forEach((percent, index) => {
    let operator = percent.match(/\+|-|\*|\//gi);
    let decimalPercent = `${operator}(${accPercent[index]}*${toDecimal(
      percentNoOperator[index],
    )})`;
    expression = expression.replace(percent, decimalPercent);
  });

  return Function("return " + expression)();
}
