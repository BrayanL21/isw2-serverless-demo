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

export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  // Simulación de falla controlada
  if (nombre === "error") {
    return res.status(500).json({
      mensaje: "Error simulado en el sistema"
    });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`
  });
}

