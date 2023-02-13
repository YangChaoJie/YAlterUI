import { ToastOptions } from './interface';
interface ApiMethod {
    (options: ToastOptions): () => void;
    (content: string, duration?: number): () => void;
    /** @internal */
    (options: string | ToastOptions, duration?: number): () => void;
}
export declare const useToast: import("../../util/typescript").SFCInstallWithContext<{
    (options: {}, context: any): {
        name: String;
        defaults: Record<string, unknown>;
        open: ApiMethod;
        success: ApiMethod;
        warning: ApiMethod;
        error: ApiMethod;
        loading: ApiMethod;
    };
    loading: ApiMethod;
    success: ApiMethod;
    warning: ApiMethod;
    error: ApiMethod;
    open: ApiMethod;
}>;
export default useToast;
