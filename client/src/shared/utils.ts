const req = require['context']('../assets/image', false, /\.(png|jpe?g|svg)$/);

export const imageNames: string[] = req.keys().map(k => k.replace('./', ''))

export const mediaAt = (width: number): string => `@media (max-width: ${width}px)`;