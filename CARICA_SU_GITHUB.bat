@echo off
chcp 65001 >nul
title Aggiornamento D&D Zelota su GitHub...
cd /d "%~dp0"
echo ========================================================
echo    Sincronizzazione D&D Zelota su GitHub
echo ========================================================
echo.
echo [1/3] Rilevamento modifiche...
git add .

echo [2/3] Creazione commit...
git commit -m "Aggiornamento automatico: %date% %time%"

echo [3/3] Invio modifiche a GitHub...
git push origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo  COMPLETATO CON SUCCESSO!
    echo  GitHub Pages si aggiornera' online entro 30 secondi.
    echo  Sul cellulare/Boox vedrai il banner di aggiornamento!
    echo ========================================================
) else (
    echo ========================================================
    echo  Nessuna nuova modifica da caricare o verifica connessione.
    echo ========================================================
)
echo.
pause
