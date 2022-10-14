export default function toDecimal(percent) {
  const parsed = parseFloat(percent);

  if (!Number.isNaN(parsed)) {
    return parseFloat(percent) / 100 || parseInt(percent) / 100;
  } else {
    return 0;
  }
}
