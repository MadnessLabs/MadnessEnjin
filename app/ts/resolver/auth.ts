/// <reference path="../../typings/index.d.ts"/>
class AuthResolver {
    constructor() {
        return {
            currentAuth: this.currentAuth
        };
    }
    
    currentAuth(enjin) {
        return enjin.auth.instance.$requireSignIn();
    }
}