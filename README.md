# Proyecto 1 Tecnoligías web

<p align="center"> <img src="https://achoesgratiss.com/wp-content/uploads/2023/02/openAI-chat-gpt-1.jpg" width = "800"> </p>

## Detalles del proyecto
    
El proyecto debe ser visualizado en una pantalla 1920 x 1080 en firefox.

- Imagen a copiar

<p align="center"> <img src="https://github.com/angelcast2002/proyecto1_tecweb/blob/main/1674305749266420903.jpg" width = "900"> </p>
    
## Visualizar el proyecto

Para poder visualizar lo alojado en este repositorio, luego de ser clonado, se debe dirigir hacia la carpeta en donde ha sido alojado.
Luego se debe ejecutar:

~~~
yarn
~~~

Una vez hecho esto, se puede visualizar el contenido medianate el siguiente comando.

~~~
yarn dev
~~~

Con esto se nos mostrara una direccion a la cual podremos ingresar mediante un navegador web.

## Tecnologias implementadas
- [React](https://es.react.dev/)

    - React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. 
    Fue desarrollado por Facebook y se lanzó por primera vez en 2013. React se enfoca en la construcción de componentes de interfaz de usuario, que son elementos visuales que se pueden reutilizar en diferentes partes de una aplicación.
    
    Para poder utilizar React es necesario lo siguiente:
    Para poder instalar React es necesario instalar [Node.js](https://nodejs.org/en).
    O podemos hacerlo desde la terminal con la ayuda de nmp (Otro manejador de paquetes), esta instalacion incluye node.js.
    
    ~~~ bash
    sudo apt install npm  
    ~~~
    
    Sin embargo para crear un ambiente de React utilizaremos otro metodo que sera explicado mas adelante.
    
  ***
    
- [Yarn: manejador de paquetes](https://yarnpkg.com/)

    - Yarn es un gestor de paquetes para aplicaciones web, similar a npm (Node Package Manager), pero con algunas diferencias clave. 
    Fue creado por Facebook y está diseñado para ser más rápido, seguro y confiable que npm.
    
    Como instalar yarn:
    Primero debemos agregar Yarn al sistema
    
    ~~~ bash
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    ~~~
    
    Luego es necesario actualizar los paquetes del sistema
    
    ~~~ bash
    sudo apt-get update && sudo apt-get install yarn
    ~~~
    
  ***
    
- [Eslint](https://eslint.org/)

  - ESLint es una herramienta de análisis estático de código para JavaScript. 
  Se utiliza para encontrar y corregir errores en el código, mejorar la calidad del código y hacer que el código sea más legible y mantenible.

  ***

- [Prettier](https://prettier.io/)

  - Prettier es una herramienta de formateo de código que ayuda a mantener la consistencia y legibilidad en el código fuente de un proyecto. 
  Prettier reformatea automáticamente el código fuente según un conjunto de reglas predefinidas, 
  lo que permite a los desarrolladores centrarse en la lógica del código en lugar de en su formato.

  ***

- [Vite](https://vitejs.dev/)

  - Vite es una herramienta de construcción (build tool) y desarrollo (development tool) 
  de proyectos web que se centra en la rapidez y eficiencia en la creación de aplicaciones web modernas.
    
## Creacion de un entorno de React
  Primero debemos dirigirnos en una terminal hasta la ubicacion en donde queremos alojar el proyecto.

  Luego, inicializamos el proyecto con vite:

  ~~~ bash
  yarn create vite
  ~~~

  Dentro de la carpeta creada en el paso anterior debemos instalar yarn

  ~~~ bash
  yarn
  ~~~

  Por ultimo crearemos un servidor para poder levantar lo anteriormente creado y poder visualizar lo trabajado

  ~~~ bash
  yarn dev
  ~~~

## Haciendo mas legible el codigo (Opcional):
### Eslint
  Para poder agregar prettier es necesario hacer lo siguiente:
  
  ~~~ bash
  npm add eslint
  ~~~
  
  Luego debemos iniciarlo con:
  
  ~~~ bash
  yarn eslint --init
  ~~~
  
  Podemos agregar un script para poder ejecutarlo de una manera mas facil
  
  Editando el archivo 
  
  ~~~ bash
  nano package.json
  ~~~
  
  Agregamos lo siguiente
  
  ~~~ bash
  "lint": "eslint --ext .js,.jsx,.ts,.tsx,.vue src"
  ~~~
  
  Ahora podemos ejecutar eslint con
  
  ~~~ bash
  yarn lint
  ~~~
  
  Por ultimo podemos editar las reglas de Eslint con
  
  ~~~ bash
  nano .eslintrc.cjs
  ~~~    
  
  Las reglas utilizadas en este proyecto son
  
  ~~~ bash
  'semi':['error','never'],
  'max-len':['error',{ 'code':120}],
  'prefer-arrow-callback': 'error',
  'quotes': ['error', 'double'],
  'react/function-component-definition': 'off'
  ~~~

### Prettier
  Para poder agregar Prettier junto a Eslint debemos ejecutar lo siguiente
  
  Instalamos Prettier
  
  ~~~ bash
  npm install --save-dev eslint-config-prettier
  ~~~
  
  Debemos agregar la dependencia al archivo de configuracion de Eslint de la siguiente manera
  
  ~~~ bash
  'plugin:prettier/recommended'
  ~~~

  Luego debemos crear un archivo de configuracion para Prettier con lo siguiente
  
  ~~~ bash
  nano .prettierrc
  ~~~
  
  Ahora podemos agregar las reglas que deseemos, las reglas utilizadas en este proyecto son
  
  ~~~ bash
  {
    "semi": false
  }
  ~~~
  
