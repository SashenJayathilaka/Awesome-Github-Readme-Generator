export function onlyUnique(
  value: string | number,
  index: string | number,
  array: any
) {
  return array.indexOf(value) === index;
}
