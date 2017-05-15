import { OpaqueToken } from "@angular/core";

export const BackendUri: OpaqueToken = new OpaqueToken("BackendUri");

export const BackendUriProvider = {
    provide: BackendUri,
    useValue: "http://127.0.0.1:8000/"
};
