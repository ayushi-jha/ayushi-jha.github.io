import { Card, Image, Text, Badge, Group, SimpleGrid, ActionIcon, Divider, Title, Container } from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { skillToBadge } from '../Utils/SkillToBadgeConverter';
import projects_json from '../assets/projects.json';

export function ProjectsContainer() {      
    const items = projects_json.map((item) => (
    <Card shadow="xs" padding="xl" radius="md" mt="xl" withBorder key={item.title}>
      <Card.Section>
        <Image
          src={item.img_src}
          height={160}
          alt={item.title}
        />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="md">
        <Text fw={500}>{item.title}</Text>
        <ActionIcon
            component="a"
            href={item.a_href}
            target='_blank'
            size="xl"
            variant='transparent'
            color='blue'
            aria-label={item.title}
        >
            <IconBrandGithub />
            <IconExternalLink />
        </ActionIcon>
      </Group>
      <Divider />
      <Text size="sm" mb="md" mt="md">{item.description}</Text>
      <Group justify='center'>
      {item.skills.map((skill, i) => {     
           return (
            <Badge leftSection={(skillToBadge as any)[skill].icon} color={(skillToBadge as any)[skill].color} mr="xs"> {skill}</Badge>
        ) 
        })}
        </Group>
    </Card>
      ));
    
  return (
    <Container mt='xl'>
    <Title variant='gradient'>Projects</Title>
    <SimpleGrid cols={2}>
        {items}   
    </SimpleGrid>
    </Container>
  );
}