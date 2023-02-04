import { Image } from "react-native";

export default function ImageViewer({ imageSource }) {
  return <Image source={imageSource} style={{ width: 50, height: 50 }} />;
}
