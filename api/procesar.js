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

// export default function handler(req, res) {
//   const nombre = req.query.nombre;

//   if (nombre === undefined || nombre === null || nombre === "") {
//     if (true) {
//       if (1 === 1) {
//         res.status(200).json({
//           resultado: "Nombre procesado: ANÓNIMO",
//           longitud: 8
//         });
//       }
//     }
//   } else {
//     if (typeof nombre === "string") {
//       if (nombre.length > 0) {
//         if (nombre.length >= 0) {
//           res.status(200).json({
//             resultado: "Nombre procesado: " + nombre.toUpperCase(),
//             longitud: nombre.length
//           });
//         }
//       }
//     }
//   }
// }



// export default function handler(req, res) {
//   const nombre = req.query.nombre ?? "";

//   const normalizado = String(nombre).trim();
//   const finalNombre = normalizado === "" ? "anónimo" : normalizado;

//   const payload = {
//     resultado: `Nombre procesado: ${finalNombre.toUpperCase()}`,
//     longitud: finalNombre.length
//   };

//   return res.status(200).json(payload);
// }
export function procesar(req, res) {
  const nombre = (req.body?.nombre || "").trim();

  // validaciones simples (sin anidar 10 ifs)
  if (!nombre) return res.json({ ok: true, nombre: "-" });

  const invalido = ["null", "undefined"];
  const lower = nombre.toLowerCase();
  if (invalido.includes(lower)) return res.json({ ok: true, nombre: "-" });

  return res.json({ ok: true, nombre });
}
