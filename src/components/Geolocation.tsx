import {Button, Text, Alert} from 'react-native';
import {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

let index = 0;
const GeoLocation = () => {
  const [position, setPosition] = useState('');

  function writePosition() {
    setPosition(`loading`);
    Geolocation.getCurrentPosition(
      location => {
        const {coords} = location;
        const {speed, longitude, latitude} = coords;
        setPosition(`速度:${speed}; 纬度:${longitude};经度：${latitude}`);
      },
      error => {
        setPosition(`error`);
      },
    );
  }
  function watchGeoPosition() {
    index++;
    Geolocation.watchPosition(
      location => {
        const {coords} = location;
        const {speed, longitude, latitude} = coords;
        setPosition(
          `${index}次；速度:${speed}; 纬度:${longitude};经度：${latitude}`,
        );
      },
      error => {
        setPosition(`error`);
      },
    );
  }
  return (
    <>
      <Text>定位信息：{position}</Text>
      <Button title="获取定位" onPress={() => watchGeoPosition()}></Button>
    </>
  );
};
export default GeoLocation;
