# TDD Talk

Charla sobre Test Driven Development.

## Install

Asegurate de tener instalado [mdx-deck](https://github.com/jxnblk/mdx-deck) en tu 
PATH. Instala dependencias con `yarn` o `npm`.

## Run

`yarn start` levanta el dev server.

## Demos

En el branch [`demo`](https://github.com/GAumala/tdd-talk/commits/demo) hay un 
historial de commits con 3 demos de desarrollo con TDD en JavaScript usando 
[Jest](https://jestjs.io/):

- Implementación de una cache LRU.
- Implementación de un formulario con React para ingresar datos.
- Implementación de un API HTTP en [express](https://expressjs.com/) para 
  ingresa y consultar datos en una base SQLite.

Cada commit implementa una prueba o el código que hace que la prueba pase.

**NOTA:** Antes de correr el demo en express es necesario crear la base de datos! 

```
cd backend
sqlite3 -init db.sql mydb.sqlite
```
