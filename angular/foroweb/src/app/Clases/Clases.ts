export class Categoria {
    id_categoria: number;
    categoria_padre: number;
    nombre: string;
    createdAt: string;
    updateAt: string;
}
export class Comentario {
    id_comentario: number;
    texto: string;
    archivo: string;
    comentario_padre: number;
    usuarioId: number;
    titulo: string;
    posteoId: number;
    createdAt: string;
    updatedAt: string;
    usuario: Usuario;
}
export class Usuario {
    id_usuario: string;
    email: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    foto: string;
    rol: string;
    clave_admin: string;
    createdAt: string;
    updatedAt: string;
}

export class Posteo {
    id_posteo: number;
    texto: string;
    archivo: string;
    titulo: string;
    usuarioId: string;
    categoriaId: number;
    created_at: string;
    updated_at: string;
    usuario: Usuario;
    categorium: Categoria;
}

export class crearposteo {
    categoriaId: number;
    texto: string;
    titulo: string;
    usuarioId: string;
  }