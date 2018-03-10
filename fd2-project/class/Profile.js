`use strict`;

import DAO from "./DAO";

export default class Profile {
    constructor() {
        this.data = {
            key: 1,
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
        this.DBconfig = {
            key: 1,
            profileDBName: `profileDB`,
            profileStoreName: `profileStore`
        };

        this.profileDAO = new DAO(this.DBconfig.profileDBName, this.DBconfig.profileStoreName);

       // this.createProfile();
        this.readProfile();

    }




    createProfile() {


    };

    readProfile() {

        //let DBconf = this.DBconfig;
        let dadata = this.data;
        let DAO=this.profileDAO;

//read closure
        let read = function (dbsession) {

            console.log(DAO.storeName);


            let transaction = dbsession.transaction([DAO.storeName], "readonly");



            transaction.oncomplete = function (event) {
                console.log("readProfile transaction complete");

            };

            transaction.onerror = function (event) {
                console.log("readProfile transaction error");
            };

            let objectStore = transaction.objectStore(DAO.storeName);



            let objectStoreRequest = objectStore.get(1);

            objectStoreRequest.onsuccess = function (event) {

                console.log("readProfile onsuccess");

                let result_data = objectStoreRequest.result;
                dadata = result_data;
               // this.data=dadata;


                console.log(result_data);

            };
        }

         //upgdare closure
        let onupgradeneeded = function (e) {
            // Если БД еще не существует, то создаем хранилище объектов.
            let self= this; //request
            let db = e.currentTarget.result;
            db.createObjectStore(DAO.storeName, {keyPath: "key"});
            //fill
            let objectStore = self.transaction.objectStore(DAO.storeName);
            dadata.key = 1;
            dadata.name = `Veronika`;
            dadata.gender = `женский`;
            dadata.dateOfBirth = `29.04.1981`;
            dadata.height = `75 кг`;
            dadata.weght = `165 см`;
            dadata.waist = `80 см`;
            dadata.hipsize = `75 см`;
            dadata.breastSize = `100 см`;
            dadata.calories = `1100 ккал`;

            let objectStoreRequest = objectStore.add(dadata);
            objectStoreRequest.onsuccess = function (event) {
                // report the success of the request (this does not mean the item
                // has been stored successfully in the DB - for that you need transaction.oncomplete)

                console.log("dadata fill ok");
            };


        };


        DAO.connect(read,onupgradeneeded)

    };


    updateProfile() {

    };


    deleteProfile() {

    };


}
