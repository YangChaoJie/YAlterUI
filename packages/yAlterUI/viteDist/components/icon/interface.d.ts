export interface IconOptions extends Record<string, any> {
    color?: string;
    size?: string;
    loading?: boolean;
    icon?: Object;
}
export declare type IconMinorProps = Pick<IconOptions, 'size' | 'color' | 'loading'>;
