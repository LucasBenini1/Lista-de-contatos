import BarraLateral from "../../containers/BarraLateral";
import FormularioContato from "../../containers/FormularioContato";

const CriarContato = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />
      <FormularioContato />
    </>
  );
};

export default CriarContato;
