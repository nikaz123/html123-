`use strict`;


export default class DAO {
    constructor (DBname, storeName) {
        console.log("constructing:"+DBname +storeName )
        this.DBname = DBname;
        this.storeName = storeName;
        console.log ("dao constructed")
        console.log(this)
    }






    connect (f,onupgradeneeded) {
        let self=this;
        console.log(self)
        let request = indexedDB.open(self.DBname, 1); //ver 1
        request.onerror = function (err) {
            console.log(err);
        };
        request.onsuccess = function () {
            let dbsession = request.result;

            console.log(`DAO` + typeof dbsession);
            f(dbsession,self);


        };
        request.onupgradeneeded = onupgradeneeded;
    }
    create () {}
    read () {}
    update () {}
    delete () {}
}