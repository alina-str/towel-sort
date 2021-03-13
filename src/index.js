
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];
  let k = 0;
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      for (let j = matrix[i].length - 1; j > -1; j--) {
        alert (matrix[i][j]);
        
      }
    }
    else
      for (let j = 0; j < matrix[i].length; j++) {
        alert (matrix[i][j]);
      }
  }

}
