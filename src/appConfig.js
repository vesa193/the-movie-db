export const appConfig = {
    general: {
        clientName: 'react-app',
        appExitRoutes: ['/', '/home', '/dashboard'],
        authRoutes: ['/login', '/register', '/reset-password'],
        isReduxDevToolsOn: true,
    },
};

export const updateConfig = (newConfig) => newConfig;

export const getConfig = () => appConfig;

export default appConfig;
