import { PropType } from "vue";
declare const YIcon: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<string>;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: ObjectConstructor;
        default: any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<string>;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: ObjectConstructor;
        default: any;
    };
}>>, {
    loading: boolean;
    icon: Record<string, any>;
    color: string;
}>;
export declare type Icon = InstanceType<typeof YIcon>;
export { YIcon };
