import { ADD_PHRASE } from "../constants/action-types";

export function addPhrase(payload) {
    return {type: ADD_PHRASE, payload};
}
