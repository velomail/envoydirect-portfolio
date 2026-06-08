param(
  [int]$Port = 3000
)

$connections = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue

if ($connections) {
  $pids = $connections.OwningProcess | Sort-Object -Unique
  foreach ($pid in $pids) {
    try {
      Stop-Process -Id $pid -Force -ErrorAction Stop
      Write-Host "Stopped process $pid on port $Port."
    } catch {
      Write-Warning "Could not stop process $pid on port $Port."
    }
  }
} else {
  Write-Host "Port $Port is free."
}

$root = Split-Path $PSScriptRoot -Parent
$nextDir = Join-Path $root ".next"
if (Test-Path $nextDir) {
  Remove-Item -Recurse -Force $nextDir
  Write-Host "Removed .next cache."
}

Set-Location $root
npm run dev
