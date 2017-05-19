import {IOption} from './option.interface';
import {OptionList} from './option-list';

export class Option {

    wrappedOption: IOption;

    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;
    children: OptionList;

    constructor(option: IOption) {
        this.wrappedOption = option;

        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;

        // Add children in their own option list
        if (this.wrappedOption.hasOwnProperty('children')) {
            this.children = new OptionList(this.wrappedOption.children, true);
        }
    }

    get value(): string {
        return this.wrappedOption.value;
    }

    get label(): string {
        return this.wrappedOption.label;
    }

    hasChildren(): boolean {
        return this.children ? (this.children.options.length > 0) : false;
    }

    hasSelected(): boolean {
        return this.children ? this.children.hasSelected() : false;
    }

    getSelected(): Array<Option>  {
        return this.children.getSelected();
    }

    clearSelection(): void {
        this.selected = false;
        if (this.hasChildren()) {
            this.children.clearSelection();
        }
    }
}
