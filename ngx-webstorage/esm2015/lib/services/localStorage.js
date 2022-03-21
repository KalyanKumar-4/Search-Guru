/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SyncStorage } from '../core/templates/syncStorage';
import { StrategyIndex } from './strategyIndex';
import { StorageStrategies } from '../constants/strategy';
export class LocalStorageService extends SyncStorage {
}
/**
 * @param {?} index
 * @return {?}
 */
export function buildService(index) {
    /** @type {?} */
    const strategy = index.indexStrategy(StorageStrategies.Local);
    return new SyncStorage(strategy);
}
/** @type {?} */
export const LocalStorageServiceProvider = {
    provide: LocalStorageService,
    useFactory: buildService,
    deps: [StrategyIndex]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWxTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxXQUFXO0NBQUc7Ozs7O0FBRXZELE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBb0I7O1VBQzFDLFFBQVEsR0FBeUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7SUFDbkYsT0FBTyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQyxDQUFDOztBQUVELE1BQU0sT0FBTywyQkFBMkIsR0FBb0I7SUFDM0QsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixVQUFVLEVBQUUsWUFBWTtJQUN4QixJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7Q0FDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZhY3RvcnlQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N5bmNTdG9yYWdlfSBmcm9tICcuLi9jb3JlL3RlbXBsYXRlcy9zeW5jU3RvcmFnZSc7XG5pbXBvcnQge1N0cmF0ZWd5SW5kZXh9IGZyb20gJy4vc3RyYXRlZ3lJbmRleCc7XG5pbXBvcnQge1N0b3JhZ2VTdHJhdGVneX0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL3N0b3JhZ2VTdHJhdGVneSc7XG5pbXBvcnQge1N0b3JhZ2VTdHJhdGVnaWVzfSBmcm9tICcuLi9jb25zdGFudHMvc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSBleHRlbmRzIFN5bmNTdG9yYWdlIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNlcnZpY2UoaW5kZXg6IFN0cmF0ZWd5SW5kZXgpIHtcblx0Y29uc3Qgc3RyYXRlZ3k6IFN0b3JhZ2VTdHJhdGVneTxhbnk+ID0gaW5kZXguaW5kZXhTdHJhdGVneShTdG9yYWdlU3RyYXRlZ2llcy5Mb2NhbCk7XG5cdHJldHVybiBuZXcgU3luY1N0b3JhZ2Uoc3RyYXRlZ3kpO1xufVxuXG5leHBvcnQgY29uc3QgTG9jYWxTdG9yYWdlU2VydmljZVByb3ZpZGVyOiBGYWN0b3J5UHJvdmlkZXIgPSB7XG5cdHByb3ZpZGU6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG5cdHVzZUZhY3Rvcnk6IGJ1aWxkU2VydmljZSxcblx0ZGVwczogW1N0cmF0ZWd5SW5kZXhdXG59O1xuIl19