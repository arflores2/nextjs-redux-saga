import { StoreEnhancerStoreCreator } from "redux";

declare global {
    interface Window { 
        __REDUX_DEVTOOLS_EXTENSION__?: () => StoreEnhancerStoreCreator<unknown, {}>;
    }
}