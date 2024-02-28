# Take the folder "/important" and creates a zip with it in "/backups"
Param(
  #[Parameter(Mandatory, HelpMessage = "Please provide a valid path")]
  [string]$Path = './important',
  [string]$DestinationPath = './backups/',
  [switch]$PathIsWebApp
)
Write-Host "backing up... Path: $Path, DestinationPath: $DestinationPath"

#If (-Not $param1 -eq '') {


If (-Not (Test-Path $Path)) 
{
  Throw "The source directory $Path does not exist, please specify an existing directory"
}

try {
  # Check for html files
  If ($PathIsWebApp -eq $True) {
    Try 
    {
      $ContainsApplicationFiles = "$((Get-ChildItem $Path).Extension | Sort-Object -Unique)" -match  '\.js|\.html|\.css'
 
      If ( -Not $ContainsApplicationFiles) {
        #Throw "Not a web app"
        Write-Host "Source files do not contain web"
      } Else {
        Write-Host "Source files contain web"
      }
    } Catch {
     Throw "No backup created due to: $($_.Exception.Message)"
    }
 }
}
catch {
  
}


try {
    $date = Get-Date -format "yyyy-MM-dd-HHmmss"
    # check if already exists
    $DestinationFile = "$($DestinationPath + 'backup-' + $date + '.zip')"
    If (-Not (Test-Path $DestinationFile)) 
    {
      Compress-Archive -Path $Path -CompressionLevel 'Fastest' -DestinationPath "$($DestinationPath + 'backup-' + $date)"
      Write-Host "Created backup at $DestinationFile"
    } Else {
      Write-Error "backup already exists"
    }    

    #force stop
    #Get-Content './file.txt' -ErrorAction Stop

}
#Catch [System.IO.IOException] {
catch {
  Write-Host "backup failed - error:"
  Write-Host $_ # exception
  #Throw "No backup created due to: $($_.Exception.Message)"
  # Write-Host "Something IO went wrong: $($_.exception.message)"
  #Throw 
}

