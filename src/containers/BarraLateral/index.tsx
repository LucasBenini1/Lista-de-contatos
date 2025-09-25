import { useDispatch, useSelector } from "react-redux";
import FiltroSelecionavel from "../../components/FiltroSelecionavel";
import * as S from "./styles";
import { alteraFiltro } from "../../store/reducers/filtro";
import type { RootReducer } from "../../store";
import BotaoAdicionar from "../../components/BotaoAdicionar";

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({mostrarFiltros}: Props) => {
  const dispatch = useDispatch();
  const { criterio } = useSelector((state: RootReducer) => state.filtro);
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  const contarContatos = (categoria: string) => {
    if (categoria === "todos") return itens.length;
    if (categoria === "favoritos") return itens.filter(c => c.favorito).length;
    return itens.filter(c => c.categoria === categoria).length;
  };

  const handleFiltro = (novoCriterio: "amigos" | "todos" | "familia" | "trabalho" | "favoritos") => {
    dispatch(alteraFiltro(novoCriterio));
  };

  return (
    <>
      <S.Aside>
        <S.TituloPrincipal to={"/"}>
          <h1> Contatos</h1>
        </S.TituloPrincipal>

       {mostrarFiltros ? (<>
        <BotaoAdicionar/>

        <FiltroSelecionavel 
          ativo={criterio === "todos"} 
          contador={contarContatos("todos")} 
          titulo="Todos os contatos" 
          onClick={() => handleFiltro("todos")}
        />
        <FiltroSelecionavel 
          ativo={criterio === "familia"} 
          contador={contarContatos("familia")} 
          titulo="Familia" 
          onClick={() => handleFiltro("familia")}
        />
        <FiltroSelecionavel 
          ativo={criterio === "trabalho"} 
          contador={contarContatos("trabalho")} 
          titulo="Trabalho" 
          onClick={() => handleFiltro("trabalho")}
        />
        <FiltroSelecionavel 
          ativo={criterio === "amigos"} 
          contador={contarContatos("amigos")} 
          titulo="Amigos" 
          onClick={() => handleFiltro("amigos")}
        />
        <FiltroSelecionavel 
          ativo={criterio === "favoritos"} 
          contador={contarContatos("favoritos")} 
          titulo="Favoritos" 
          onClick={() => handleFiltro("favoritos")}
        />
      </>):(<><S.BotaoVoltar to="/">{`← voltar`}</S.BotaoVoltar></>)}
      </S.Aside>
    </>
  );
};

export default BarraLateral;
