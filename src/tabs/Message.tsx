import * as React from 'react';

import {Text, Button} from 'react-native';

function MessageScreen({route, navigation}) {
  const {userID} = route.params;
  return (
    <>
      <Text>Message</Text>
      <Text>userID:{userID}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </>
  );
}
export {MessageScreen};
