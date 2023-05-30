// nhap du lieu
let studentList = [];
let student = [];
let studentId;
let studentName;
let age;
let mark_html;
let mark_css;
let mark_js;
let avgMark;
let rank;

for (let i = 0; i < 5; i++) {
  do {
    studentId = prompt(
      `Nhập mã sinh viên ${i + 1}  (gồm 5 ký tự và bắt đầu bằng chữ S)`
    );
    if (studentId.length == 5 && studentId.startsWith("S") == true) {
      student.push(studentId);
      break;
    } else {
      continue;
    }
  } while (true);
  do {
    studentName = prompt(`Nhập tên sinh viên ${i + 1} (gồm 6-30 ký tự)`);
    if (studentName.length >= 6 && studentName.length <= 30) {
      student.push(studentName);
      break;
    } else {
      continue;
    }
  } while (true);

  do {
    age = prompt(`Nhập tuổi sinh viên ${i + 1} (từ 18-30 tuổi)`);
    if (!isNaN(age) && age.length == 2 && 18 <= Number(age) <= 30) {
      student.push(age);
      break;
    } else {
      continue;
    }
  } while (true);

  do {
    mark_html = prompt(
      `Nhập điểm html của sinh viên ${
        i + 1
      }(thuộc dạng số và có giá trị trong khoảng 0-10)`
    );
    if (!isNaN(mark_html) && 0 <= Number(mark_html) <= 10) {
      student.push(mark_html);
      break;
    } else {
      continue;
    }
  } while (true);

  do {
    mark_css = prompt(
      `Nhập điểm css của sinh viên ${
        i + 1
      }(thuộc dạng số và có giá trị trong khoảng 0-10)`
    );
    if (!isNaN(mark_css) && 0 <= Number(mark_css) <= 10) {
      student.push(mark_css);
      break;
    } else {
      continue;
    }
  } while (true);

  do {
    mark_js = prompt(
      `Nhập điểm javascript của sinh viên ${
        i + 1
      }(thuộc dạng số và có giá trị trong khoảng 0-10)`
    );
    if (!isNaN(mark_js) && 0 <= Number(mark_js) <= 10) {
      student.push(mark_js);
      break;
    } else {
      continue;
    }
  } while (true);
  avgMark = (Number(mark_html) + Number(mark_css) + Number(mark_js)) / 3;
  if (avgMark < 5) {
    rank = "Yếu";
  } else if (avgMark < 7) {
    rank = "Trung bình";
  } else if (avgMark < 8) {
    rank = "Khá";
  } else if (avgMark < 9) {
    rank = "Giỏi";
  } else {
    rank = "Xuất sắc";
  }
  student.push(avgMark);
  student.push(rank);
  studentList.push(student);
  student = [];
}
console.log(studentList);
let studentList2 = studentList.slice();
// Sap xep sinh vien theo diem trung binh tang dan roi in ra
let len = studentList2.length;
for (i = 0; i < len; i++) {
  let current = studentList2[i];
  let j = i - 1;
  while (j >= 0 && studentList2[j][6] > current[6]) {
    studentList2[j + 1] = studentList2[j];
    j--;
  }
  studentList2[j + 1] = current;
}
console.log(studentList2);

// tim kiem sinh vien theo ten sinh vien
let studentNameSearch;
let success = false;
do {
  studentNameSearch = prompt(
    "Nhập tên sinh viên muốn tìm kiếm (gồm 6-30 ký tự)"
  );
  if (studentNameSearch.length >= 6 && studentNameSearch.length <= 30) {
    break;
  } else {
    continue;
  }
} while (true);
console.log("kết quả tìm kiếm theo tên sinh viên là :");
for (let i = 0; i < len; i++) {
  if (studentList2[i][1].includes(studentNameSearch)) {
    console.log(studentList2[i]);
    success = true;
    continue;
  } else {
    continue;
  }
}
if (!success) {
  console.log("Không tìm thấy sinh viên nào có tên là " + studentNameSearch);
}
