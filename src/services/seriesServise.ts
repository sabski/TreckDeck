import type ISeriesSearch from "@/objects/iSeriesSearch";
import http from "./baseServise";

class SeriesService {

    public buildStapiURL() : string {
        return "v1/rest/series" ;
    };

    public getAllSeriesBase() {
        return http.get<ISeriesSearch>(this.buildStapiURL() + "/search?pageNumber=0&pageSize=20");
    }
}

export default SeriesService;