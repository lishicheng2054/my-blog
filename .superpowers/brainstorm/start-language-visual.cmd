@echo off
set "SESSION_DIR=%~dp0language-switch-visual"
if not exist "%SESSION_DIR%\content" mkdir "%SESSION_DIR%\content"
if not exist "%SESSION_DIR%\state" mkdir "%SESSION_DIR%\state"
del /q "%SESSION_DIR%\state\server-stopped" 2>nul
set "BRAINSTORM_DIR=%SESSION_DIR%"
set "BRAINSTORM_HOST=127.0.0.1"
set "BRAINSTORM_URL_HOST=127.0.0.1"
set "BRAINSTORM_OWNER_PID="
cd /d "C:\Users\lsc15\.codex\skills\brainstorming\scripts"
node server.cjs
