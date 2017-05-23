import { IOption } from './option.interface';
import { OptionList } from './option-list';
export declare class Option {
    wrappedOption: IOption;
    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;
    children: OptionList;
    constructor(option: IOption);
    readonly value: string;
    readonly label: string;
    hasChildren(): boolean;
    hasSelected(): boolean;
    getSelected(): Array<Option>;
    clearSelection(): Array<Option>;
    setSelected(v: Array<string>): void;
}
