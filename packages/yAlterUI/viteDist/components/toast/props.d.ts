import { PropType, CSSProperties } from "vue";
import type { ToastPosition } from "./interface";
import { ToastOptions } from './interface';
import { IconMinorProps } from "../icon/interface";
export declare type ClassType = string | Record<string, any> | Array<string | Record<string, any>>;
export declare type StyleType = string | CSSProperties | Array<string | CSSProperties>;
export declare const classProp: PropType<ClassType>;
export declare const styleProp: PropType<StyleType>;
export declare const toastProps: <Defaults extends {
    bodyWidth?: unknown;
    icon?: unknown;
    iconProps?: unknown;
    position?: unknown;
    transitonName?: unknown;
    closable?: unknown;
    maskClose?: unknown;
    showMask?: unknown;
    maskClass?: unknown;
    maskStyle?: unknown;
    parseHtml?: unknown;
    renderFunc?: unknown;
} = {}>(defaults?: Defaults) => {
    bodyWidth: unknown extends Defaults["bodyWidth"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["bodyWidth"] ? number : number | Defaults["bodyWidth"]>;
        default: unknown extends Defaults["bodyWidth"] ? number : number | Defaults["bodyWidth"];
    };
    icon: unknown extends Defaults["icon"] ? {
        type: PropType<Record<string, any> | (() => any)>;
        default: any;
    } : Omit<{
        type: PropType<Record<string, any> | (() => any)>;
        default: any;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["icon"] ? any : any>;
        default: unknown extends Defaults["icon"] ? any : any;
    };
    iconProps: unknown extends Defaults["iconProps"] ? {
        type: PropType<IconMinorProps>;
        default: () => {
            size: string;
            color: string;
            loading: boolean;
        };
    } : Omit<{
        type: PropType<IconMinorProps>;
        default: () => {
            size: string;
            color: string;
            loading: boolean;
        };
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["iconProps"] ? {
            size: string;
            color: string;
            loading: boolean;
        } : {
            size: string;
            color: string;
            loading: boolean;
        } | Defaults["iconProps"]>;
        default: unknown extends Defaults["iconProps"] ? {
            size: string;
            color: string;
            loading: boolean;
        } : {
            size: string;
            color: string;
            loading: boolean;
        } | Defaults["iconProps"];
    };
    position: unknown extends Defaults["position"] ? {
        type: PropType<ToastPosition>;
        default: string;
    } : Omit<{
        type: PropType<ToastPosition>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["position"] ? ToastPosition : Defaults["position"] | NonNullable<ToastPosition>>;
        default: unknown extends Defaults["position"] ? ToastPosition : Defaults["position"] | NonNullable<ToastPosition>;
    };
    transitonName: unknown extends Defaults["transitonName"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["transitonName"] ? string : string | Defaults["transitonName"]>;
        default: unknown extends Defaults["transitonName"] ? string : string | Defaults["transitonName"];
    };
    closable: unknown extends Defaults["closable"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["closable"] ? boolean : boolean | Defaults["closable"]>;
        default: unknown extends Defaults["closable"] ? boolean : boolean | Defaults["closable"];
    };
    maskClose: unknown extends Defaults["maskClose"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["maskClose"] ? boolean : boolean | Defaults["maskClose"]>;
        default: unknown extends Defaults["maskClose"] ? boolean : boolean | Defaults["maskClose"];
    };
    showMask: unknown extends Defaults["showMask"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["showMask"] ? boolean : boolean | Defaults["showMask"]>;
        default: unknown extends Defaults["showMask"] ? boolean : boolean | Defaults["showMask"];
    };
    maskClass: unknown extends Defaults["maskClass"] ? {
        type: PropType<ClassType>;
        default: any;
    } : Omit<{
        type: PropType<ClassType>;
        default: any;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["maskClass"] ? any : any>;
        default: unknown extends Defaults["maskClass"] ? any : any;
    };
    maskStyle: unknown extends Defaults["maskStyle"] ? {
        type: PropType<StyleType>;
        default: any;
    } : Omit<{
        type: PropType<StyleType>;
        default: any;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["maskStyle"] ? StyleType : Defaults["maskStyle"] | NonNullable<StyleType>>;
        default: unknown extends Defaults["maskStyle"] ? StyleType : Defaults["maskStyle"] | NonNullable<StyleType>;
    };
    parseHtml: unknown extends Defaults["parseHtml"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["parseHtml"] ? boolean : boolean | Defaults["parseHtml"]>;
        default: unknown extends Defaults["parseHtml"] ? boolean : boolean | Defaults["parseHtml"];
    };
    renderFunc: unknown extends Defaults["renderFunc"] ? {
        type: PropType<(options: ToastOptions) => any>;
        default: any;
    } : Omit<{
        type: PropType<(options: ToastOptions) => any>;
        default: any;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["renderFunc"] ? (options: ToastOptions) => any : ((options: ToastOptions) => any) | Defaults["renderFunc"]>;
        default: unknown extends Defaults["renderFunc"] ? (options: ToastOptions) => any : ((options: ToastOptions) => any) | Defaults["renderFunc"];
    };
};
export declare type ToastProps = PropType<typeof toastProps>;
