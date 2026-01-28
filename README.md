# 🤖 AI Chat App - React + Node.js + Llama 3

Este es un proyecto Full Stack que utiliza **React** para el frontend y **Node.js (Express)** para el backend. La aplicación se conecta con los modelos de **Meta Llama 3** a través del router de **Hugging Face**, permitiendo tener un chat inteligente funcional de manera gratuita y eficiente.

---

## 🚀 Características
* **Frontend:** Interfaz moderna construida con React y Vite.
* **Backend:** Servidor en Express que actúa como puente seguro hacia la API de Hugging Face.
* **IA:** Integración con Llama-3.1-8B-Instruct.
* **Seguridad:** Uso de variables de entorno para proteger tokens sensibles.

---

## 🛠️ Tecnologías utilizadas

**Frontend:**
* React.js
* CSS3 (Diseño responsivo)
* Fetch API

**Backend:**
* Node.js & Express
* OpenAI SDK (configurado para Hugging Face)
* Dotenv (gestión de variables)
* CORS

---

## 📦 Instalación y Configuración

Sigue estos pasos para correr el proyecto localmente:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
cd tu-repositorio
2. Configurar el Backend
Entra a la carpeta del servidor (o raíz):

Bash
npm install
Crea un archivo .env en la raíz y agrega tus credenciales:

Fragmento de código
PORT=8000
HF_TOKEN=tu_token_de_hugging_face_aqui
3. Configurar el Frontend
Ve a la carpeta del frontend (si está separada) e instala las dependencias:

Bash
npm install
Crea un archivo .env para el frontend:

Fragmento de código
VITE_API_URL=http://localhost:8000/api/ai/generate
4. Ejecutar el proyecto
Correr Backend: npm run dev (o node index.js)

Correr Frontend: npm run dev

🛡️ Notas sobre seguridad
Este proyecto utiliza un archivo .gitignore para evitar que las claves de API (.env) se suban a GitHub. Asegúrate de generar tu propio token en Hugging Face.

✒️ Autor
Nahuel David Medina- github.com/NahuPandex