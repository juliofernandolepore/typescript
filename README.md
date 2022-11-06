# typescript
---

https://www.typescriptlang.org/download ahi estan las instrucciones en detalle.

---
OPCIONAL: npm install webpack webpack-cli webpack-dev-server    (para tratar el tema modulos y se ejecute la app).

OPCIONAL: npm install typescript ts-loader --save-dev

OPCIONAL: npm init -y  (crea el paquete.json).

---

recordar que si sale error deben ejecutar los comandos en la consola o powershell:

Type Set-ExecutionPolicy RemoteSigned to set the policy to RemoteSigned.

Type Set-ExecutionPolicy Unrestricted to set the policy to Unrestricted.

Type Get-ExecutionPolicy to verify the current settings for the execution policy.

---

instalacion y uso typescript. (recordar usar terminales en modo administrador).

(INSTALACION GLOBAL) primero instalar typescript via npm a traves del siguiente comando con el powershell, cmd de windows o bash en el directorio del curso

npm install -g typescript

---
npm install typescript --save-dev

npx tsc

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