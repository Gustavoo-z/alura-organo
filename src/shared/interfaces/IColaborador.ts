export interface IColaboradorBase {
    nome: string
    cargo: string
    imagem: string
    favorito?: boolean
    id?: number
    time?: string
    data: string
}

export interface IColaboradorCompleto extends IColaboradorBase {
  id: number
  favorito: boolean
}