interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_CURRENT_HOST: string;
}

interface Route {
    title: string,
    page: any,
    index: number,
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}