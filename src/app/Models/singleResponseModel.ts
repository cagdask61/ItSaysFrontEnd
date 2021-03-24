import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<A> extends ResponseModel{
    data:A;
}