export type Theme = 'light' | 'dark';
export const themes: Record<Theme, string> = {
    light: 'bg-white border-black before:bg-black before:right-1',
    dark: 'bg-black border-white before:bg-white before:left-1',
}
