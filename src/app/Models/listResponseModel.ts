import { ResponseModel } from "./responseModel";

export interface ListResponseModel<A> extends ResponseModel{
    data:A[];
}