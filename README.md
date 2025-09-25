# 📱 Lista de Contatos - React + TypeScript

## 🎯 Sobre o Projeto

Uma aplicação web moderna e responsiva para gerenciamento de contatos pessoais e profissionais. Desenvolvida com as melhores práticas de desenvolvimento frontend, utilizando React 19, TypeScript e Redux Toolkit para uma experiência de usuário fluida e intuitiva.

### ✨ Funcionalidades Principais

- **📝 Gerenciamento Completo de Contatos**: Adicionar, editar e remover contatos
- **🏷️ Categorização Inteligente**: Organize contatos por Família, Amigos ou Trabalho
- **⭐ Sistema de Favoritos**: Marque contatos importantes para acesso rápido
- **🔍 Filtros Avançados**: Busque e filtre contatos por categoria
- **💾 Persistência Local**: Dados salvos automaticamente no navegador
- **📱 Design Responsivo**: Interface otimizada para todos os dispositivos

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Styled Components 6** - CSS-in-JS para estilização componentizada
- **React Router DOM 7** - Roteamento declarativo para aplicações React

### Gerenciamento de Estado
- **Redux Toolkit 2.8** - Ferramenta oficial para desenvolvimento Redux
- **React Redux 9.2** - Bindings oficiais do React para Redux

### Desenvolvimento e Build
- **Vite 7** - Build tool moderna e rápida
- **ESLint 9** - Linter para identificar problemas no código
- **Node.js** - Runtime JavaScript

## 🏗️ Arquitetura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BotaoAdicionar/ # Botão para adicionar novos contatos
│   ├── Contato/        # Componente individual de contato
│   └── FiltroSelecionavel/ # Filtros por categoria
├── containers/          # Containers com lógica de negócio
│   ├── BarraLateral/   # Barra lateral com navegação
│   ├── FormularioContato/ # Formulário de criação/edição
│   └── ListaDeContatos/ # Lista principal de contatos
├── models/              # Modelos de dados
│   └── Contato.ts      # Classe principal do contato
├── pages/               # Páginas da aplicação
│   ├── Home/           # Página principal
│   └── Criar-contato/  # Página de criação/edição
├── store/               # Gerenciamento de estado Redux
│   ├── index.ts        # Configuração da store
│   └── reducers/       # Reducers para contatos e filtros
├── styles/              # Estilos globais
├── utils/               # Utilitários e enums
│   └── Contato.ts      # Enum de categorias
├── App.tsx              # Componente principal
└── main.tsx            # Ponto de entrada
```

## 🎨 Estrutura de Dados

### Modelo de Contato
```typescript
interface Contato {
  id: number;
  nome: string;
  email: string;
  telefone: number;
  categoria: 'amigos' | 'familia' | 'trabalho';
  favorito: boolean;
}
```

### Categorias Disponíveis
- **👨‍👩‍👧‍👦 Família** - Contatos familiares
- **👥 Amigos** - Contatos pessoais
- **💼 Trabalho** - Contatos profissionais

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/BrunoAndradeDinis/lista-de-contatos-2.git
   cd lista-de-contatos-2
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

```json
{
  "dev": "vite",                    // Servidor de desenvolvimento
  "build": "tsc -b && vite build",  // Build de produção
  "lint": "eslint .",               // Verificação de código
  "preview": "vite preview"         // Preview do build
}
```

## 🔧 Funcionalidades Técnicas

### Gerenciamento de Estado
- **Redux Toolkit**: Implementação moderna e eficiente do Redux
- **Slice Pattern**: Organização modular dos reducers
- **Persistência Local**: Dados salvos automaticamente no localStorage

### Roteamento
- **React Router DOM 7**: Roteamento declarativo e performático
- **Lazy Loading**: Carregamento sob demanda das páginas

### Estilização
- **Styled Components**: CSS-in-JS com suporte a temas e props
- **Design System**: Componentes consistentes e reutilizáveis

## 📱 Interface do Usuário

### Página Principal (Home)
- Lista de todos os contatos
- Filtros por categoria
- Sistema de favoritos
- Barra lateral com navegação

### Página de Criação/Edição
- Formulário intuitivo
- Validação de campos
- Seleção de categoria
- Opção de marcar como favorito

## 🧪 Qualidade do Código

- **TypeScript**: Tipagem estática para maior confiabilidade
- **ESLint**: Padrões de código consistentes
- **Componentização**: Arquitetura modular e reutilizável
- **Clean Code**: Código limpo e bem documentado

## 🌟 Diferenciais Técnicos

1. **React 19**: Utilização da versão mais recente com melhorias de performance
2. **Redux Toolkit**: Implementação moderna e eficiente do Redux
3. **TypeScript**: Desenvolvimento com tipagem estática
4. **Styled Components**: Estilização componentizada e dinâmica
5. **Arquitetura Modular**: Separação clara de responsabilidades

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Este projeto foi criado para fins educacionais e de portfólio, mas ficamos felizes em receber melhorias da comunidade.

### Processo de Contribuição

1. **Fork o projeto**
   ```bash
   git clone https://github.com/SEU_USUARIO/lista-de-contatos-2.git
   ```

2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/NovaFuncionalidade
   ```

3. **Faça suas alterações e commit**
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   ```

4. **Push para a branch**
   ```bash
   git push origin feature/NovaFuncionalidade
   ```

5. **Abra um Pull Request**

### Diretrizes para Contribuição

- Mantenha o código limpo e bem documentado
- Siga os padrões de TypeScript estabelecidos
- Teste suas alterações antes de submeter
- Use commits semânticos (feat:, fix:, docs:, etc.)
- Mantenha a arquitetura modular do projeto

## 📚 Aprendizados e Desafios

### Desafios Técnicos Superados
- **Gerenciamento de Estado**: Implementação eficiente com Redux Toolkit
- **Tipagem TypeScript**: Criação de interfaces robustas e reutilizáveis
- **Componentização**: Arquitetura modular e escalável
- **Persistência de Dados**: Implementação de localStorage com fallbacks

### Tecnologias Aprendidas
- React 19 com TypeScript
- Redux Toolkit para gerenciamento de estado
- Styled Components para estilização
- React Router para navegação
- Vite para build e desenvolvimento

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🐱‍💻 Contato

**Bruno de Andrade Dinis**

- **GitHub**: [@BrunoAndradeDinis](https://github.com/BrunoAndradeDinis)
- **LinkedIn**: [bruno-de-andrade-dinis-8534a1182](https://www.linkedin.com/in/bruno-de-andrade-dinis-8534a1182)

---


<div align="center">
  <img src="https://avatars.githubusercontent.com/u/55500337?s=400&u=473435a771f05eca8f6b06e5b20c9a4a461ad371&v=4" alt="Bruno de Andrade Dinis" title="Bruno de Andrade Dinis" width="100" height="100" style="border-radius: 50%;">

  
  **Desenvolvido com 🐱‍🚀 por [Brinu](https://github.com/BrunoAndradeDinis)**
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bruno-de-andrade-dinis-8534a1182)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BrunoAndradeDinis)
</div>

---

<div align="center">
  Se você curtiu este projeto ou ele te ajudou de alguma forma, considere dar uma estrela! ⭐
</div>
