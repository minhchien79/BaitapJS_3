let numArr = [];
function addNumber() {
  let num = Number(document.getElementById("inputNumber").value);
  numArr.push(num);

  document.getElementById("txtResult").innerHTML = numArr;
}
document.getElementById("btnNumber").onclick = addNumber;

// Tính tổng dương
document.getElementById("btnSoduong").onclick = function () {
  let total = 0;
  for (i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      total += numArr[i];
    }
  }
  document.getElementById("txtSoduong").innerHTML = "Tổng số dương: " + total;
};

// Đếm số dương
document.getElementById("btnDemSoduong").onclick = function () {
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      total++;
    }
  }
  document.getElementById("txtDemSoduong").innerHTML = "Số dương: " + total;
};

// Tìm số nhỏ nhất
document.getElementById("btnSoNhoNhat").onclick = function () {
  let min = numArr[0];
  let index = 0;
  for (i = 0; i < numArr.length; i++) {
    let num = numArr[i];
    if (min > num) {
      min = num;
      index = i;
    }
  }
  document.getElementById("txtSoNhoNhat").innerHTML = "Số nhỏ nhất: " + min;
};

// Tìm số dương nhỏ nhất
document.getElementById("btnSoDuongNhoNhat").onclick = function () {
  let positiveNumber = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      positiveNumber.push(numArr[i]);
    }
  }

  let minPositive = positiveNumber[0];
  for (let j = 0; j < positiveNumber.length; j++) {
    if (positiveNumber[j] < minPositive) {
      minPositive = positiveNumber[j];
    }
  }
  if (positiveNumber.length == 0) {
    minPositive = "Không có số dương trong mảng";
  }
  document.getElementById("txtSoDuongNhoNhat").innerHTML =
    "Số dương nhỏ nhất: " + minPositive;
};

// Tìm số chẵn cuối cùng
document.getElementById("btnSoChanCuoi").onclick = function () {
  let lastPositiveNum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 == 0) {
      lastPositiveNum = numArr[i];
    }
  }
  document.getElementById("txtSoChanCuoi").innerHTML =
    "Số chẵn cuối cùng: " + lastPositiveNum;
};

// Đổi chỗ
document.getElementById("btnDoiCho").onclick = function () {
  let index1 = document.getElementById("soViTri1").value;
  let index2 = document.getElementById("soViTri2").value;

  let temp = numArr[index1];
  numArr[index1] = numArr[index2];
  numArr[index2] = temp;

  document.getElementById("txtDoiCho").innerHTML =
    "Mảng sau khi đổi: " + numArr;
};

// Sắp xếp tăng dần
document.getElementById("btnSapXep").onclick = function () {
  for (let i = 0; i < numArr.length - 1; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] > numArr[j]) {
        let temp = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = temp;
      }
    }
  }
  document.getElementById("txtSapXep").innerHTML =
    "Mảng sau khi sắp xếp: " + numArr;
};

// Tìm số nguyên tố đầu tiên
document.getElementById("btnSoNT").onclick = function () {
  function ktSNT(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  function timSNTDauTien(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (ktSNT(arr[i])) {
        return arr[i];
      }
    }
    return (document.getElementById("txtSoNT").innerHTML =
      "Không có số nguyên tố");
  }

  document.getElementById("txtSoNT").innerHTML = timSNTDauTien(numArr);
};

// Đếm số nguyên
let numArr1 = [];
document.getElementById("btnSoNguyen").onclick = function nhapSo() {
  let num = Number(document.getElementById("inputNhapSo").value);
  numArr1.push(num);

  document.getElementById("txtSoNguyen").innerHTML = numArr1;
};

document.getElementById("btnDemSoNguyen").onclick = function () {
  let soNguyen = 0;
  for (let i = 0; i < numArr1.length; i++) {
    if (Number.isInteger(numArr1[i])) {
      soNguyen++;
    }
  }
  document.getElementById("txtDemSoNguyen").innerHTML =
    "Số nguyên: " + soNguyen;
};

// So sánh số âm và số dương
document.getElementById("btnSoSanh").onclick = function () {
  let soAm = 0;
  let soDuong = 0;
  let soSanh = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < 0) {
      soAm++;
    } else if (numArr[i] > 0) {
      soDuong++;
    }
  }

  if (soAm > soDuong) {
    soSanh = "Số âm > Số dương";
  } else if (soAm < soDuong) {
    soSanh = "Số âm < Số dương";
  } else {
    soSanh = "Số âm = Số dương";
  }
  document.getElementById("txtSoSanh").innerHTML = soSanh;
};
