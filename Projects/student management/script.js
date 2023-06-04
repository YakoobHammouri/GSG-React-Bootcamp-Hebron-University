const student = {
  ID: 1,
  FirstName: "Jane",
  LastName: "Smith",
  age: 22,
  Gender: "Female",
  Email: "janesmith@example.com",
  PhoneNumber: "987-654-3210",
  Address: "456 Elm Street",
  Major: "Psychology",
  YearOfStudy: "4",
  Status: "Pending",
  isDelete: false,
};

const student2 = {
  ID: 2,
  FirstName: "John",
  LastName: "Doe",
  age: 20,
  Gender: "Male",
  Email: "johndoe@example.com",
  PhoneNumber: "123-456-7890",
  Address: "123 Main Street",
  Major: "Computer Science",
  YearOfStudy: "2",
  Status: "Active",
  isDelete: false,
};

const showStudent = (stdId) => {
  console.log("stdId", stdId);
  const studentData = document.getElementById("std-data");
  if (stdId === 1) {
    studentData.classList.remove("display-block");
    studentData.classList.add("display-none");
    alert("The Student is Pending");
  } else {
    studentData.classList.remove("display-none");
    studentData.classList.add("display-block");
  }
};
