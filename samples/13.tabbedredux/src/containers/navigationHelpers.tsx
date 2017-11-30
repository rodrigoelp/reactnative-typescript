import { NavigationScreenProps } from "react-navigation";

/**
 * As I don't want to be extending every single prop to be a NavigationScreenProps
 * I am going to create this interface that gets merged with the specific definition as a type
 * before it gets used.
 */
interface INavigationScreenProps extends NavigationScreenProps<{}> { }

export { INavigationScreenProps };