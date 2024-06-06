# GastosApp

GastosApp es una aplicación web para gestionar tus gastos personales, desarrollada con Django Rest Framework en el backend y React con Tailwind CSS en el frontend.

## Requisitos

- Python 3.x
- Node.js
- npm (Node Package Manager)

## Configuración del entorno

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/edwinvg99/Gastos-Django-React.git

2: Configura el backend (Django):

cd backend
# Crea y activa un entorno virtual (recomendado)
python -m venv env
source env/bin/activate  # en Linux/macOS
env\Scripts\activate  # en Windows
# Instala las dependencias
pip install -r requirements.txt
# Configura las variables de entorno (opcional, consulta el archivo .env.example)
cp .env.example .env
# Ejecuta las migraciones de la base de datos
python manage.py migrate


3: Configura el frontend (React):

cd frontend
# Instala las dependencias
npm install


Ejecutar la aplicación localmente
Inicia el servidor Django (backend):

cd backend
python manage.py runserver

Inicia el servidor de desarrollo de React (frontend):

cd frontend
npm start

Contribución
¡Gracias por considerar contribuir a GastosApp! Si deseas enviar una solicitud de extracción (pull request), asegúrate de seguir estas pautas:

Realiza tus cambios en una nueva rama con un nombre descriptivo.
Asegúrate de que tus cambios sean compatibles con el estilo de código existente.
Actualiza la documentación según sea necesario.
Haz pruebas exhaustivas antes de enviar tu solicitud.
Problemas
Si encuentras algún problema con la aplicación, por favor crea un nuevo issue en este repositorio.