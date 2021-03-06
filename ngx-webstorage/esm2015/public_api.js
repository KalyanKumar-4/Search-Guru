/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Public API Surface of ngx-webstorage
 */
export { StorageStrategies } from './lib/constants/strategy';
export { CompatHelper } from './lib/helpers/compat';
export { SyncStorage } from './lib/core/templates/syncStorage';
export { AsyncStorage } from './lib/core/templates/asyncStorage';
export { StrategyCacheService } from './lib/core/strategyCache';
export { LOCAL_STORAGE, SESSION_STORAGE } from './lib/core/nativeStorage';
export { STORAGE_STRATEGIES } from './lib/strategies/index';
export { LocalStorageStrategy } from './lib/strategies/localStorage';
export { SessionStorageStrategy } from './lib/strategies/sessionStorage';
export { InMemoryStorageStrategy } from './lib/strategies/inMemory';
export { StorageStrategyStubName, StorageStrategyStub } from './stubs/storageStrategy.stub';
export { StorageStub } from './stubs/storage.stub';
export { InvalidStrategyError, StrategyIndex } from './lib/services/strategyIndex';
export { LocalStorageService } from './lib/services/localStorage';
export { SessionStorageService } from './lib/services/sessionStorage';
export {} from './lib/core/interfaces/storageStrategy';
export { LocalStorage, SessionStorage } from './lib/decorators';
export { appInit, LIB_CONFIG, NgxWebstorageModule } from './lib/module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC13ZWJzdG9yYWdlLyIsInNvdXJjZXMiOlsicHVibGljX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsa0NBQWMsMEJBQTBCLENBQUM7QUFFekMsNkJBQWMsc0JBQXNCLENBQUM7QUFFckMsNEJBQWMsa0NBQWtDLENBQUM7QUFDakQsNkJBQWMsbUNBQW1DLENBQUM7QUFDbEQscUNBQWMsMEJBQTBCLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxxQ0FBYywrQkFBK0IsQ0FBQztBQUM5Qyx1Q0FBYyxpQ0FBaUMsQ0FBQztBQUNoRCx3Q0FBYywyQkFBMkIsQ0FBQztBQUMxQyw2REFBYyw4QkFBOEIsQ0FBQztBQUM3Qyw0QkFBYyxzQkFBc0IsQ0FBQztBQUVyQyxvREFBYyw4QkFBOEIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxlQUFjLHVDQUF1QyxDQUFDO0FBQ3RELDZDQUFjLGtCQUFrQixDQUFDO0FBQ2pDLHlEQUFjLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2Ygbmd4LXdlYnN0b3JhZ2VcbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb25zdGFudHMvc3RyYXRlZ3knO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9oZWxwZXJzL2NvbXBhdCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvcmUvdGVtcGxhdGVzL3N5bmNTdG9yYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvcmUvdGVtcGxhdGVzL2FzeW5jU3RvcmFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb3JlL3N0cmF0ZWd5Q2FjaGUnO1xuZXhwb3J0IHtMT0NBTF9TVE9SQUdFLCBTRVNTSU9OX1NUT1JBR0V9IGZyb20gJy4vbGliL2NvcmUvbmF0aXZlU3RvcmFnZSc7XG5cbmV4cG9ydCB7U1RPUkFHRV9TVFJBVEVHSUVTfSBmcm9tICcuL2xpYi9zdHJhdGVnaWVzL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3N0cmF0ZWdpZXMvbG9jYWxTdG9yYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3N0cmF0ZWdpZXMvc2Vzc2lvblN0b3JhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc3RyYXRlZ2llcy9pbk1lbW9yeSc7XG5leHBvcnQgKiBmcm9tICcuL3N0dWJzL3N0b3JhZ2VTdHJhdGVneS5zdHViJztcbmV4cG9ydCAqIGZyb20gJy4vc3R1YnMvc3RvcmFnZS5zdHViJztcblxuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvc3RyYXRlZ3lJbmRleCc7XG5leHBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4vbGliL3NlcnZpY2VzL2xvY2FsU3RvcmFnZSc7XG5leHBvcnQge1Nlc3Npb25TdG9yYWdlU2VydmljZX0gZnJvbSAnLi9saWIvc2VydmljZXMvc2Vzc2lvblN0b3JhZ2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb3JlL2ludGVyZmFjZXMvc3RvcmFnZVN0cmF0ZWd5JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RlY29yYXRvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kdWxlJztcblxuXG5cblxuIl19