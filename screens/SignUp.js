import React, { useState } from 'react';
import { Box, Heading, Input, Button, Text, FormControl, NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Di sini, Anda dapat menambahkan logika untuk menangani data yang dimasukkan oleh pengguna
    console.log('Name:', name);
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
        >Sign Up</Heading>
        <FormControl p={10} paddingBottom={0.10}>
          <FormControl.Label>Nama</FormControl.Label>
          <Input
            placeholder="Nama"
            value={name}
            onChangeText={(text) => setName(text)}
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
        </FormControl>
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
          <Text mt={2} >Sudah punya akun? <Text color="blue.500" onPress={()=> navigation.navigate('Edit Profile')}>Login</Text></Text>
        </FormControl>
        <Box alignItems="center" p={30} borderRadius={15} >
            <Button bg='#FAF8ED' borderRadius={15} >
                <Text color='#FAA70A' fontSize={20}>Sign Up</Text>
            </Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default SignUp;
