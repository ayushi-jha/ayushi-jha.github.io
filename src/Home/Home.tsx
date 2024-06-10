import { Image, Container, Title, Text, Grid, Center, Divider } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { ConnectLinks } from '../Utils/ConnectLinks';

export function Home() {
  return (
    <Container size="md" mb="xl">
        <Grid align='left' justify='left' px="xl" mx="xl">
            <Grid.Col span={8} mx="xl">

            <Text size="xl" ta="left" >
                Hello!
                </Text>
                <Title order={4} ta="left">I'm Ayushi.</Title>
                
                <Text mt="md" ta="left">
                Thanks for stopping by! <br />I am a full stack engineer at Intuit, working on Java and React projects. 
                I love trying out new things and automating the boring stuff. 
                <br /> In my free time, I like to read and learn piano.
            </Text>
            <Divider my="xs" />
            <Center my="xs">
                <Text mr="md" variant='gradient' gradient={{ from: 'teal', to: 'lime', deg: 90 }}>Let's Connect!</Text>
                <IconMapPin color='pink'/> <Text mr="md">Bay Area, California</Text>
                <ConnectLinks />
            </Center>
            </Grid.Col>
            <Grid.Col span={2}>
                <Image radius="md" h={250} w="auto" fit="contain" src="src/assets/ayushi-australia.jpeg" />
            </Grid.Col>
        </Grid>
    </Container>
  );
}