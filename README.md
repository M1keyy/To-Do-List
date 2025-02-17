# To-Do List API 📋

Aplicación web para gestionar tareas en un To-Do List, desarrollada con:
- **Node.js**
- **Express**
- **TypeScript**
- **PostgreSQL** con **Sequelize**
- **React**
- **TailwindCSS**

---

## Cómo correr el proyecto en local 🖥️🖱️

> ### Requisitos previos ⤵️
> - Tener instalado **Node.js**
> - Tener instalado **PosgreSQL**

### 1.- **Clonar el repositorio**
Clona este repositorio en tu máquina local:
```
git clone https://github.com/M1keyy/To-Do-List.git
cd To-Do-List
```
### 2.- **Instalar las dependencias**
Una vez que estés en el projecto instala todas las dependencias. Para esto puedes usar dos terminales, una en *'/backend/api'* y la otra en *'/frontend/to-do-list'*. En ambas ejecutarás el siguiente comando:
```
npm install
```
### 3.- **Configurar las variables de entorno** 👽
Crea un archivo ***.env*** en la carpeta *'/backend/api'* y configura las variables de entorno de la siguiente manera:
>IMPORTANTE❗:
>- Tu *DB_USER* y tu *DB_PASS* corresponden a tu usuario y contraseña que te dan acceso a tu servidor de **PostgreSQL**. Asegurate de que tengas tus credenciales.
>- Tus puertos tienen que coincidir en los dos archivos *.env*, donde *PORT* es el puerto de *VITE_API_URL*.
>- *DB_PORT* es el puerto por defecto de **PostgreSQL**. Si lo cambiaste, tienes que cambiarlo aquí también.
```
PORT=8080
DB_NAME=to-do-list-db
DB_USER=postgres
DB_PASS=contraseña123
DB_HOST=localhost
DB_PORT=5432
CONSUMER=http://localhost:5173
```
Y crea otro archivo ***.env*** en la carpeta *'/frontend/to-do-list'*:
```
VITE_API_URL=http://localhost:8080
```
### 4.- **PostgreSQL**
Asegurate de que **PostgreSQL** esté corriendo en tu máquina. Puedes checar en *pgAdmin*.
### 4.- **Ejecutar el proyecto**
En las dos terminales distintas que fueron creadas en el paso **#2**, ubicado en las mismas carpetas, correrás el siguiente comando:
```
npm run dev
```
### 5. **Rezar**
Si todo sale bien, el proyecto se podrá ver desde **http://localhost:5173** 🙏

---
## API
Si el proyecto está corriendo, podrás acceder a la documentación completa (**Swagger**) de la **API** desde aquí **http://localhost:8080/docs** 🎂
> Pero aquí hay un resumen de las rutas:

| Método | Ruta | Descripción |
|-|-|-|
| GET | /tasks | Retorna una lista de todas las tareas registradas en la base de datos. |
| GET | /tasks/:id | Retorna una tarea específica según el ID. |
| POST | /tasks | Crea una nueva tarea según el contenido que se mandó. |
| PUT | /tasks/:id | Actualiza una tarea específica según el ID y el contenido que se mandó. |
| DELETE | /tasks/:id | Elimina una tarea específica según el ID. |

---
## Estructura del código
### Backend
- `/api` -> contiene todo el backend.
  - `/node_modules` -> contiene los módulos de node.
  - `/src` -> contiene el código fuente.
    - `/configs` -> tiene los archivos de configuración.
      - `database.ts` -> configuración de **Sequelize**.
      - `swaggerConfigs.ts` -> configuración de **Swagger**.
    - `/models` -> contiene los modelos de la base de datos.
      - `tasks.ts` -> modelo de las tareas.
    - `/routes` -> contiene los archivos de las rutas.
      - `routes.ts` -> contiene las rutas para las tareas.
    - `index.ts` -> archivo principal de la aplicación.
  - `...` -> archivos varios de configuración de **Node** y **TS**. (Aquí va el `.env`)


### Frontend
- `/to-do-list` -> contiene todo el frontend.
  - `/node_modules` -> contiene los módulos de node.
  - `/public` -> contiene archivos estáticos.
  - `/src` -> contiene el código fuente.
    - `/api` -> contiene las llamadas a la API.
      - `...`
    - `/assets` -> donde se guardan imágenes y otros recursos.
    - `/components` -> donde se guardan los componentes de **React**.
      - `...`
    - `/configs` -> contiene las configuraciones.
      - `envConfig.ts` -> extrae y exporta la variable de entorno referente al API.
    - `/hooks` -> contiene los hooks personalizados de **react-query**.
      - `...`
    - `/interfaces` -> contiene las interfaces de los modelos.
      - `...`
    - `/pages` -> contiene las vistas principales.
      - `...`
    - `/utils` -> contiene funciones con objetivos específicos.
      - `...`
    - `App.tsx` -> este archivo maneja el layout de las vistas.
    - `index.css` -> contiene los estilos e importa **TailwindCSS**.
    - `main.tsx` -> archivo principal de la aplicación. Maneja el enrutamiento.
    - `vite-env.d.ts` -> archivo de configuración de **Vite**.
  - `...` -> archivos varios de configuración de **Node**, **TS** y **Vite**. Contiene el `index.html` (Aquí va el `.env`)

---
 #### Autor:
 - Miguel A. Alcántar Chávez 🏓
