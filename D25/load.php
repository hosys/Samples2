<?php

$data = file('data.txt');
echo stripcslashes( $data[0] );

?>