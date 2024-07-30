// import React, { useState, useEffect } from 'react';
// import { Button, TextInput } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const App = () =>  {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   // verification code (OTP - One-Time-Passcode)
//   const [code, setCode] = useState('');

//   // Handle login
//   function onAuthStateChanged(user) {
//     // setUser(user);
//     // if (initializing) setInitializing(false);

//     console.log(user ,'user')
//   }
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+919049546490')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { View, Button, TextInput, Text, Alert } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';

// const App = () => {
//   const [confirm, setConfirm] = useState(null);
//   const [code, setCode] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('+919325795236'); // Default phone number for testing

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

 
//   function onAuthStateChanged(user) {
//     if (user) {
//       Alert.alert('Logged In', 'You have successfully logged in!');
//     }
//     console.log(1010101,user)
//   }

//   async function signInWithPhoneNumber() {
//     try {
//       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       setConfirm(confirmation);
//     } catch (error) {
//       console.error('Error signing in with phone number:', error);
//       Alert.alert('Error', 'Failed to sign in with phone number.');
//     }
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//       Alert.alert('Success', 'Code confirmed successfully!');
//     } catch (error) {
//       console.error('Invalid code:', error);
//       Alert.alert('Error', 'Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <View>
//         <TextInput
//           placeholder="Enter phone number"
//           value={phoneNumber}
//           onChangeText={text => setPhoneNumber(text)}
//           keyboardType="phone-pad"
//         />
//         <Button title="Send OTP" onPress={signInWithPhoneNumber} />
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Enter the OTP sent to your phone:</Text>
//       <TextInput
//         placeholder="Enter code"
//         value={code}
//         onChangeText={text => setCode(text)}
//         keyboardType="number-pad"
//       />
//       <Button title="Confirm Code" onPress={confirmCode} />
//     </View>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Text, Alert, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+919325795236'); // Default phone number for testing

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user) {
    if (user) {
      Alert.alert('Logged In', 'You have successfully logged in!');
    }
    console.log(1010101, user);
  }

  async function signInWithPhoneNumber() {
    if (!phoneNumber) {
      Alert.alert('Error', 'Phone number cannot be empty.');
      return;
    }
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error('Error signing in with phone number:', error);
      Alert.alert('Error', 'Failed to sign in with phone number.');
    }
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      Alert.alert('Success', 'Code confirmed successfully!');
    } catch (error) {
      console.error('Invalid code:', error);
      Alert.alert('Error', 'Invalid code.');
    }
  }

  return (
    <View style={styles.container}>
      {!confirm ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />
          <Button title="Send OTP" onPress={signInWithPhoneNumber} />
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <Text>Enter the OTP sent to your phone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter code"
            value={code}
            onChangeText={text => setCode(text)}
            keyboardType="number-pad"
          />
          <Button title="Confirm Code" onPress={confirmCode} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default App;


