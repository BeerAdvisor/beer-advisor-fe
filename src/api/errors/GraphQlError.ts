export default class GraphQlError extends Error {
    private errorMessage: string;
    private error: any; // TODO: this has to be unified with BE

    constructor(e: any){
        super();
        this.errorMessage = e.message;
        this.error = e;        
    }
}
