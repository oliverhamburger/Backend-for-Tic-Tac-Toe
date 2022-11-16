class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
        this.loggedIn = false;
        this.xwins = 0;
        this.owins = 0;
    }

    getXwins(){
        return this.xwins;
    }

    getOwins(){
        return this.owins;
    }

    addXwin(){
        this.xwins++;
    }

    addOwins(){
        this.owins++;
    }

    login(username, password){
        if(this.userName === username && this.password === password){
            this.loggedIn = true;
            return true
        }
        return false;
    }

    logout(){
        this.loggedIn = false;
    }
}
module.exports = User