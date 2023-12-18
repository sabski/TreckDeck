import type IOriginalBrodcaster from "./iOriginalBrodcaster";
import type IProductionCompnay from "./iProductionCompnay";

export default interface ISeries {
    uid : String;
    title : String;
    abbreviation? : String;
    productionStartYear? :  Date;
    productionEndYear?:  Date;
    originalRunStartDate? :  Date;
    originalRunEndDate? :  Date;
    seasonsCount? :  Number;
    episodesCount? :  Number;
    featureLengthEpisodesCount? :  Number;
    productionComponay : IProductionCompnay;
    originalBroadcaster : IOriginalBrodcaster;   
}