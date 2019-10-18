
Data
=======

* test user

```
gustavo4 : GUS123gus123!
```


Process
=========

## Create angular applicacion 

```
ng new todolist-angular-cognito-example
```


## create base component

* component login, register and notes

```
ng g c login
ng g c register
ng g c notes
```

## configure route of applicacion

- main
    - login
    - register
    - notes (only with access)


## formulario registro

* en register.component.html se crea formulario de registro con campos
    * - Username
    * - Password
    * - Firstname
    * - Lastname
    * - Email

* instalo dependencia 'aws-sdk'

```
npm install aws-sdk --save
```

* instalar depencia 'amazon-cognito-identity-js'

```
npm i amazon-cognito-identity-js --save
```

* en registration.component.ts se usa funcion 'doRegister' para registrar usuario. 
    * se llama servicio RegistrationService
    * se usa ademas servicio CognitoUtils
    * datos de usuario se guardan en localStorage (se usa LocalStorageService)


## Configuracion Cognito (AWS)

#### Grupo de usuario

* AWS Consoel > Cognito > Grupo de usuario

* crear grupo de usuario
    * nombre: mytodolist-development-userPool
    * seleccionar recorrido por la configuracion.

    * attributos
        * seleccionar nombre de usuario
        * como atributos obligatorios
            * email
            * family name
            * given name
    * politicas
        * dejar valores por defecto
    * MFA y verificaciones
        * dejar valores por defecto
    * personalizacion del mesaje
        * dejar valores por defecto
    * etiquetas
        * no añadir ninguna etiqueta
    * dispositivo
        * NO recordar dispositivo de usuario.
    * cliente de aplicacion 
        * completar despues de crear grupo de usuario
    * desencadenadores
        * dejar valore por defecto


* ir a configuracion general > cliente de aplicacion
    * elegir nombre: mytodolist-development-userPool-app-client
    * actualizar el vencimiento del token (dias): 30 
    * generar clave secreta de cliente (SIN CHECK)
    * attributos de lectura
        * ambitos: correo electronico. atributos: (email, email verified, family name, given name, name, preferred username, updated at).
        * sin checkear ambitos atributos: email, family name, given name, name, preferred username, updated at.

* ir a integracion de aplicacion  > Configuracion del cliente de applicacion
    * en la configuracion del cliente 'mytodolist-development-userPool-app-client'
        * checkear seleccionar todo (selecciona cognito user Pool)
        * direccion de devolucion de llamada: http://localhost:4200
        * en 'Flujos de OAuth permitidos': checkear 'Authorization code grant'
        * en 'Ámbitos de OAuth permitidos': checkear 'email', 'openid', 'profile'


* ir a integracion de aplicacion  > Nombre del dominio
    * elegir dominio:  mytodolist-development-ggp




#### Grupo de identidad

* AWS Consoel > Cognito > Grupo de identidad
    * crea grupo de identidad
        * definir nombre: mytodolist_development_identityPool
        * identidades sin identificar: 
            * dejar sin check
        * proveedores de autentificacion
            * seleccionar cognito
            * setear valor de id del grupo de usuario  (ex: `us-east-1_nZCwIrFzR`)
            * setear valor de id cliente de applicacion (ex: `44ce6s1okjh7pst2klvf811rdr`)
        * crear un grupo.
        * aceptar roles que se crearon para el grupo de identidad.

    * entrar a editar grupo de identidad
        * en proveedor de autentificacion > seccion de rol autentico
            * seleccionar Elegir un `rol a partir de un token`.
                * 'resolucion de rol' seleccionar `usar un rol autenticado predeterminado`.
        



## Formulario de confirmacion

* cuando se retorna con exito el registro, se avanza al formulario de confirmacion.
    * se crea componente confirmacion.
    * se emplea servicio de registro y servicio de cognito-Util para enviar codigo de confirmacion.


## Formulario de login

* ...

## Ocultar/Mostrar opciones cuando se esta logueando

* cuando esta logeado ocultar botones de login y registrar y mostrar boton de logout y notas.
* mostrar opciones del menu de notas



Pendientes
=============

* que si ingresa directamente a login o register y ya esta logeado, redireccionar a notes.
