import type ISeries from "./iSeries";

export default class Series implements ISeries {

    uid: String;
    title: String;
    abbreviation?: String | undefined;
    productionStartYear?: Date | undefined;
    productionEndYear?: Date | undefined;
    originalRunStartDate?: Date | undefined;
    originalRunEndDate?: Date | undefined;
    seasonsCount?: Number | undefined;
    episodesCount?: Number | undefined;
    featureLengthEpisodesCount?: Number | undefined;
    
    constructor() {

    }
}