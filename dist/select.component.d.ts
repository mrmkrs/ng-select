import { OnChanges, OnInit, EventEmitter, ExistingProvider } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown.component';
import { IOption } from './option.interface';
import { Option } from './option';
export declare const SELECT_VALUE_ACCESSOR: ExistingProvider;
export declare class SelectComponent implements ControlValueAccessor, OnChanges, OnInit {
    options: Array<IOption>;
    allowClear: boolean;
    disabled: boolean;
    highlightColor: string;
    highlightTextColor: string;
    multiple: boolean;
    noFilter: number;
    notFoundMsg: string;
    placeholder: string;
    filterPlaceholder: string;
    label: string;
    opened: EventEmitter<null>;
    closed: EventEmitter<null>;
    selected: EventEmitter<IOption>;
    deselected: EventEmitter<IOption | IOption[]>;
    noOptionsFound: EventEmitter<string>;
    selectionSpan: any;
    dropdown: SelectDropdownComponent;
    filterInput: any;
    private _value;
    private optionList;
    hasSelected: boolean;
    hasFocus: boolean;
    isOpen: boolean;
    isBelow: boolean;
    private filterEnabled;
    private filterInputWidth;
    private isDisabled;
    private placeholderView;
    private clearClicked;
    private selectContainerClicked;
    private width;
    private top;
    private left;
    private onChange;
    private onTouched;
    /** Event handlers. **/
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    onWindowClick(): void;
    onWindowResize(): void;
    onSelectContainerClick(event: any): void;
    onSelectContainerFocus(): void;
    onSelectContainerKeydown(event: any): void;
    onDropdownOptionClicked(option: Option): void;
    onDropdownClose(focus: any): void;
    onSingleFilterClick(): void;
    onSingleFilterInput(term: string): void;
    onSingleFilterKeydown(event: any): void;
    onMultipleFilterInput(event: any): void;
    onMultipleFilterKeydown(event: any): void;
    onClearSelectionClick(event: any): void;
    onDeselectOptionClick(option: Option): void;
    /** API. **/
    open(): void;
    close(): void;
    clear(): void;
    select(value: string): void;
    /** ControlValueAccessor interface methods. **/
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    /** Value. **/
    value: string | string[];
    private valueChanged();
    /** Initialization. **/
    private updateOptionsList(firstTime);
    /** Dropdown. **/
    private toggleDropdown();
    private openDropdown();
    private closeDropdown(focus?);
    /** Select. **/
    private selectOption(option);
    private deselectOption(option);
    private clearSelection();
    private toggleSelectOption(option);
    private selectHighlightedOption();
    private deselectLast();
    /** Filter. **/
    private clearFilterInput();
    private setMultipleFilterInput(value);
    /** Keys. **/
    private KEYS;
    private handleSelectContainerKeydown(event);
    private handleMultipleFilterKeydown(event);
    private handleSingleFilterKeydown(event);
    /** View. **/
    focus(): void;
    blur(): void;
    private updateWidth();
    private updatePosition();
    private updateFilterWidth();
}
