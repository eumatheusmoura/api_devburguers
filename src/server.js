// Importando o Express na Index
import app from "./index.js";
//Importando o mongoose
import mongoose from "mongoose";

const devburguers_db_user = process.env.devburguers_db_user;
const devburguers_db_password = encodeURIComponent(
  process.env.devburguers_db_password
);
const devburguers_db_name = process.env.devburguers_db_name;
const devburguers_db_key = process.env.devburguers_db_key;

// Conectando com o banco de dados
mongoose
  .connect(
    `mongodb+srv://${devburguers_db_user}:${devburguers_db_password}@${devburguers_db_name}.c3dpllu.mongodb.net/?retryWrites=true&w=majority`
  )
  // Se der tudo ok com a conexão, o then aparece com a seguinte mensagem:
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        "Banco de dados conectado com sucesso! \nEndpoint: http://localhost:3000"
      );
    });
  })

  // Se der erro, o catch aparece com a seguinte mensagem:
  .catch((err) => console.log(`${err}: Erro de conexão com o banco de dados!`));
