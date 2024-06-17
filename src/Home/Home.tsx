import { Image, Container, Text, Grid, Divider, Center, Space, Button, Timeline, Stack, Group } from '@mantine/core';
import img from '../assets/ayushi-pic-transparent.png';
import resume from '../assets/Ayushi_Jha_Resume.pdf';
import { IconBriefcase, IconClover, IconCode, IconExternalLink, IconMapPin } from '@tabler/icons-react';
import { ConnectLinks } from '../Utils/ConnectLinks';

// Use this function for the divider design (looks like index or content page of books).
// function dividerComponent(iconComponent: ReactNode, labelText: string | ReactNode) {
//   return (
//     <Divider
//             my="xs"
//             variant="dotted"
//             labelPosition="left"
//             size="sm"
//             color="var(--custom-color-accent-2)"
//             label={
//               <>
//                 <Center><Group>{iconComponent} <Text mr="md" c="var(--custom-color-accent-1)"> {labelText}</Text></Group></Center>
//               </>
//             }
//           />
//   );

// }


function timelineComponent(bulletSize: number, iconSize: number, textSize: string) {
return (<>
<Timeline active={3} bulletSize={bulletSize} lineWidth={2}>
      <Timeline.Item 
      bullet={<IconClover size={iconSize} color='var(--mantine-color-body)' />} 
      title="Hi, thanks for stopping by!" 
      color='var(--custom-color-accent-2)'>
        <Text c="var(--custom-color-accent-1)" size={textSize}>I'm Ayushi btw. I've built this website using Mantine UI + React using Vite for quick single-page app development. I've used github pages for hosting since it's free and easy-to-use for static content.</Text>
      </Timeline.Item>

      <Timeline.Item 
      bullet={<IconMapPin size={iconSize} color='var(--mantine-color-body)' />} 
      title="Bay Area, California" 
      color='var(--custom-color-accent-1)'>
        <Text c="var(--custom-color-accent-1)" size={textSize}>Originally from New Delhi, India, I moved to Los Angeles for higher education and finally to Bay Area for work. I travel occassionally and have loved wandering in the cities of San Diego, Seattle, New York, as well as the beautiful country of Australia.</Text>
      </Timeline.Item>

      <Timeline.Item 
      bullet={<IconBriefcase size={iconSize} color='var(--mantine-color-body)' />} 
      title="Software Engineer, Intuit" 
      color='var(--custom-color-accent-2)'>
        <Text c="var(--custom-color-accent-1)" size={textSize}>I am a full stack engineer working on a varied tech stack (React, TypeScript, Java, Python etc.) handling microservices, data pipelines and UI tools for internal data, marketing and business product needs. 
        </Text>
      </Timeline.Item>

      <Timeline.Item 
      bullet={<IconCode size={iconSize} color='var(--mantine-color-body)' />} 
      title="Projects" 
      color='var(--custom-color-accent-1)'>
        <Text c="var(--custom-color-accent-1)" size={textSize}>
          Check out my projects on<Button component='a' target='_blank' href="https://github.com/ayushi-jha" c="var(--custom-color-accent-1)" variant="transparent" td="underline" rightSection={<IconExternalLink />}>Github</Button> 
        </Text>
      </Timeline.Item>
    </Timeline>
</>);
}

export function Home() {
  return (
    <Container size="xl">
        <Grid align='left' justify='left' px="xl" mx="xl" visibleFrom="sm">
            <Grid.Col span={10} >
              {/* {dividerComponent(<IconClover color='var(--custom-color-accent-2)'/>, "Hi! I'm Ayushi. Thanks for stopping by!")}
              {dividerComponent(<IconMapPin color='var(--custom-color-accent-2)'/>, "Bay Area, California")}
              {dividerComponent(<IconBriefcase color='var(--custom-color-accent-2)'/>, "Intuit, Mountain View, CA")}
              {dividerComponent(<IconCode color='var(--custom-color-accent-2)'/>, "Full stack development, Java, Python, React, TypeScript")} */}
      
      {timelineComponent(35, 20, "sm")}
        <Space my="xl" />
        <Center>
          <Button
            component="a"
            target="_blank"
            href={resume}
            variant="gradient"
            gradient={{ from: 'var(--custom-color-accent-1)', to: 'var(--custom-color-accent-2)', deg: 30 }}  
            c="var(--mantine-color-body)"    
            rightSection={<IconExternalLink />}
          >
            Resumé
            </Button>
          </Center>
          <Space my="xl" />
        <Divider
            my="xl"
            size="sm"
            variant="solid"
            labelPosition="center"
            color="var(--custom-color-accent-1)"
            label={
              <>
                <Text size="xl" variant="gradient" gradient={{ from: 'var(--custom-color-accent-1)', to: 'var(--custom-color-accent-2)', deg: 90 }}>* * *</Text>
                {/* <Text size="xl" c="var(--custom-color-accent-2)" >Let's Connect!</Text> */}
              </>
            }
          />
            </Grid.Col>
            <Grid.Col span={2}>
                <Image h={200} w="auto" fit="contain" src={img} />
                <Text size="xl" variant="gradient" gradient={{ from: 'var(--custom-color-accent-1)', to: 'var(--custom-color-accent-2)', deg: 90 }}>Let's Connect!</Text>

          <Center>
            
        <ConnectLinks />
      </Center>
                {/* To make a circle of image <Image h={200} radius="50%" w="auto" fit="contain" src={img} /> */}
            </Grid.Col>
        </Grid>


        {/* Responsive - Mobile Screen  */}
        <Stack hiddenFrom='sm'>
        {timelineComponent(25, 15, "xs")}
        <Group align='center'>
          <Stack align='center'>
        <Text size="sm" variant="gradient" gradient={{ from: 'var(--custom-color-accent-1)', to: 'var(--custom-color-accent-2)', deg: 90 }}>Let's Connect!</Text>
          <ConnectLinks />
        <Button
            component="a"
            target="_blank"
            href={resume}
            size='xs'
            variant="gradient"
            gradient={{ from: 'var(--custom-color-accent-1)', to: 'var(--custom-color-accent-2)', deg: 30 }}  
            c="var(--mantine-color-body)"    
            rightSection={<IconExternalLink />}
          >
            Resumé
            </Button>
            </Stack>
            <Image h={150} w="auto" fit="contain" src={img} />

            </Group>
        </Stack>
    </Container>
  );
}