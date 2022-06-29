import {IHorse} from "./horseJSON";

const webApiUrl = "http://127.0.0.1:3016/horse";

class HorseService {


  public get = async (id?: string) => {
    const options = {
      method: "GET",
    }
    const URL = HorseService.makeURL(id);
    const request = new Request(URL, options);
    const response = await fetch(request);
    return response.json();
  }

  put = async (model: IHorse) => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json");
    const options = {
      method: "PUT",
      headers,
      body: JSON.stringify(model)
    }
    const request = new Request(webApiUrl, options);
    return await fetch(request);
  }

  private static makeURL = (id?: string) => {
    return id ? `${webApiUrl}/${id}` : webApiUrl;
  }


}

export default HorseService;
