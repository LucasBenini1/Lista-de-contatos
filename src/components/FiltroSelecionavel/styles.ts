import styled from "styled-components";
import variaveis from "../../styles/variaveis";

type Props = {
  ativo: boolean;
};

export const Filtro = styled.div<Props>`
  background-color: ${(props) => (props.ativo ? variaveis.filtroAtivoFundo : "inherit")};
  border-radius: 2rem 0 0 2rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  margin-right: -1rem;
  position: relative;
  height: 3rem;
  margin-bottom: 0.25rem;
  color: inherit;

  &::after {
    content: "";
    position: absolute;
    border-radius: 2rem 0 0 2rem;
    inset: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s ease;
  }
  &:hover::after {
    background-color: ${variaveis.overlayHoverFraco};
  }
`;

export const Detalhes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  font-size: 0.9rem;
  color: inherit;

  p {
    font-weight: bold;
    color: inherit;
  }

  span {
    color: inherit;
  }
`;
