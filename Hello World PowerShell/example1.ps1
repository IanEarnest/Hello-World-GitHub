#./example1.ps1 -param1 'aaa' 

Param (
    [Parameter(Mandatory, HelpMessage = "Please provide a valid path")]
    [string]$param1
)

$message = ""

If (-Not $param1 -eq '') {
    #New-Item $parm1
    $message = "Params used: $param1" 
 } Else {
    Write-Error "param empty"
 } 


Write-Host "$message" 
