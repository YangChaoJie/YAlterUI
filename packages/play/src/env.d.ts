/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 加上下面这个 会让原本的提示失效
// declare module '@vue/runtime-core' {
//   interface yalertui {

//   }
// }

// import { Plugin, PropType, App } from 'vue';

// declare const YFooter: vue.DefineComponent<{}, () => JSX.Element, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, vue.EmitsOptions, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{}>>, {}>;
// //# sourceMappingURL=YFooter.d.ts.map

// declare const FooterPlugin: Plugin;

// declare type Size = 'tiny' | 'small' | 'medium' | 'large';
// declare type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'error';

// declare const YButton: vue.DefineComponent<{
//     size: PropType<Size>;
//     disabled: BooleanConstructor;
//     type: {
//         type: PropType<ButtonType>;
//         default: string;
//     };
//     borderd: {
//         type: BooleanConstructor;
//         default: boolean;
//     };
// }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
//     size: PropType<Size>;
//     disabled: BooleanConstructor;
//     type: {
//         type: PropType<ButtonType>;
//         default: string;
//     };
//     borderd: {
//         type: BooleanConstructor;
//         default: boolean;
//     };
// }>>, {
//     type: ButtonType;
//     disabled: boolean;
//     borderd: boolean;
// }>;

// declare const buttonPlugin: Plugin;

// declare const yalertui: {
//     install(app: App, options?: {}): void;
// };
// //# sourceMappingURL=index.d.ts.map

// export { FooterPlugin, YButton, YFooter, buttonPlugin, yalertui as default };
