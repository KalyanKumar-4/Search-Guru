export interface StrategyCache {
    [key: string]: any;
}
export declare class StrategyCacheService {
    protected caches: {
        [name: string]: StrategyCache;
    };
    get(strategyName: string, key: string): any;
    set(strategyName: string, key: string, value: any): void;
    del(strategyName: string, key: string): void;
    clear(strategyName: string): void;
    protected getCacheStore(strategyName: string): StrategyCache;
}
