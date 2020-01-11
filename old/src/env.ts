// Environment enum
export enum EnvironmentType {
    Development = "development",
    Testing = "testing",
    Production = "production",
}

// Environment calculation
export default (() => {
    switch (process.env.NODE_ENV) {
        case "production":
        case "prod":
            return EnvironmentType.Production;

        case "staging":
        case "testing":
        case "test":
            return EnvironmentType.Testing;

        default:
            return EnvironmentType.Development;
    }
})();
