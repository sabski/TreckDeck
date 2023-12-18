import type IPageInfo from "./iPageInfo";
import type ISearchSort from "./iSearchSort";
import type ISeries from "./iSeries";

export default interface ISeriesSearch {
    page : Array<IPageInfo>;
    series : Array<ISeries>;
    sort: ISearchSort;
}