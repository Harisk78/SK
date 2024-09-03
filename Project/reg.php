<?php
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uname VARCHAR(50),
    uemail VARCHAR(100),
    upass VARCHAR(255),
    cmpass VARCHAR(255),
    age INT,
    tell VARCHAR(15)
);
// Database connection variables
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// User input data (usually from a form)
$uname = $_POST['uname'];
$uemail = $_POST['uemail'];
$upass = password_hash($_POST['upass'], PASSWORD_DEFAULT); // Hash the password for security
$cmpass = password_hash($_POST['cmpass'], PASSWORD_DEFAULT); // Hash the confirm password for security
$age = $_POST['age'];
$tell = $_POST['tell'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (uname, uemail, upass, cmpass, age, tell) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssds", $uname, $uemail, $upass, $cmpass, $age, $tell);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>