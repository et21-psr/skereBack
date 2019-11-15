export class Categoria {
    id_categoria: number;
    categoria_padre: number;
    nombre: string;
    createdAt: string;
    updateAt: string;
}

export class Usuario {
    id_usuario: number;
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
    usuarioId: number;
    categoriaId: number;
    createdAt: string;
    updatedAt: string;
    usuario: Usuario;
    categorium: Categoria;
}