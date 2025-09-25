import BarraLateral from "../../containers/BarraLateral";
import ListaDeContatos from "../../containers/ListaDeContatos";

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros/>
      <ListaDeContatos />
    </>
  );
};

export default Home;
