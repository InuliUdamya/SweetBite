
<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phoneno = $_POST['phoneno'];
$message = $_POST['message'];

//Database connection
$conn = new mysqli('localhost','your_db_user','your_dp_password','db_name');
if($conn->connect_error){
    echo json_encode(['success' => false, 'error' => 'Connection Failed: ' . $conn->connect_error]);
    exit();
}else{
    $stmt = $conn->prepare("INSERT INTO contact(name, email, phoneno, message)
     VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phoneno, $message);
    
    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => $stmt->error]);
    }

    $stmt->close();
    $conn->close();
}
?>

