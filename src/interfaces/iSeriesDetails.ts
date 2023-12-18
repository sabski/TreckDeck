import type IEpisode from "./iEpisode";
import type ISeason from "./iSeason";
import type ISeries from "./iSeries";

export default interface ISeriesDetails {
    series : ISeries,
    episodes: Array<IEpisode>,
    seasons: Array<ISeason>
}