import { ActionIcon, Group } from "@mantine/core";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export function ConnectLinks() {  
 return (
    <>
    <Group>
    <ActionIcon
      component="a"
      href="https://www.linkedin.com/in/ayushi-jha/"
      target="_blank"
      size="lg"
      variant='transparent'
      color='var(--custom-color-accent-1)'
      aria-label="Linkedin Profile Ayushi Jha"
    >
      <IconBrandLinkedin />
    </ActionIcon>
    <ActionIcon
      component="a"
      href="mailto:jhaayushijha@gmail.com"
      size="lg"
      variant='transparent'
      color='var(--custom-color-accent-1)'
      aria-label="Email Ayushi Jha"
    >
      <IconMail />
    </ActionIcon>
  </Group>
</>
 )
}