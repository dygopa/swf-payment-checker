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

            let number = query["ruc"] ?? query["passport"] ?? query["id"] ?? query["policy"]
            let type = (query["id"] && 1) || (query["ruc"] && 2) || (query["passport"] && 3) || (query["policy"] && 4)
            
            let params = `Numero=${number}&Tipo=${type}`

            let URL = CHECK_USER_ID_ENDPOINT(params);
            const response = await fetch(URL, requestOptions);

            let data = await response.json();
            
            if(data[0]["Success"] !== 1) return new Error(data[0]["Mensaje"]);
            console.log(data[0])

            return data[0];
        } catch (error) {
            return new Error(error);
        }
    }
}
