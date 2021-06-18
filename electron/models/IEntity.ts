import { IEndpoint } from "./IEndpoint";

export interface IEntity{
    _id?: any;
    name: string;
    endpointGet?: IEndpoint;
    endpointList?: IEndpoint;
    endpointAdd?: IEndpoint;
    endpointRemove?: IEndpoint;
  }