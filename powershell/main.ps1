# 異体字リストを外部のJSONファイルから読み込む
$jsonFilePath = "./seijitai.json"
$characterMap = Get-Content -Raw -Path $jsonFilePath | ConvertFrom-Json -AsHashtable

# 引数チェック（ファイルパスとオプションを受け取る）
if ($args.Length -lt 1) {
    Write-Host "エラー: 対象のテキストファイルを指定してください。"
    exit
}

$filePath = $args[0]
$action = if ($args.Length -gt 1 -and $args[1] -eq "--replace") { $args[1] } else { "" }

# ファイルの存在確認
if (-Not (Test-Path $filePath)) {
    Write-Host "エラー: ファイルが見つかりません。パスを確認してください。"
    exit
}

# ファイルの内容を読み込む
try {
    $text = Get-Content -Raw -Path $filePath
} catch {
    Write-Host "エラー: ファイルを読み込めませんでした。"
    exit
}

# 異体字が含まれているかを確認し、リストアップ
$foundGaiji = @() # 異体字が見つかった場合に格納する配列

foreach ($key in $characterMap.Keys) {
    if ($text -match $key) {
        $foundGaiji += $key # 見つかった異体字をリストに追加
    }
}

# 異体字が見つかったかどうかを表示
if ($foundGaiji.Count -gt 0) {
    Write-Host "テキストに含まれる異体字: $($foundGaiji -join ', ')"
} else {
    Write-Host "テキストに異体字は含まれていません。"
}

# "--replace" 引数が指定されている場合は、異体字を通常の文字に置換
if ($action -eq "--replace") {
    foreach ($key in $characterMap.Keys) {
        $text = $text -replace $key, $characterMap[$key]
    }

    # 変換後のファイル名を作成（元のファイル名に "_converted" を追加）
    $directory = Split-Path $filePath -Parent
    if (-not $directory) {
        $directory = Get-Location # カレントディレクトリを使用
    }
    $fileName = [System.IO.Path]::GetFileNameWithoutExtension($filePath)
    $fileExtension = [System.IO.Path]::GetExtension($filePath)
    $newFilePath = Join-Path $directory "$fileName`_replaced$fileExtension"

    # 変換後のテキストを新しいファイルに保存
    Set-Content -Path $newFilePath -Value $text
    Write-Host "変換後のテキストを $newFilePath に保存しました。"
} else {
    # 置換しない場合は、置換コマンドのヒントを表示
    if ($args.Length -eq 1) {
        Write-Host "置換は行われません。置換まで行う場合は以下のように実行してください。"
        Write-Host "pwsh ./main.ps1 $filePath --replace"
    }
}
