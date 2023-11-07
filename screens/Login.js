import React, { useState } from 'react';
import { Box, Heading, Input, Button, Text, FormControl, NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Di sini, Anda dapat menambahkan logika untuk menangani data yang dimasukkan oleh pengguna
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Box flex={1} p={4} alignItems='center' justifyContent='center' bg='#FAA70A'>
        <Heading 
        paddingBottom={50}
        color= "#FAF8ED"
        fontSize="33"
        >Login</Heading>
        <FormControl p={10} paddingBottom={0.10}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
        </FormControl>
        <FormControl p={10}>
          <FormControl.Label>Kata Sandi</FormControl.Label>
          <Input
            placeholder="Kata Sandi"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureText
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
          <Text mt={2} >Don't have an account ?<Text color="blue.500" onPress={()=> navigation.navigate('Sign Up')}> Sign Up Here</Text></Text>
        </FormControl>
        <Box alignItems="center" p={30} borderRadius={15} >
            <Button bg='#FAF8ED' borderRadius={15} >
                <Text color='#FAA70A' fontSize={20}>Login</Text>
            </Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default Login;
