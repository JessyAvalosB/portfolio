export type Theme = 'light' | 'dark';
export const themes: Record<Theme, string> = {
    light: 'border-black before:bg-black before:right-1',
    dark: 'border-white before:bg-white before:left-1',
}
