const req = require['context']('../assets/images', false, /\.(png|jpe?g|svg)$/);

export const imageNames: string[] = req.keys().map(k => k.replace('./', ''))