export interface IOption {
    value: string;
    label: string;
    disabled?: boolean;
    children?: Array<IOption>;
}
