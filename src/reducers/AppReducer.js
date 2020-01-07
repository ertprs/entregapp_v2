const INITIAL_STATE = {
    adiciona_contato_email: '',
    msgErroCadastroUsuario: '',
    cadastroResultadoUsuario: false,
    categorias:'',
    mensagem: '',
    carrinho:[], 
    qtd_carrinho: 0,
};

import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    MODIFICA_MENSAGEM,
    ENVIA_MENSAGEM_SUCESSO,
    CATEGORIA_CARREGADA_OK,
    ADICIONA_PRODUTO,
    REMOVE_PRODUTO,
    LIMPA_CARRINHO
} from '../actions/ActionTypes';

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch(action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adiciona_contato_email: action.payload };
        case CATEGORIA_CARREGADA_OK:
            return { ...state, categorias: action.payload };
        case ADICIONA_CONTATO_ERRO:
            return { ...state, msgErroCadastroUsuario: action.payload };
        case ADICIONA_CONTATO_SUCESSO:
            return { ...state, cadastroResultadoUsuario: action.payload, adiciona_contato_email: '' };
        case MODIFICA_MENSAGEM:
            return { ...state, mensagem: action.payload };   
        case ENVIA_MENSAGEM_SUCESSO:
            return { ...state, mensagem: '' };
        case ADICIONA_PRODUTO:
            
            return { ...state, carrinho: action.payload, qtd_carrinho: action.payload.length  };   
        case REMOVE_PRODUTO:
                
            return { ...state, carrinho: action.payload, qtd_carrinho: action.payload.length };   
        case LIMPA_CARRINHO:
            return { ...state, carrinho: '' };   
        default:
            return state;
    }
}