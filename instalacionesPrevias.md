//primero instalar typescript via npm a traves del siguiente comando con el powershell, cmd de windows o bash en el directorio del curso

npm install -g typescript

//luego necesitan ejecutar el siguiente comando que va a crear un .jason de configuracion

tsc init

//ahora hay que ejecutar compilardor del archivo creado como por ejemplo
./practica1.ts

tsc ./practica1.tsc

//recordar que si sale error deben ejecutar los comandos en la consola o powershell:
Type Set-ExecutionPolicy RemoteSigned to set the policy to RemoteSigned.
Type Set-ExecutionPolicy Unrestricted to set the policy to Unrestricted.
Type Get-ExecutionPolicy to verify the current settings for the execution policy.



