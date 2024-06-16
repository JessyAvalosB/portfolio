import React from 'react'
import { ThemeProvider } from 'next-themes';

const withThemeProvider = (Story: any, context: any) => {
    return (
        <ThemeProvider>
            <Story {...context} />
        </ThemeProvider>
    )
}

export default withThemeProvider
