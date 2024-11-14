class Student {
    constructor(id, name, clas, email, birthday) {
        this.id = id;
        this.name = name;
        this.clas = clas;
        this.email = email;
        this.birthday = birthday;

    }
}

function updateStudentList() {
    let update = "<tr>" +
        "<th>Mã học viên</th>\n" +
        "<th>Tên</th>\n" +
        "<th>Lớp</th>\n" +
        "<th>Email</th>\n" +
        "<th>Ngày sinh</th>\n" +
        "</tr>"
    for (let i = 0; i < studentArray.length; i++) {
        update += "<tr>\n" +
            "<td>" + studentArray[i].id + "</td>\n" +
            "<td>" + studentArray[i].name + "</td>\n" +
            "<td>" + studentArray[i].clas + "</td>\n" +
            "<td>" + studentArray[i].email + "</td>\n" +
            "<td>" + studentArray[i].birthday + "</td>\n" +
            "</tr>"
    }
    studentTable.innerHTML = update;
}

function addStudent() {
    let studentID = addStudentId();
    let studentName = addStudentName();
    let studentClass = addStudentClass();
    let studentEmail = prompt(`Email học viên:`);
    let studentDateOfBirth = addStudentBirthday();
    let newStudent = new Student(studentID, studentName, studentClass, studentEmail, studentDateOfBirth);
    studentArray.push(newStudent);
    updateStudentList();
}

function addStudentId() {
    let studentID = prompt(`Mã học viên:`);
    if (studentID.length === 7 && studentID.slice(0, 3) === "HV-" && !isNaN(studentID.slice(3))) {
        console.log(studentID.slice(3));
        console.log(isNaN(studentID.slice(3)));
        for (let i = 0; i < studentArray.length; i++) {
            if (studentArray[i].id === studentID) {
                alert(`Mã học viên đã tồn tại`);
                studentID = prompt(`Mã học viên:`);
                i = 0;
            }
        }
    } else {
        alert(`Mã học viên có dạng HV-xlsx`);
        studentID = addStudentId();
    }
    return studentID;
}

function addStudentName() {
    let studentName = prompt(`Tên học viên:`);
    while (studentName.length > 50) {
        alert(`Tên học viên giới hạn 50 kí tự`);
        studentName = prompt(`Tên học viên:`);
    }
    return studentName;
}

function addStudentClass() {
    let studentClass = +prompt(`Lớp học viên:`);
    while (isNaN(studentClass) || studentClass < 1 || studentClass > 6) {
        alert(`Lớp học viên hợp lệ là từ 1-6`);
        studentClass = +prompt(`Lớp học viên:`);
    }
    return studentClass;
}

function addStudentBirthday() {
    let studentBirthday = prompt(`Sinh nhật học viên:`);
    let birthdayArray = studentBirthday.split("/");
    let dayOfMonth;
    if (birthdayArray.length !== 3) {
        alert(`Sinh nhật có định dạng dd/mm/yyyy`);
        studentBirthday = addStudentBirthday();
    } else if (isNaN(birthdayArray[0]) || birthdayArray[0].length !== 2 || birthdayArray[0] >31) {
        alert(`Sinh nhật có định dạng dd/mm/yyyy`);
        studentBirthday = addStudentBirthday();
    } else if (isNaN(birthdayArray[1]) || birthdayArray[1].length !== 2 || birthdayArray[1] <= 0 || birthdayArray[1] > 12) {
        alert(`Sinh nhật có định dạng dd/mm/yyyy`);
        studentBirthday = addStudentBirthday();
    } else if (isNaN(birthdayArray[2]) || birthdayArray[2].length !== 4 || birthdayArray[2] <= 0) {
        alert(`Sinh nhật có định dạng dd/mm/yyyy`);
        studentBirthday = addStudentBirthday();
    } else {
        if (birthdayArray[1] == 4 || birthdayArray[1] == 6 || birthdayArray[1] == 9 || birthdayArray[1] == 11) {
            dayOfMonth = 30;
        } else if (birthdayArray[1] == 2) {
            dayOfMonth = 28;
        } else {
            dayOfMonth = 31;
        }
    }
    if (birthdayArray[0] > dayOfMonth) {
        alert(`Tháng ${birthdayArray[1]} có ${dayOfMonth} ngày`);
        studentBirthday = addStudentBirthday();
    }
    return studentBirthday;
}

function adjustStudent() {
    let student = prompt(`Mã học viên cần sửa:`);
    let flag = true
    for (let i = 0; i < studentArray.length; i++) {
        if (studentArray[i].id === student) {
            flag = false;
            studentArray[i].id = prompt(`Mã học viên mới:`);
            studentArray[i].name = prompt(`Tên học viên mới:`);
            studentArray[i].clas = prompt(`Lớp học viên mới:`);
            studentArray[i].email = prompt(`Email học viên mới:`);
            studentArray[i].birthday = prompt(`Sinh nhật học viên:`);
        }
    }
    if (flag) {
        alert(`Mã học viên không tồn tại!`);
    }
    updateStudentList();
}

function deleteStudent() {
    let student = prompt(`Mã học viên cần xoá:`);
    let flag = true
    for (let i = 0; i < studentArray.length; i++) {
        if (studentArray[i].id === student) {
            flag = false;
            let confirmDelete = confirm(`Xác nhận xoá`);
            if (confirmDelete) {
                studentArray.splice(i, 1);
            }
        }
    }
    if (flag) {
        alert(`Mã học viên không tồn tại!`);
    }
    updateStudentList();
}

let studentTable = document.getElementById("studentTable");
let studentArray = [];
let student1 = new Student("HV-0001", "Nguyễn Văn A", "C1022G1", "nguyenvana@gmail.com", "01/01/2004");
studentArray.push(student1);
let student2 = new Student("HV-0002", "Nguyễn Văn B", "C1122G1", "nguyenvanb@gmail.com", "01/01/2004");
studentArray.push(student2);
let student3 = new Student("HV-0003", "Nguyễn Văn C", "C1222G1", "nguyenvanc@gmail.com", "01/01/2004");
studentArray.push(student3);
updateStudentList();