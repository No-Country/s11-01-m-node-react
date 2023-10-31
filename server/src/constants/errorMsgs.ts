export enum ERROR_MSGS {
  FAIL = "fail",
  ERRORS = "errors",
  ERROR = "error",
  GENERIC_ERROR = "Algo salió mal",
  INVALID_CREDENTIALS = "Credenciales inválidas",
  SESION_NOT_STARTED = "Sesión no iniciada",
  UNAUTHORIZED = "No autorizado",
  NOT_FOUND = "No encontrado",
  PERMISSION_DENIED = "Permiso denegado",
  USER_NOT_FOUND = "Usuario no encontrado",
  USER_ALREADY_EXISTS = "Usuario ya existe",
  USER_NOT_CREATED = "Usuario no creado",
  USER_NOT_UPDATED = "Usuario no actualizado",
  USER_NOT_DELETED = "Usuario no eliminado",
  EMAIL_NOT_FOUND = "Email no encontrado",
  EMAIL_ALREADY_EXISTS = "Email ya existe",
  EMAIL_NOT_CREATED = "Email no creado",
  EMAIL_NOT_UPDATED = "Email no actualizado",
  EMAIL_CARACTERS_REQUIRED = "EL email debe tener los caracteres requeridos",
  PASSWORD_NOT_CREATED = "Contraseña no creada",
  PASSWORD_HAVE_TO_MATCH = "Las contraseñas deben coincidir",
  PASSWORD_CARACTERS_REQUIRED = "La contraseña debe tener los caracteres requeridos",
  SAME_PASSWORD = "La contraseña debe ser diferente a la actual",
  RESOURSE_NOT_FOUND = "Recurso no encontrado",
  RESOURSE_ALREADY_EXISTS = "Recurso ya existe en la base de datos",
  JWT_INVALID_TOKEN = "invalid token",
  JWT_MALFORMED = "jwt malformed",
  JWT_INVALID_SIGNATURE = "invalid signature",
  SESSION_EXPIRED = "Su sesión ha expirado, inicie sesión nuevamente.",
  SESSION_DATA_TAMPERED = "Los datos de tu sesión han sido manipulados.",
  TOKEN_GENERATION_ERROR = "No se generó el token.",
  SERVER_ERROR = "Error en el servidor.",
  UNAUTHORIZED_ACCESS = "Acceso no autorizado.",
  UNAUTHORIZED_ACCESS_TO_RESOURCE = "Acceso no autorizado al recurso.",
  SEARCH_ERROR = "Error en la búsqueda.",
  SEARCH_ERROR_NO_RESULTS = "No se encontraron resultados.",
  SEARCH_ERROR_ONLY_3_FILTERS = "Solo se permiten 3 filtros.",
  SEARCH_ERROR_INVALID_FILTER = "Filtro inválido.",
  RECEPIE_NOT_FOUND = "Receta no encontrada.",
  RECEPIE_NOT_CREATED = "Receta no creada.",
  RECEPIE_NOT_UPDATED = "Receta no actualizada.",
  RECEPIE_NOT_DELETED = "Receta no eliminada.",
  RECEPIE_ALREADY_EXISTS = "Receta ya existe.",
  RECEPIE_NOT_FOUND_IN_DB = "Receta no encontrada en la base de datos.",
}