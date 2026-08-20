<?php
echo "<pre>";
echo "HTTP_HOST: " . $_SERVER['HTTP_HOST'] . "\n";
echo "REQUEST_URI: " . $_SERVER['REQUEST_URI'] . "\n";
echo "SCRIPT_NAME: " . $_SERVER['SCRIPT_NAME'] . "\n";
echo "REQUEST_SCHEME: " . $_SERVER['REQUEST_SCHEME'] . "\n";
echo "</pre>";

// Includes Apache version:
phpinfo();