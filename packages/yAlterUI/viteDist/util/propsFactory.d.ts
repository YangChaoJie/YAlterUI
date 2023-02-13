import type { ComponentObjectPropsOptions, Prop, PropType } from 'vue';
/**
 * Creates a factory function for props definitions.
 * This is used to define props in a composable then override
 * default values in an implementing component.
 *
 * @example Simplified signature
 * (props: Props) => (defaults?: Record<keyof props, any>) => Props
 *
 * @example Usage
 * const makeProps = propsFactory({
 *   foo: String,
 * })
 *
 * defineComponent({
 *   props: {
 *     ...makeProps({
 *       foo: 'a',
 *     }),
 *   },
 *   setup (props) {
 *     // would be "string | undefined", now "string" because a default has been provided
 *     props.foo
 *   },
 * }
 */
export declare function propsFactory<PropsOptions extends ComponentObjectPropsOptions>(props: PropsOptions, source?: string): <Defaults extends PartialKeys<PropsOptions> = {}>(defaults?: Defaults) => AppendDefault<PropsOptions, Defaults>;
declare type AppendDefault<T extends ComponentObjectPropsOptions, D extends PartialKeys<T>> = {
    [P in keyof T]-?: unknown extends D[P] ? T[P] : T[P] extends Record<string, unknown> ? Omit<T[P], 'type' | 'default'> & {
        type: PropType<MergeDefault<T[P], D[P]>>;
        default: MergeDefault<T[P], D[P]>;
    } : {
        type: PropType<MergeDefault<T[P], D[P]>>;
        default: MergeDefault<T[P], D[P]>;
    };
};
declare type MergeDefault<T, D> = unknown extends D ? InferPropType<T> : (NonNullable<InferPropType<T>> | D);
/**
 * Like `Partial<T>` but doesn't care what the value is
 */
declare type PartialKeys<T> = {
    [P in keyof T]?: unknown;
};
declare type InferPropType<T> = T extends null ? any : T extends {
    type: null | true;
} ? any : T extends ObjectConstructor | {
    type: ObjectConstructor;
} ? Record<string, any> : T extends BooleanConstructor | {
    type: BooleanConstructor;
} ? boolean : T extends Prop<infer V, infer D> ? (unknown extends V ? D : V) : T;
export {};
