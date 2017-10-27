import * as React from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import * as Redux from "redux";
import { bindActionCreators, Dispatch } from "redux";
import { ICountState } from "../models";
import { DecrementActionCreator, IncrementActionCreator } from "../reducers/actions";
import { appStyles } from "../styles";

interface ICounterAppDataProps {
    count: number;
}

interface ICounterAppActionProps {
    increase: (step: number) => void;
    decrease: (step: number) => void;
}

type ICounterAppCombinedProps = ICounterAppDataProps & ICounterAppActionProps;

class CounterApp extends React.Component<ICounterAppCombinedProps, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View style={appStyles.appContainer}>
                <Text style={appStyles.header}>Welcome to counter:</Text>
                <View style={appStyles.centerBox}>
                    <Text style={appStyles.reallyLargeText}>
                        {this.props.count}
                    </Text>
                </View>
                <View style={appStyles.bottomBox}>
                    <Button title="️☝☝️☝️️ Up ️" onPress={this.increment} />
                    <Text> | </Text>
                    <Button title=" Down 👇👇👇" onPress={this.decrement} />
                </View>
            </View>
        );
    }

    private generateStep = (): number => {
        return Math.ceil(Math.random() * 10);
    }

    private decrement = (): void => {
        const step = this.generateStep();
        console.log(`trying to do the decrement by ${step}`);
        this.props.decrease(step);
    }

    private increment = (): void => {
        const step = this.generateStep();
        console.log(`trying to do the increment by ${step}`);
        this.props.increase(step);
    }
}

function mapStateToProps(state: ICountState): ICounterAppDataProps {
    return {
        count: state.currentCount,
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>): ICounterAppActionProps {
    return bindActionCreators({
        decrease: DecrementActionCreator,
        increase: IncrementActionCreator,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
