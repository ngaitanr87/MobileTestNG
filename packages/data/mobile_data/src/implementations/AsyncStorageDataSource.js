import AsyncStorage from '@react-native-async-storage/async-storage';
export class AsyncStorageDataSource {
    async getItem(key) {
        const json = await AsyncStorage.getItem(key);
        return json ? JSON.parse(json) : null;
    }
    async setItem(key, value) {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    }
    async removeItem(key) {
        await AsyncStorage.removeItem(key);
    }
    async clear() {
        await AsyncStorage.clear();
    }
}
//# sourceMappingURL=AsyncStorageDataSource.js.map