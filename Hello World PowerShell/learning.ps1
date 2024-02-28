#./learning.ps1 -param1 'aaa' 

Param (
    [string]$param1
)
    
Write-Host "Start - learning.ps1 - `$param1 = $param1" 

Function mainFunc {
    Param (
        [string]$fparam1
    )
    
    if($fparam1 -eq "1") {
        myFunc1
    } 
    ElseIf ($fparam1 -eq "2") {
        myFunc2
    }
    else {
        write "params not used" 
    }

    <#
    If (-Not $param1 -eq '') {
        #New-Item $parm1
        Write-Host "Params used: $param1" 
    } 
    #>
}

Function myFunc1 {
    write "do func1"
}

Function myFunc2 {
    write "do func2"
    
    $something1 = "something"
    write "`$something1 = $something1"
}
 



# Run Main
mainFunc -fparam1 $param1

Write-Host "End - learning.ps1"
return;
    
    
<#
# If stuff...

#-le operator # <=
$Value = 3
If ($Value -le 0) 
{
  Write-Host "Is negative"
}
If ($Value -le 5) 
{
  Write-Host "Is less than 5"
}

#If ($Status -eq $True) 

# Possible values: 'Minor', 'Adult', 'Senior Citizen'
$Status = 'Minor'
#$Status = 'Adult'
#$Status = 'Senior Citizen'
If ($Status -eq 'Minor') 
{
    Write-Host "Is minor"
} ElseIf ($Status -eq 'Adult') {
    Write-Host $True
} Else {
    Write-Host $False
}

$Status = 'Adult'
If ($Status -eq 'Minor') 
{
    Write-Host "Is minor"
} ElseIf ($Status -eq 'Adult') {
    Write-Host $True
} Else {
    Write-Host $False
}

$Status = 'Senior Citizen'
If ($Status -eq 'Minor') 
{
    Write-Host "Is minor"
} ElseIf ($Status -eq 'Adult') {
    Write-Host $True
} Else {
    Write-Host $False
}
#>

# Read data
#$data = Read-Host -Prompt "Enter data"
#Write-Host "data = $data"

#Error handling - Terminating error and Non-terminating error
# trap?


# files - rename
#mv myDirOldName myDirNewName
# files - remove
#rm backup-<current date as YYYY-MM-DD>.zip
#Remove-Item *zip
# Files - Create new file
#New-Item HelloWorld.ps1 # or #New-Item -Path . -Name "PI.ps1" -ItemType "file"
#code HelloWorld.ps1 
#Write-Output 'Hello World!'



#Get-ExecutionPolicy
#Set-ExecutionPolicy
#Write-Output

#Get-Command
#Get-Help
#Get-Member

# Help
# Get updated version, sometimes you don't have all help commands by default
#Update-Help -UICulture en-US -Verbose # -force
#   ERROR... Update-Help: Failed to update Help for the module(s) 'ConfigDefenderPerformance, MMAgent, NetAdapter, NetConnection, NetEventPacketCapture, NetLbfo, NetNat, NetQos, NetSecurity, NetSwitchTeam, NetTCPIP, NetworkConnectivityStatus, NetworkSwitchManager, NetworkTransition, PcsvDevice, PKI, PnpDevice, ProcessMitigations, PSReadline, WindowsUpdateProvider' with UI culture(s) {en-US} : One or more errors occurred. (Response status code does not indicate success: 404 (The specified blob does not exist.).).
#   English-US help content is available and can be installed using: Update-Help -UICulture en-US.
# Use
#Get-Help cd
#Get-Help -Name 'Write-Output' -Full
#Get-Help -Name Get-Help
#Get-Help Get-FileHash -Examples
#help Get-FileHash
# Process, pipeline - https://learn.microsoft.com/en-us/training/modules/discover-commands/4-discover-objects
# Commands connected by pipe |
#Get-Process # list of running processes
#Get-Process -Name 'name-of-process' | Get-Member
#Get-Command -ParameterType Process
#Get-Process -Name 'explorer' | Get-Member | Select-Object Name, MemberType
#Get-Command -ParameterType Process
#Get-Process | Get-Member # https://learn.microsoft.com/en-us/training/modules/connect-commands/2-select-data
#Get-Process | Where-Object CPU -gt 2 | Sort-Object CPU -Descending | Select-Object -First 3
# Formatting left/right
#"a string" | Get-Member | Format-List

# Searching for commands/cmdlts #https://learn.microsoft.com/en-us/training/modules/introduction-to-powershell/4-cmdlets
#Get-Command -Noun File*
#Get-Command -Verb Get -Noun File*

#https://learn.microsoft.com/en-us/training/modules/script-with-powershell/2-introduction-scripting

# Profile/ customized environment

# start new session
#pwsh 

# look at profiles
#$Profile | Select-Object * 

# Create new profile
#New-Item `
#  -ItemType "file" `
#  -Value 'Write-Host "Hello Ian, welcome back" -foregroundcolor Green ' `
#  -Path $Profile.CurrentUserCurrentHost -Force

