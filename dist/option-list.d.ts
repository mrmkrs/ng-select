import { Option } from './option';
import { IOption } from './option.interface';
export declare class OptionList {
    private _options;
    private _highlightedOption;
    private _hasShown;
    isChild: boolean;
    constructor(options: Array<IOption>, isChild?: boolean);
    /** Options. **/
    readonly options: Array<Option>;
    getOptionsByValue(value: string): Array<Option>;
    /** Value. **/
    value: Array<string>;
    /** Selection. **/
    readonly selection: Array<Option>;
    select(option: Option, multiple: boolean): void;
    deselect(option: Option): void;
    clearSelection(): Array<Option>;
    /** Filter. **/
    readonly filtered: Array<Option>;
    filter(search: string): boolean;
    private resetFilter();
    /** Highlight. **/
    readonly highlightedOption: Option;
    highlight(): void;
    highlightOption(option: Option): void;
    highlightNextOption(): void;
    highlightPreviousOption(): void;
    private clearHighlightedOption();
    private getHighlightedIndexFromList(options);
    getHighlightedIndex(): number;
    /** Util. **/
    readonly hasShown: boolean;
    hasSelected(): boolean;
    getSelected(): Array<Option>;
    hasShownSelected(): boolean;
    private getFirstShown();
    private getFirstShownSelected();
    static equalValues(v0: Array<string>, v1: Array<string>): boolean;
}
