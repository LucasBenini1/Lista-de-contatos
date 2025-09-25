import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Main, InputChore, Botao } from "../../styles";

export const Input = styled(InputChore)`
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    margin: 0;

    &::placeholder{
        color: transparent;
    }

    &:focus + label, &:not(:placeholder-shown) + label{
        top: -.5rem;
        left: 2px;
        font-size: 12px;
        background: ${variaveis.fundoPrincipal};
        padding: 0 4px;
    }

    &:not(:focus):not(:not(:placeholder-shown)) + label {
        top: 1rem;
        font-size: 14px;
        background: transparent;
    }
`

export const FormContainer = styled(Main).attrs({as:'form'})`
    margin: 1rem;
    h2{
        margin-bottom: .5rem;
    }


    div {
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
        width: 300px;
        margin-bottom: .5rem;
        
        img {
            height: 20px;
            position: relative;
        }

        div{
            display:flex;
            flex-direction:column;
            min-width:320px;
            padding-top: 4px;

            input{
                width: 100%;
                padding: 6px;
                border-bottom: 1px solid;
                outline: none;                
            }

            label{
                position: absolute;
                top: 1rem;
                left: 8px;
                transition: 0.3s;
            }
        }
    }
`

export const Error = styled.span`
    color: ${variaveis.corErro};
    font-size: 12px;
    margin-top: 4px;
    font-weight: 500;
`

export const CategoriaFieldset = styled.fieldset`
    border: 1px solid ${variaveis.bordaHover};
    border-radius: 12px;
    padding: 1rem 1.5rem;
    margin: 0.5rem 0 1rem;
    width: 100%;
    max-width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    text-align: center;

    legend{
        text-align: left;
        padding: 0 8px;
        font-weight: 700;
    }

    div{
        display: flex;
        align-items: center;
        gap: .5rem;
        margin: 0;
        width: auto;
        position: static;
    }
`

export const BotaoSalvar = styled(Botao)`
    background-color: ${variaveis.corBotaoContato};
    color: ${variaveis.textoBotaoContato};
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    align-self: flex-start;
    margin-top: .5rem;
    border: none;

    &:hover{
        box-shadow: 3px 3px 1px ${variaveis.sombraPadrao}; 
        border: none;
        opacity: 1;
        border: none;
    }
`