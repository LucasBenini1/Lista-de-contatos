import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";
// import * as enums from '../../utils/Contato'

type ContatoState = {
  itens: Contato[];
};

function carregarContatos (): Contato[]{
  const contatosSalvos = localStorage.getItem('contatos')
  if(contatosSalvos){
    try{
      return JSON.parse(contatosSalvos)
    } catch{
      return []
    }
  }

  return[]
}

const initialState: ContatoState = {
  itens: carregarContatos()
  // [
  //   {
  //     nome: "Bruno",
  //     email: "esse@mail.com",
  //     categoria: enums.Categoria.AMIGOS,
  //     telefone: 1640028922,
  //     id: 1,
  //     favorito: false,
  //   },
  //   {
  //     nome: "Bruno",
  //     email: "esse@mail.com",
  //     categoria: enums.Categoria.FAMILIA,
  //     telefone: 1640028922,
  //     id: 2,
  //     favorito: false,
  //   },
  //   {
  //     nome: "Bruno",
  //     email: "esse@mail.com",
  //     categoria: enums.Categoria.TRABALHO,
  //     telefone: 1640028922,
  //     id: 3,
  //     favorito: false,
  //   },
  //   {
  //     nome: "Bruno",
  //     email: "esse@mail.com",
  //     categoria: enums.Categoria.AMIGOS,
  //     telefone: 1640028922,
  //     id: 4,
  //     favorito: false,
  //   },
  //   {
  //     nome: "Bruno",
  //     email: "esse@mail.com",
  //     categoria: enums.Categoria.FAMILIA,
  //     telefone: 1640028922,
  //     id: 5,
  //     favorito: false,
  //   },
  //   {
  //     nome: "Honey",
  //     email: "outro@mail.com",
  //     categoria: enums.Categoria.TRABALHO,
  //     telefone: 1512312331,
  //     id: 6,
  //     favorito: true,
  //   },
  //   {
  //     nome: "Malone",
  //     email: "outairo@mail.com",
  //     categoria: enums.Categoria.AMIGOS,
  //     telefone: 1512312331,
  //     id: 7,
  //     favorito: false,
  //   },
  //   {
  //     nome: "Malone",
  //     email: "outairo@mail.com",
  //     categoria: enums.Categoria.FAMILIA,
  //     telefone: 1512312331,
  //     id: 8,
  //     favorito: false,
  //   },
  //   {
  //     nome: "Malone",
  //     email: "outairo@mail.com",
  //     categoria: enums.Categoria.TRABALHO,
  //     telefone: 1512312331,
  //     id: 9,
  //     favorito: false,
  //   },
  // ],
};

function salvarContato(contatos: Contato[]) {
  localStorage.setItem('contatos', JSON.stringify(contatos))
}

const contatoSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
      salvarContato(state.itens);
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
        salvarContato(state.itens);
      }
    },
    alternarFavorito: (state, action: PayloadAction<number>) => {
      const contato = state.itens.find(c => c.id === action.payload);
      if (contato) {
        contato.favorito = !contato.favorito;
        salvarContato(state.itens);
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const nomeJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      const telefoneJaExiste = state.itens.find(
        (contato) => contato.telefone === action.payload.telefone
      )
      const emailJaExiste = state.itens.find(
        (contato) => contato.email.toLowerCase() === action.payload.email.toLocaleLowerCase()
      )
      if (nomeJaExiste) {
        alert('Já existe um contato com este nome')
      } else if(telefoneJaExiste){
        alert('Já existe um contato com este telefone')
      } else if(emailJaExiste){
        alert('Já existe um contato com este email')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1, favorito: false
        }
        state.itens.push(contatoNovo)
        salvarContato(state.itens)
      }
    }
  },
});

export const { editar, remover, alternarFavorito, cadastrar } = contatoSlice.actions;
export default contatoSlice.reducer;
