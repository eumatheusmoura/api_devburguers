import mongoose from "mongoose";

const Pedidos = mongoose.model("pedidos", {
  img: String,
  pedido: String,
  nome: String,
  endereco: String,
  itensdopedido: String,
  formadepagamento: String,
  mododeentrega: String,
  total: String,
});

export default Pedidos;
