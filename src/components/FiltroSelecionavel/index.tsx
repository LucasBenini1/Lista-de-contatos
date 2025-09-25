import * as S from "./styles";


type Props = {
  ativo: boolean;
  titulo: string;
  contador: number;
  onClick: () => void;
};

const FiltroSelecionavel = ({ ativo, titulo, contador, onClick }: Props) => {

  return (
    <>
      <S.Filtro ativo={ativo} onClick={onClick}>
        <S.Detalhes>
          <p>{titulo}</p>
          <span>{contador}</span>
        </S.Detalhes>
      </S.Filtro>
    </>
  );
};

export default FiltroSelecionavel;
