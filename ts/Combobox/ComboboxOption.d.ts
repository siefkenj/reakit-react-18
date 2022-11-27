/// <reference types="react" />
import { CompositeItemOptions, CompositeItemHTMLProps } from "../Composite/CompositeItem";
import { unstable_ComboboxItemOptions as ComboboxItemOptions, unstable_ComboboxItemHTMLProps as ComboboxItemHTMLProps } from "./ComboboxItem";
export declare const unstable_useComboboxOption: {
    (options?: import("./ComboboxGridCell").unstable_ComboboxGridCellOptions | undefined, htmlProps?: unstable_ComboboxOptionHTMLProps | undefined, unstable_ignoreUseOptions?: boolean | undefined): unstable_ComboboxOptionHTMLProps;
    unstable_propsAreEqual: (prev: import("..").RoleOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
    } & {
        unstable_clickOnEnter?: boolean | undefined;
        unstable_clickOnSpace?: boolean | undefined;
    } & Pick<Partial<import("..").unstable_IdStateReturn>, "baseId" | "unstable_idCountRef"> & {
        id?: string | undefined;
    } & Pick<Partial<import("..").CompositeStateReturn>, "orientation" | "baseId" | "unstable_virtual" | "unstable_moves" | "unstable_hasActiveWidget"> & Pick<import("..").CompositeStateReturn, "down" | "up" | "next" | "first" | "last" | "currentId" | "items" | "registerItem" | "unregisterItem" | "previous" | "setCurrentId"> & import("..").BoxOptions & Pick<Partial<import("./ComboboxState").unstable_ComboboxStateReturn>, "hide" | "visible" | "inputValue" | "currentValue"> & Pick<import("./ComboboxState").unstable_ComboboxStateReturn, "registerItem" | "setInputValue"> & {
        value?: string | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        wrapElement?: ((element: import("react").ReactNode) => import("react").ReactNode) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & {
        wrapElement?: ((element: import("react").ReactNode) => import("react").ReactNode) | undefined;
    }, next: import("..").RoleOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
    } & {
        unstable_clickOnEnter?: boolean | undefined;
        unstable_clickOnSpace?: boolean | undefined;
    } & Pick<Partial<import("..").unstable_IdStateReturn>, "baseId" | "unstable_idCountRef"> & {
        id?: string | undefined;
    } & Pick<Partial<import("..").CompositeStateReturn>, "orientation" | "baseId" | "unstable_virtual" | "unstable_moves" | "unstable_hasActiveWidget"> & Pick<import("..").CompositeStateReturn, "down" | "up" | "next" | "first" | "last" | "currentId" | "items" | "registerItem" | "unregisterItem" | "previous" | "setCurrentId"> & import("..").BoxOptions & Pick<Partial<import("./ComboboxState").unstable_ComboboxStateReturn>, "hide" | "visible" | "inputValue" | "currentValue"> & Pick<import("./ComboboxState").unstable_ComboboxStateReturn, "registerItem" | "setInputValue"> & {
        value?: string | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        wrapElement?: ((element: import("react").ReactNode) => import("react").ReactNode) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & {
        wrapElement?: ((element: import("react").ReactNode) => import("react").ReactNode) | undefined;
    }) => boolean;
    __keys: readonly any[];
    __useOptions: (options: import("./ComboboxGridCell").unstable_ComboboxGridCellOptions, htmlProps: unstable_ComboboxOptionHTMLProps) => import("./ComboboxGridCell").unstable_ComboboxGridCellOptions;
};
export declare const unstable_ComboboxOption: import("reakit-system/ts/createComponent").Component<"div", import("./ComboboxGridCell").unstable_ComboboxGridCellOptions>;
export declare type unstable_ComboboxOptionOptions = CompositeItemOptions & ComboboxItemOptions;
export declare type unstable_ComboboxOptionHTMLProps = CompositeItemHTMLProps & ComboboxItemHTMLProps;
export declare type unstable_ComboboxOptionProps = unstable_ComboboxOptionOptions & unstable_ComboboxOptionHTMLProps;
