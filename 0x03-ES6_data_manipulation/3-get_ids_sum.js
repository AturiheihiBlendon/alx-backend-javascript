export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, currentVal) => sum + currentVal.id, 0);
}
