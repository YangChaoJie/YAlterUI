import { ToastOptions } from './interface';
import { IconMinorProps } from "../icon/interface";
declare const _default: import("vue").DefineComponent<{
    bodyWidth: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: import("vue").PropType<Record<string, any> | (() => any)>;
        default: any;
    };
    iconProps: {
        type: import("vue").PropType<IconMinorProps>;
        default: () => {
            size: string;
            color: string;
            loading: boolean;
        };
    };
    position: {
        type: import("vue").PropType<import("./interface").ToastPosition>;
        default: string;
    };
    transitonName: {
        type: StringConstructor;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClass: {
        type: import("vue").PropType<import("./props").ClassType>;
        default: any;
    };
    maskStyle: {
        type: import("vue").PropType<import("./props").StyleType>;
        default: any;
    };
    parseHtml: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderFunc: {
        type: import("vue").PropType<(options: ToastOptions) => any>;
        default: any;
    };
}, any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    bodyWidth: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: import("vue").PropType<Record<string, any> | (() => any)>;
        default: any;
    };
    iconProps: {
        type: import("vue").PropType<IconMinorProps>;
        default: () => {
            size: string;
            color: string;
            loading: boolean;
        };
    };
    position: {
        type: import("vue").PropType<import("./interface").ToastPosition>;
        default: string;
    };
    transitonName: {
        type: StringConstructor;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClass: {
        type: import("vue").PropType<import("./props").ClassType>;
        default: any;
    };
    maskStyle: {
        type: import("vue").PropType<import("./props").StyleType>;
        default: any;
    };
    parseHtml: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderFunc: {
        type: import("vue").PropType<(options: ToastOptions) => any>;
        default: any;
    };
}>>, {
    icon: any;
    showMask: boolean;
    iconProps: {
        size: string;
        color: string;
        loading: boolean;
    };
    position: import("./interface").ToastPosition;
    closable: boolean;
    maskClose: boolean;
    maskClass: any;
    maskStyle: import("./props").StyleType;
    bodyWidth: number;
    transitonName: string;
    parseHtml: boolean;
    renderFunc: (options: ToastOptions) => any;
}>;
export default _default;
