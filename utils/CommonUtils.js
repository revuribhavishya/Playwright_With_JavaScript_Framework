import cryptoJs from "crypto-js"

export default class CommonUtils{
     secretKey;
    constructor(){
    //  this.secretKey = process.env.SECRET_KEY ?  process.env.SECRET_KEY : "" ;
       if (process.env.SECRET_KEY ){
        this.secretKey = process.env.SECRET_KEY;
       }
       else{
            throw new Error("plz provide secret key while starting execution")
       }
    }
     encryptData(data){
       const encryptedData=  cryptoJs.AES.encrypt(data, this.secretKey).toString();
       console.log(encryptedData);
       return encryptedData;
    }

    decryptData(encData){
        const decryptedData= cryptoJs.AES.decrypt(encData, this.secretKey).toString(cryptoJs.enc.Utf8);
        return decryptedData;
    }

  
}