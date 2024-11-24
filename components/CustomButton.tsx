import { Text,TouchableOpacity } from "react-native"

const CustomButton = ({onPress, title, bgVariant="priamry", textVariant="default", IconLeft,IconRight, className, ...props}) => (

 <TouchableOpacity
  onPress={onPress}>

    {IconLeft && <IconLeft/>}
    <Text>{title}</Text>
    {IconRight && <IconRight/>}
 </TouchableOpacity>

)

export default CustomButton