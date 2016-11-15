<?php
$query = $_GET['country'];
$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
$stmt = $conn->query("SELECT * FROM countries");
$stmts = $conn->query("SELECT * FROM countries WHERE name LIKE '%$query%'");
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$results1 = $stmts->fetchAll(PDO::FETCH_ASSOC);
/*echo '<ul>';
foreach ($results as $row) {
    $countries=[$row['name'].' is ruled by ' .$row['head_of_state'] . '</li>'];
    
     echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
 echo '</ul*/
 echo '<ul>';
foreach ($results1 as $row) {
    $countries=[$row['name'].' is ruled by ' .$row['head_of_state'] . '</li>'];
    
     echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
 echo '</ul>';
           // print $query;
           // print strtoupper($query);
          //  print $row['name'];
