<?php

$files = [];
$filesString = `smbclient //192.168.1.2/vagrant -U vagrant%vagrant -c ls`;

$regex = '/\s+(.+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+ (\S+)\s+(\S+)\s+(\S+)\n/';
preg_match_all($regex, $filesString, $matches);

foreach ($matches[1] as $index => $filename) {
    $files[] = [
        "type" => $matches[2][$index],
        "size" => $matches[3][$index],
        "date"=> [
            "wday" => $matches[4][$index],
            "month" => $matches[5][$index],
            "day" => $matches[6][$index],
            "time" => $matches[7][$index],
            "year" => $matches[8][$index]
        ],
        "name" => trim($filename)
    ];
}

header('Content-type: application/json; charset=UTF-8');
header("Access-Control-Allow-Origin: *");
echo json_encode($files);