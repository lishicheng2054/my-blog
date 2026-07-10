@echo off
cd /d "%~dp0language-switch-visual\content"
"C:\Users\lsc15\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 52358 --bind 127.0.0.1
