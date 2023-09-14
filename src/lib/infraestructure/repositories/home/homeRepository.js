import { CHECK_USER_ID_ENDPOINT } from "../../../domain/config/api/dictionary";

let myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
//myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token.jwt.sb")}`);

export class HomeRepository {
    async checkUserID(query) {
        try {
            var requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };

            let URL = CHECK_USER_ID_ENDPOINT(query["ruc"] ?? query["passport"] ?? query["id"]);
            const response = await fetch(URL, requestOptions);

            let data = await response.json();
            
            if(data["Success"] !== 1) return new Error(error);

            return data;
        } catch (error) {
            return new Error(error);
        }
    }
}
