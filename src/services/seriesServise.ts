import http from "./baseServise";
import type ISeriesSearch from "@/interfaces/iSeriesSearch";
import type ISeriesDetails from "@/interfaces/iSeriesDetails";

class SeriesService {

    public buildStapiURL() : string {
        return "v1/rest/series" ;
    };

    public getAllSeriesBase() {
        return http.get<ISeriesSearch>(this.buildStapiURL() + "/search?pageNumber=0&pageSize=20");
    }

    public getSeries(uid : String) {
        return http.get<ISeriesDetails>(this.buildStapiURL() + "?uid=" + uid);
    }

    public searchSearies() {
        return http.post<ISeriesSearch>(this.buildStapiURL() + "/search?");
    }
}

export default SeriesService;