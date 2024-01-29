export class CrudApi{

    id?: number;
    name?: string;
    gender?: string;

}

export class ApiResponse<T>{
 
    massage?:string;
    data? :T;

}