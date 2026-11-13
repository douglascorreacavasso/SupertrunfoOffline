@echo off
cd /d "%~dp0"
echo Abrindo o Super Trunfo no navegador...
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 1; Start-Process 'http://localhost:8765/index.html'"
python -m http.server 8765 || py -m http.server 8765 || (echo Python nao encontrado. Abra index.html e use somente imagens ja existentes na pasta decks. & start "" index.html)
