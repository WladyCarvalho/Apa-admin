export class FileUpload 
{
    key!: string;
    nome!: string;
    url!: string;
    owner_key!:string;
    file:File;
    date:any;

    constructor(file:File)
    {
        this.file = file;
    }
}