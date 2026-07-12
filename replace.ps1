$files = @(
  "d:\Vidhata\services.html",
  "d:\Vidhata\quality.html",
  "d:\Vidhata\index.html",
  "d:\Vidhata\infrastructure.html",
  "d:\Vidhata\js\animations.js",
  "d:\Vidhata\css\animations.css",
  "d:\Vidhata\case-studies.html",
  "d:\Vidhata\about.html"
)
foreach ($f in $files) {
    if (Test-Path $f) {
        $c = Get-Content $f
        $c = $c -replace 'rgba\(30,111,255,', 'rgba(37, 99, 235,'
        $c = $c -replace 'rgba\(245,166,35,', 'rgba(224, 176, 52,'
        $c = $c -replace 'rgba\(0, 229, 255,', 'rgba(37, 99, 235,'
        $c = $c -replace 'rgba\(0,229,255,', 'rgba(37, 99, 235,'
        Set-Content -Path $f -Value $c
    }
}
