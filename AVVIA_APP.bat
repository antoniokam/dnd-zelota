@echo off
title D&D 5e Zelota Companion - Server Locale
echo ========================================================
echo   D&D 5e Zelota Companion & Character Builder
echo   Server Locale per Mobile, Tablet e Onyx BOOX
echo ========================================================
echo.
echo.
echo [1] Dal PC: apri http://localhost:8080
echo.
echo [2] Da SMARTPHONE, TABLET e ONYX BOOX:
echo     1. Connettiti alla stessa rete Wi-Fi del PC
echo     2. Apri il browser (Chrome, Safari, NeoBrowser) e digita:
echo.
echo        ==^>  http://192.168.1.8:8080  ^<==
echo.
echo     3. Clicca sui 3 puntini del browser e scegli:
echo        "Aggiungi a schermata Home" o "Installa App"
echo.
echo (Il tuo IP attuale e':)
ipconfig | findstr /i "IPv4"
echo.
echo Premi CTRL+C per arrestare il server.
echo.
start http://localhost:8080
python -m http.server 8080
pause
