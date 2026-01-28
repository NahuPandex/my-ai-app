// Importa React y el hook useState para manejar estados en el componente
import React, { useState } from "react";
import "./App.css"; // Importa estilos CSS

// Define la URL de la API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/ai/generate";

function App() {
  const [input, setInput] = useState("");        
  const [respuesta, setRespuesta] = useState(null);
  const [loading, setLoading] = useState(false);

  const enviar = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setRespuesta(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();

      if (data.ok) {
        setRespuesta(data.result);
      } else {
        setRespuesta({ error: data.error });
      }
    } catch (error) {
      setRespuesta({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  // 👉 Función para LIMPIAR todo
  const limpiar = () => {
    setInput("");
    setRespuesta(null);
  };

  return (
    <div className="container">
      <h1 className="title">Mi IA - React + Hugging Face</h1>

      <textarea
        className="textarea"
        rows="6"
        placeholder="Escribí tu pregunta..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Botón enviar */}
      <button
        className="btn"
        onClick={enviar}
        disabled={loading || !input.trim()}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {/* 👉 NUEVO: Botón limpiar */}
      <button
        className="btn btn-secondary"
        onClick={limpiar}
        disabled={loading}
        style={{ marginLeft: "10px" }}
      >
        Limpiar
      </button>

      <div className="response-container">
        <h3>Respuesta</h3>

        {respuesta?.error && <div className="error">⚠️ {respuesta.error}</div>}
        {respuesta?.content && <div className="success">✅ Respuesta recibida</div>}
        
        <pre className="response">
          {respuesta
            ? respuesta.content
              ? respuesta.content
              : JSON.stringify(respuesta, null, 2)
            : "Sin respuesta aún."}
        </pre>
      </div>
    </div>
  );
}

export default App;
