import { isNullOrUndefined } from "../globalfunctions";

class Fetcher {
    public static fetchInstanceOf<T>(uri: string): Promise<T> {
        return fetch(uri)
            .then((response) => response.text())
            .then((content) => {
                const result: T = JSON.parse(content);
                if (isNullOrUndefined(result)) {
                    throw Error(`Could not download data from the requested api ${uri}`);
                }
                return result;
            });
    }
}

export { Fetcher };
