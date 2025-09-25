import { useSelector } from "react-redux";
import { useState } from "react";
import Contato from "../../components/Contato";
import ContatoType from "../../models/Contato";
import { Content } from "../../styles";
import * as S from "./styles";
import type { RootReducer } from "../../store";

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { criterio } = useSelector(
    (state: RootReducer) => state.filtro
  );
  const [termoBusca, setTermoBusca] = useState('')

  const filtraContatos = (): ContatoType[] => {
    let contatosFiltrados = itens;

    if (criterio && criterio !== "todos") {
      if (criterio === "favoritos") {
        contatosFiltrados = contatosFiltrados.filter(c => c.favorito);
      } else {
        contatosFiltrados = contatosFiltrados.filter(c => c.categoria === criterio);
      }
    }

    if (termoBusca.trim()) {
      const termo = termoBusca.toLowerCase();
      contatosFiltrados = contatosFiltrados.filter(c => 
        c.nome.toLowerCase().includes(termo) ||
        c.email.toLowerCase().includes(termo) ||
        c.telefone.toString().includes(termo)
      );
    }

    return contatosFiltrados;
  };

  const contatosFiltrados = filtraContatos();

  return (
    <S.MainContainer>
      <S.ContainerPesquisa>
        <S.Procurar 
          placeholder="Buscar" 
          value={termoBusca}
          onChange={({target}) => setTermoBusca(target.value)}
        />
      </S.ContainerPesquisa>
      <S.TituloContainer>
        <h2>Contatos {contatosFiltrados.length}</h2>
      </S.TituloContainer>

      <Content>
        <h4>Nome</h4>
        <h4>E-mail</h4>
        <h4>Telefone</h4>
      </Content>
      <S.Container>
        {contatosFiltrados.length ==0 ? (<>
          <p>Nenhum contato encontrado.</p>
        </>): (
          contatosFiltrados.map((contato) => (
            <Contato
              key={contato.id}
              categoria={contato.categoria}
              email={contato.email}
              nome={contato.nome}
              telefone={contato.telefone}
              id={contato.id}
              favorito={contato.favorito}
            />
          ))
        )}
      </S.Container>
    </S.MainContainer>
  );
};

export default ListaDeContatos;
