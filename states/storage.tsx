import {MMKV} from "react-native-mmkv";

const storage = new MMKV()

export const token_storage = new MMKV({
    id: "user_storage",
    encryptionKey: "RSA KEY"
})
