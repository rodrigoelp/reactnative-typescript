import * as React from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import * as Redux from "redux";
import { bindActionCreators, Dispatch } from "redux";
import { ICountState } from "../models";
import { DecrementActionCreator, IncrementActionCreator } from "../reducers/actions";
import { appStyles } from "../styles";

interface ICounterAppProps {
    count: number;
    increase: (step: number) => void;
    decrease: (step: number) => void;
}

class CounterApp extends React.Component<any, any> {
    private _props: ICounterAppProps;

    constructor(props: any) {
        super(props);
        this._props = props as ICounterAppProps;
    }

    public render() {
        return (
            <View style={appStyles.appContainer}>
                <Text style={appStyles.header}>Welcome to counter:</Text>
                <View style={appStyles.centerBox}>
                    <Text style={appStyles.reallyLargeText}>
                        {this._props.count.toString()}
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
        this._props.decrease(step);
    }

    private increment = (): void => {
        const step = this.generateStep();
        console.log(`trying to do the increment by ${step}`);
        this._props.increase(step);
    }
}

function mapStateToProps(state: ICountState) {
    return {
        count: state.currentCount,
    } as ICounterAppProps;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return bindActionCreators({
        decrease: DecrementActionCreator,
        increase: IncrementActionCreator,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
