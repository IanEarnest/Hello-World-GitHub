# install PS7 and run with VS Code extension

# run with 
#.\main.ps1

# Hello World
write "Hello World - You are running PowerShell Version: $($PSVersionTable.PSVersion.ToString())"
#return


# Run code
write ""
write "learning.ps1..."
./learning.ps1 

write ""
write "learning.ps1... -1"
./learning.ps1 -param1 "1"

write ""
write "learning.ps1... -2"
./learning.ps1 -param1 "2"

return

# Run example1
#./example1.ps1 -param1 'aaa'

# Run backup
./backup.ps1
#./backup.ps1 -Path './important' -DestinationPath './backups/' -PathIsWebApp