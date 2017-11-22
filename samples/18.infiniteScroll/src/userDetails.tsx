import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationScreenProps, NavigationScreenOptions } from "react-navigation";
import { IUser } from "./models";

interface IUserDetailsProps {
    user: IUser
}

interface IUserDetailsNavProps extends NavigationScreenProps<IUserDetailsProps> { }

class UserDetails extends React.Component<IUserDetailsNavProps> {

    constructor(props: IUserDetailsNavProps) {
        super(props);
    }

    public render() {
        const { user } = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 20, backgroundColor: "white", borderRadius: 40, padding: 16 }}>
                <View style={{ flexDirection: "row", alignSelf: "stretch", alignItems: "center" }}>
                    <Image source={{ uri: user.picture.large, height: 150, width: 150 }} style={{ borderRadius: 40 }} />
                    <Text style={{ flex: 1, textAlign: "right", fontSize: 36, fontWeight: "bold" }}>
                        {user.name.first}{"\n"}{user.name.last}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>Details:</Text>
                    <Text style={{ fontSize: 20 }}>
                        Email:{"\n"}{user.email}{"\n\n"}
                        Birth:{"\n"}{user.dob}{"\n\n"}
                        Phone:{"\n"}{user.phone}{"\n\n"}
                        Address:{"\n"}{user.location.street}, {user.location.city}, {user.location.state} - {user.location.postcode}{"\n\n"}
                        Registered:{"\n"}{user.registered}{"\n\n"}
                    </Text>
                </View>
            </View>
        );
    }
}

export { UserDetails, IUserDetailsProps };
