import { ActionIcon, Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export function ConnectLinks() {  
 return (
    <>
    <Group visibleFrom="sm">
    <ActionIcon
      component="a"
      href="https://www.linkedin.com/in/ayushi-jha/"
      target="_blank"
      size="lg"
      variant='transparent'
      color='blue'
      aria-label="Linkedin Profile Ayushi Jha"
    >
      <IconBrandLinkedin />
    </ActionIcon>
    <ActionIcon
      component="a"
      href="https://github.com/ayushi-jha"
      target="_blank"
      size="lg"
      variant='default'
      color='black'
      aria-label="Github Link Ayushi Jha"
    >
      <IconBrandGithub />
    </ActionIcon>
    <ActionIcon
      component="a"
      href="mailto:jhaayushijha@gmail.com"
      size="lg"
      variant='transparent'
      color='violet'
      aria-label="Email Ayushi Jha"
    >
      <IconMail />
    </ActionIcon>
  </Group>
</>
 )
}