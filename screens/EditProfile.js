import React from "react";
import { NativeBaseProvider, Center, Heading, Box, Container, FormControl, Item, Input, Button, Text, ScrollView } from "native-base";
// import { ScrollView } from "react-native-gesture-handler";
// import { useNavigation } from "@react-navigation/native";

// const navigation= useNavigation()
const EditProfile = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box flex={1} bg='#FAF8ED'>
          <Box flex={1} bg='#FAF8ED' p={60} alignItems='center'>
            <Center 
            bg="#FAA70A" 
            _text={{
                color: "warmGray.50",
                fontSize:"25",
              }} 
            height={12} 
            width={{
                base: 200,
                lg: 250}}
            borderRadius={15}
            >
                  Edit Profile
            </Center>
        
          </Box>
          <Box flex={6} bg='#FAA70A'  borderTopRadius={80}>
            <Box>
              <FormControl p={34} >
                <FormControl.Label>Email ID</FormControl.Label>
                <Input bg={"white"} />
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>Email ID</FormControl.Label>
                <Input bg={"white"} />
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>Email ID</FormControl.Label>
                <Input bg={"white"} />
              </FormControl>
              <FormControl paddingTop={1} p={30} >
                <FormControl.Label>Email ID</FormControl.Label>
                <Input bg={"white"} />
              </FormControl>
            </Box>
            <Box alignItems="center" p={30} borderRadius={15} >
              <Button bg='#FAF8ED' >
                <Text color='#FAA70A'>Update Profile</Text></Button>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default EditProfile;