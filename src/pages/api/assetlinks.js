import fs from "fs";
import path from "path";
export default function handler(req, res) {
  const assetlinksPath = path.join(process.cwd(), "data/assetlinks.json");
  const assetlinksContent = fs.readFileSync(assetlinksPath, "utf8");
  // Tu contenido JSON que deseas retornar
  const assetlinks = {
    // Coloca aquí tu contenido JSON
    example: "Hola, este es un ejemplo de assetlinks.json",
  };

  // Establece el encabezado Content-Type a application/json
  res.setHeader("Content-Type", "application/json");
  // Envía el contenido JSON
  res.status(200).json(JSON.parse(assetlinksContent));
}
