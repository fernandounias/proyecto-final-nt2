// import React, { useState } from "react";
// import { TextField } from "@mui/material";

// const Buscador = ({ games }) => {
//   const [busqueda, setBusqueda] = useState("");
//   const [gamesAux, setGamesAux] = useState("");

//   let inputHandler = (e) => {
//     //convert input text to lower case
//     var lowerCase = e.target.value.toLowerCase();
//     setBusqueda(lowerCase);
//     filtrar(lowerCase);
//   };

//   const filtrar = (terminoBusqueda) => {
//     var resultadosBusqueda = games.filter((elemento) => {
//       if (
//         elemento.name
//           .toString()
//           .toLowerCase()
//           .includes(terminoBusqueda.toLowerCase())
//       ) {
//         return elemento;
//       }
//     });
//     setGamesAux(resultadosBusqueda);
//   };

//   return (
//     <div className="main">
//       <div className="search">
//         <TextField
//           id="outlined-basic"
//           onChange={inputHandler}
//           variant="outlined"
//           fullWidth
//           label="Buscar"
//           value={busqueda}
//         />
//       </div>
//     </div>
//   );
// };
// export default Buscador;
