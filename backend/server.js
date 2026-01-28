import express from "express"; 
import { OpenAI } from "openai"; 
import dotenv from "dotenv";
import cors from "cors";

// Cargamos las variables del archivo .env
dotenv.config();


const app = express();


app.use(cors({ origin: "http://localhost:5173" }));

// Habilitamos que Express pueda leer JSON en las solicitudes
app.use(express.json());

// Configuramos el cliente de OpenAI, pero apuntándolo al router de HuggingFace
// y usando el token guardado en .env como HF_TOKEN
const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1", // Endpoint del router de HuggingFace
    apiKey: process.env.HF_TOKEN,                // Token del usuario
});

// ----- ENDPOINT PRINCIPAL -----
app.post("/api/ai/generate", async (req, res) => {
    try {
        // Extraemos el texto enviado por el frontend
        const { input } = req.body;

        // Validación básica por si el frontend no envía nada
        if (!input) return res.status(400).json({ ok: false, error: "Falta input" });

        const completion = await client.chat.completions.create({
            model: "meta-llama/Llama-3.1-8B-Instruct:novita", // Modelo que va a responder
            messages: [{ role: "user", content: input }],      // Mensaje del usuario
        });

        // Respondemos al frontend con el resultado generado
        res.json({ ok: true, result: completion.choices[0].message });

    } catch (error) {
        // Si algo falla, mostramos el error en la consola
        console.error(error);

        // Y respondemos al frontend con error 500
        res.status(500).json({ ok: false, error: error.message });
    }
});

// ---- INICIAMOS EL SERVIDOR ----
// Tomamos el puerto desde .env y arrancamos el backend
app.listen(process.env.PORT, () => 
    console.log(`Backend corriendo en http://localhost:${process.env.PORT}`)
);
