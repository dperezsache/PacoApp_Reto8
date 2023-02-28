export interface Pelicula {
    id: number;
    resultType: string;
    imagen:File | null;
    title:string;
    description:string;
}