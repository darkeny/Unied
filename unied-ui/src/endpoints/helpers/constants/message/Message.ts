// src/helpers/constants/messages.ts

export const MESSAGES = {
  SUCCESS: {
    CREATE: "Registro criado com sucesso!",
    READ: "Dados obtidos com sucesso!",
    UPDATE: "Registro atualizado com sucesso!",
    DELETE: "Registro removido com sucesso!",
    LOGIN: "Login realizado com sucesso!",
    LOGOUT: "Logout realizado com sucesso!",
  },
  ERROR: {
    CREATE: "Erro ao criar registro.",
    READ: "Erro ao obter dados.",
    UPDATE: "Erro ao atualizar registro.",
    DELETE: "Erro ao remover registro.",
    LOGIN: "Erro ao realizar login. Verifique suas credenciais.",
    LOGOUT: "Erro ao realizar logout.",
    UNAUTHORIZED: "Acesso não autorizado.",
    SERVER: "Erro no servidor. Tente novamente mais tarde.",
    VALIDATION: "Dados inválidos. Verifique os campos.",
  },
  WARNING: {
    EMPTY_LIST: "Nenhum registro encontrado.",
    SESSION_EXPIRED: "Sessão expirada. Faça login novamente.",
  },
};
