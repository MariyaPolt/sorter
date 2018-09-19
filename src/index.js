class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var arrToSort = [];
    quickSort(indices, 0, indices.length - 1);
    for (let i = 0; i < indices.length; i++) {
      arrToSort.push(this.arr[indices[i]]);
    }
    quickSortModified(arrToSort, 0, arrToSort.length - 1, this.arr, indices, this.comparator);
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;

function quickSortModified(arr, firstIndex, lastIndex, fullArray, indices, comparator) {
  var pivot = arr[( (firstIndex + lastIndex) - (firstIndex + lastIndex) % 2 ) / 2],
    i = firstIndex,
    j = lastIndex;

  do {
    while (comparator(arr[i], pivot) < 0) i++;
    while (comparator(arr[j], pivot) > 0) j--;
    if (i <= j) {
      let buf = arr[i];
      arr[i] = arr[j];
      arr[j] = buf;

      buf = fullArray[indices[i]];
      fullArray[indices[i]] = fullArray[indices[j]];
      fullArray[indices[j]] = buf;

      i++;
      j--;
    }
  } while(i < j);

  if (firstIndex < j) quickSortModified(arr, firstIndex, j, fullArray, indices, comparator);
  if (i < lastIndex) quickSortModified(arr, i, lastIndex, fullArray, indices, comparator);
}


function quickSort(arr, firstIndex, lastIndex) {
  var pivot = arr[( (firstIndex + lastIndex) - (firstIndex + lastIndex) % 2 ) / 2],
    i = firstIndex,
    j = lastIndex;

  do {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      let buf = arr[i];
      arr[i] = arr[j];
      arr[j] = buf;
      i++;
      j--;
    }
  } while(i < j);

  if (firstIndex < j) quickSort(arr, firstIndex, j);
  if (i < lastIndex) quickSort(arr, i, lastIndex);
}
