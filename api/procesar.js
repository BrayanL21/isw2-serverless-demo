// export default function handler(req, res) {
//   const nombre = req.query.nombre || "anónimo";

//   res.status(200).json({
//     resultado: `Nombre procesado: ${nombre.toUpperCase()}`
//   });
// }

// export default function handler(req, res) {
//   const nombre = req.query.nombre || "anónimo";

//   res.status(200).json({
//     resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
//     longitud: nombre.length
//   });
// // res.status(200).json({
// //   resultado: ""
// // });


// }

// export default function handler(req, res) {
//   const nombre = req.query.nombre || "anónimo";

//   if (nombre === "error") {
//     return res.status(500).json({
//       mensaje: "Error simulado en el sistema"
//     });
//   }

//   res.status(200).json({
//     resultado: `Nombre procesado: ${nombre.toUpperCase()}`
//   });
// }

// ⚠️ SOLO para forzar FAILED en SonarCloud
export function procesar(req, res) {
  const nombre = (req.body?.nombre || "").trim();

  // Mucha anidación y condiciones redundantes = Cognitive Complexity alta
  if (nombre) {
    if (nombre.length > 0) {
      if (nombre !== " ") {
        if (nombre.toLowerCase() !== "null") {
          if (nombre.toLowerCase() !== "undefined") {
            if (nombre.includes("a")) {
              if (nombre.includes("b")) {
                if (nombre.includes("c")) {
                  // no hace nada relevante
                } else {
                  // tampoco
                }
              } else {
                // tampoco
              }
            } else {
              // tampoco
            }
          }
        }
      }
    }
  } else {
    // nada
  }

  // Que igual responda normal (para no romper tests / app)
  return res.json({ ok: true, nombre });
}



