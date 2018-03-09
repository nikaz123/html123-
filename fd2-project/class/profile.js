`use strict`;


export default class Profile {
    constructor() {
        this.data = {
            key:1,
            name: ``,
            gender: ``,
            dateOfBirth: ``,
            height: ``,
            weght: ``,
            waist: ``,
            hipsize: ``,
            breastSize: ``,
            calories: ``
        };
        this.DBconfig ={
            key:1,
            profileDBName : `profileDB`,
            profileStoreName : `profileStore`};

        this.createProfile();
        this.readProfile();

    }

    connectDB(f) {

        let DBconf=this.DBconfig;
        let dadata = this.data;


        let request = indexedDB.open(DBconf.profileDBName, 1); //ver 1
        request.onerror = function (err) {
            console.log(err);
        };
        request.onsuccess = function () {
            let dbsession = request.result;

            console.log(`Q!`+ typeof dbsession);
            f(dbsession,DBconf);


        };
        request.onupgradeneeded = function (e) {
            // Если БД еще не существует, то создаем хранилище объектов.
            console.log(DBconf.profileStoreName);
            e.currentTarget.result.createObjectStore(DBconf.profileStoreName, {keyPath: "key"});
            //fill
        }
    }


    createProfile() {


    };

    readProfile() {

        let DBconf=this.DBconfig;
        let dadata = this.data;

        this.connectDB(function (dbsession,DBconf){


            console.log(DBconf.profileStoreName);

        let transaction = dbsession.transaction([DBconf.profileStoreName], "readonly");


        transaction.oncomplete = function (event) {
            console.log("readProfile transaction complete");

        };

        transaction.onerror = function (event) {
            console.log("readProfile transaction error");
        };

        let objectStore = transaction.objectStore(DBconf.profileStoreName);


        let objectStoreRequest = objectStore.get(1);

        objectStoreRequest.onsuccess = function (event) {

            console.log("readProfile onsuccess");

            let result_data = objectStoreRequest.result;



            console.log("dadata:" + dadata);

        };
    })

    };


    updateProfile() {

    };


    deleteProfile() {

    };


}
