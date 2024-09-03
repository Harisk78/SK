<?php
$servername = "localhost";  
$username = "root"; 
$password = "";
$dbname = "hari_sk"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<?php
// Include the database connection file
include('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Query to check if the user exists in the database
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User found, start a session and redirect to home page
        session_start();
        $_SESSION['username'] = $username;
        header("Location: index.html"); // Redirect to home page
        exit();
    } else {
        // User not found, display error message
        echo "<script>alert('Invalid username or password.'); window.location.href='login.html';</script>";
    }
}
?>
