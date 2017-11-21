import * as React from "react";
import { Text, View } from "react-native";

// this definition is equals to `{}` which I could have used when declaring the AppShell...
// decided against it to be more clear.
// Note: Linter does not like this and will suggest you to replace the usage of the interface
// to `{}`
interface IProps { }

interface IState { // this defines the shape of the state we are going to be using in the component.
    loading: boolean;
    refreshing: boolean;
    data: any[],
    page: number,
    seed: number,
    error?: Error
}

// This component contains the entry point to the application.
// alternatively, the declaration could have been `export class AppShell extends...` but I prefer
// to declare all my exports together at the bottom.
class AppShell extends React.Component<IProps, IState> {
    /**
     * Initializes an instance of AppShell.
     */
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <View style={{ flex: 1, paddingVertical: 44 }}>
                <Text style={{ alignSelf: "stretch", textAlign: "center", textAlignVertical: "center" }}>
                    Boilerplate component to get typescript going.
                </Text>
            </View>
        );
    }
}

export { AppShell };
