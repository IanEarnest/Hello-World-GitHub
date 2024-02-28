#./CreateFile.ps1 -Path './newfile.txt' # File ./newfile.txt was created.

# CreateFile.ps1
#Param (
#  $Path
#)
#New-Item $Path # Creates a new file at $Path.
#Write-Host "File $Path was created"

Param (
    [Parameter(Mandatory, HelpMessage = "Please provide a valid path")]
    [string]$param1
)

If (-Not $param1 -eq '') {
    #New-Item $parm1
    Write-Host "Params used: $param1" 
 } Else {
    Write-Error "param empty"
 } 


Write-Host "Hello World, You are running PowerShell Version: $($PSVersionTable.PSVersion.ToString())"
