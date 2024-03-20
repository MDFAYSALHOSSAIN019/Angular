import { DepartmentModel } from "./departmentModel.model";

export class CrudApi{

    id?: number;
    name?: string;
    gender?: string;
    departmentModel?: {
        id: number,
        dname: string;
    }
}

export class ApiResponse<T>{
 
    massage?:string;
    data? :T;

}