import { Preleitor } from 'src/app/model/preleitor';
export class Evento{
    
    createDate:any;
    tema!:string;
    descricao!:string;
    data:any;
    modalidade!:string;
    localidade!:string;
    preleitores!:Preleitor[];
    eventoId!:string|undefined;

}