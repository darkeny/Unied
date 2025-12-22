// src/helpers/constants/statusCodes.ts

export const STATUS_CODE = {
  SUCCESS: {
    OK: 200,              // Requisição bem-sucedida
    CREATED: 201,         // Recurso criado com sucesso
    NO_CONTENT: 204,      // Requisição bem-sucedida, sem conteúdo
  },
  CLIENT_ERROR: {
    BAD_REQUEST: 400,     // Requisição inválida
    UNAUTHORIZED: 401,    // Não autorizado
    FORBIDDEN: 403,       // Acesso proibido
    NOT_FOUND: 404,       // Recurso não encontrado
    CONFLICT: 409,        // Conflito na requisição
    UNPROCESSABLE: 422,   // Entidade não processável / validação falhou
  },
  SERVER_ERROR: {
    INTERNAL: 500,        // Erro interno do servidor
    NOT_IMPLEMENTED: 501, // Funcionalidade não implementada
    BAD_GATEWAY: 502,     // Gateway inválido
    SERVICE_UNAVAILABLE: 503, // Serviço indisponível
    GATEWAY_TIMEOUT: 504,     // Tempo de espera esgotado
  },
};
