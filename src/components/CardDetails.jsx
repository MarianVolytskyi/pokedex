/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardContent, CardMedia } from "@mui/material";
import { normalizeName } from "../utils/helpFunc";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 280,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CardDetails = ({
  pokemon,
  onClose,
  pokomonTypes,
  pokemonImage,
}) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${pokemon.url}`)
      .then((response) => {
        setPokemonInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally();
  }, []);
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    onClose(null);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              image={pokemonImage}
              title={pokemon.name}
              style={{
                height: 260,
                width: 260,
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom textAlign="center">
                {normalizeName(pokemon.name)}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Abilities:
              </Typography>

              {pokemonInfo.abilities?.map((val) => (
                <Box key={val.ability.name}>
                  <Typography variant="h6" gutterBottom>
                    { '> '+ val.ability.name}
                  </Typography>
                </Box>
              ))}

              <table border="1px solid black" width={240}>
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>
                      {pokomonTypes.map((pok) => (
                        <Typography key={pok.slot} variant="h8" gutterBottom>
                          {normalizeName(pok.type.name) + " "}
                        </Typography>
                      ))}
                    </td>
                  </tr>

                  {pokemonInfo.stats?.map((element, index) => (
                    <tr key={index}>
                      <td>{normalizeName(element.stat.name)}</td>
                      <td>{element.base_stat}</td>
                    </tr>
                  ))}

                  <tr>
                    <td>Weight</td>
                    <td>{pokemonInfo.weight}</td>
                  </tr>
                  <tr>
                    <td>Total moves</td>
                    <td>{pokemonInfo.moves?.length}</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
};
