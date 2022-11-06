# typescript

instalacion y uso typescript. (recordar usar terminales en modo administrador).
---
npm install typescript --save-dev

npx tsc


(INSTALACION GLOBAL) primero instalar typescript via npm a traves del siguiente comando con el powershell, cmd de windows o bash en el directorio del curso

npm install -g typescript

---

tsc --watch

//o tambien sirve para compilar al .js

tsc -w

//otro comando muy util

tsc -w & nodemon app.js

---

luego necesitan ejecutar el siguiente comando que va a crear un .json de configuracion

tsc init

---

ahora hay que ejecutar compilardor del archivo creado como por ejemplo     ./practica1.ts

tsc ./practica1.tsc

---

//recordar que si sale error deben ejecutar los comandos en la consola o powershell:

Type Set-ExecutionPolicy RemoteSigned to set the policy to RemoteSigned.

Type Set-ExecutionPolicy Unrestricted to set the policy to Unrestricted.

Type Get-ExecutionPolicy to verify the current settings for the execution policy.

---

https://www.typescriptlang.org/download ahi estan las instrucciones en detalle.
