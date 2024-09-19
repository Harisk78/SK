<?php
// Database connection variables
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sk";

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
    header("Location:https://harisk78.github.io/SK/Project/list.html");
    exit(); // Exit the script after redirect
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
