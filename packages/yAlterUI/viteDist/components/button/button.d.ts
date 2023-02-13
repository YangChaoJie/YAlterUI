/// <reference types="@yalert-ui/icons" />
import { PropType } from "vue";
import { Size, ButtonType, Shape } from "./interface";
declare const YButton: import("vue").DefineComponent<{
    size: PropType<Size>;
    disabled: BooleanConstructor;
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    text: BooleanConstructor;
    link: BooleanConstructor;
    loading: BooleanConstructor;
    shape: {
        type: PropType<Shape>;
        default: string;
    };
    icon: {
        type: ObjectConstructor;
        default: any;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderd: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingIcon: {
        type: ObjectConstructor;
        default: () => import("@yalert-ui/icons").SvgIcon;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: PropType<Size>;
    disabled: BooleanConstructor;
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    text: BooleanConstructor;
    link: BooleanConstructor;
    loading: BooleanConstructor;
    shape: {
        type: PropType<Shape>;
        default: string;
    };
    icon: {
        type: ObjectConstructor;
        default: any;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderd: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingIcon: {
        type: ObjectConstructor;
        default: () => import("@yalert-ui/icons").SvgIcon;
    };
}>>, {
    disabled: boolean;
    type: ButtonType;
    text: boolean;
    link: boolean;
    loading: boolean;
    shape: Shape;
    icon: Record<string, any>;
    dashed: boolean;
    borderd: boolean;
    loadingIcon: Record<string, any>;
}>;
export declare type Button = InstanceType<typeof YButton>;
export { YButton };
