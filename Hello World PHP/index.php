<!DOCTYPE html>
<html>
<body>

<h1>About</h1>
<p>
    Launch from Run and Debug - Hello World PHP
    Using XDebug - config...
</p>
<code>
{
    "name": "Hello World PHP",
    "type": "php",
    "request": "launch",
    //"program": "index.php",
    "program": "",
    "cwd": "${workspaceRoot}/Hello World PHP",
    "serverReadyAction": {
    },
    "runtimeArgs": [
        "-dxdebug.mode=debug",
        "-dxdebug.start_with_request=yes",
        "-S",
        "localhost:9000"
        ],
        "port": 9000
    },
</code>
</br>
</br>

<h1>Links</h1>
<a href="/footer.php">Footer.php</a>
</br>
<a href="/footer2.php">Footer2.php</a>
</br>
</br>

<h1>Include Footer.php...</h1>
<?php include 'footer.php';?>
</br>
</br>

</body>
</html>
