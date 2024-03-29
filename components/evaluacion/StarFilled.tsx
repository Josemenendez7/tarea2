import { SvgXml } from "react-native-svg";
import { starProp } from "./Evaluacion";
import { Pressable } from "react-native";

const xml = `
<svg fill="#eba421" width="800px" height="800px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M 11.9688 52.2930 C 12.9298 53.0195 14.1485 52.7617 15.6016 51.7071 L 28.0001 42.6133 L 40.4220 51.7071 C 41.8751 52.7617 43.0704 53.0195 44.0548 52.2930 C 45.0157 51.5664 45.2267 50.3711 44.6407 48.6602 L 39.7422 34.0820 L 52.2578 25.0820 C 53.7112 24.0508 54.2968 22.9727 53.9219 21.8008 C 53.5470 20.6758 52.4454 20.1133 50.6406 20.1367 L 35.2891 20.2305 L 30.6251 5.5820 C 30.0626 3.8476 29.2188 2.9805 28.0001 2.9805 C 26.8048 2.9805 25.9610 3.8476 25.3985 5.5820 L 20.7344 20.2305 L 5.3829 20.1367 C 3.5782 20.1133 2.4766 20.6758 2.1016 21.8008 C 1.7032 22.9727 2.3126 24.0508 3.7657 25.0820 L 16.2813 34.0820 L 11.3829 48.6602 C 10.7969 50.3711 11.0079 51.5664 11.9688 52.2930 Z"/></svg>
`;


const StarFilled = (props: starProp) => {
    const handleOnPress = ()=> {
        props.onClick(props.posicion);
    };

    return (
        <Pressable onPress={handleOnPress}>
        <SvgXml xml={xml} width={50} height={50} />
    </Pressable> 
         );
};

export default StarFilled;
