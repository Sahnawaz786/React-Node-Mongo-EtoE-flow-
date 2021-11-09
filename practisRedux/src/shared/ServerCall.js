import axios from "axios";
let baseurl = "https://jsonplaceholder.typicode.com/";

let mongourl = 'http://localhost:2030/std/';

class ServerCall{
    static fnSendGetReq(url,isMongo){
        let _url =isMongo ? mongourl : baseurl
        return axios.get(_url+url);
    }

    static fnSendPostReq(url,data,isMongo){
        let _url =isMongo ? mongourl : baseurl
        return axios.post(_url+url,data);
    }
}

export default ServerCall;