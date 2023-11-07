import React from 'react';
import { Box, VStack, HStack, NativeBaseProvider, Center, Heading, Text, Image, ScrollView } from 'native-base';


const data = [
    {
        id: 1,
        image: require('../assets/resto1.png'),
        nama: "The Dining - Chamas Brazilian Churrascaria",
        Alamat: "Vasa Hotel Surabaya, Jl. Mayjen HR. Muhammad No.31, Putat Gede, Kec. Sukomanunggal, Surabaya, Jawa Timur 60189"
    },
    {
        id: 2,
        image: require('../assets/resto2.png'),
        nama: "Pavillion Restaurant",
        Alamat: "JW Marriott Surabaya, JL. Embong Malang No. 85-89, 60261, Kedungdoro, Kec. Tegalsari, Surabaya, Jawa Timur 60261"
    },
    {
        id: 3,
        image: require('../assets/resto3.png'),
        nama: "Seventeen Restaurant & Lounge Surabaya",
        Alamat: "Harris Hotel & Conventions, Lantai 17Jl. Bangka No. 8 - 18, Gubeng, Surabaya"
    },
    {
        id: 4,
        image: require('../assets/resto4.png'),
        nama: "Kayu Contemporary Japanese Restaurant",
        Alamat: "Srijaya, Jl. Mayjen Sungkono No.212-214, Putat Gede, Kec. Sukomanunggal, Surabaya, Jawa Timur 60189"
    },
    {
        id: 5,
        image: require('../assets/resto5.png'),
        nama: "Magnolia Restaurant at Westin Surabaya",
        Alamat: "Westin Surabaya, Jalan Puncak Indah Jl. Raya Lontar No.2, Surabaya, Jawa Timur 60216"
    },

]

const List = () => {
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box flex={1} bgColor='#FAF8ED'>
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
                            marginLeft={24}
                            marginTop={35}
                            w="100%"
                            >
                                List Restaurant
                        </Center>
                    <Box flex={1}>
                        {data.map((item)  => (
                            <Box
                            key={item.id}
                            borderWidth={1}
                            borderRadius={15}
                            backgroundColor="#FAA70A"
                            padding={5}
                            marginHorizontal={15}
                            marginTop={10}
                            >
                
                                <HStack space={3}>
                                    <Box width="40%">
                                        <Image
                                            source={item.image}
                                            alt={item.name}
                                            width= '100%'
                                            h= {150}       
                                            resizeMode='cover' 
                                            borderRadius={15}
                                        />
                                    </Box>
                                    <Box width='60%'>
                                        <VStack>
                                            <Text color="warmGray.50" fontSize={14}>
                                                {item.nama}
                                            </Text>
                                            <Text marginTop={5} fontSize={10}>Alamat</Text>
                                            <Text fontSize={10}>{item.Alamat}</Text>
                                        </VStack>
                                    </Box>
                                </HStack>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </ScrollView>

        </NativeBaseProvider>
    );
   };
   
   
   export default List;