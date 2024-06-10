import {
  Group,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ConnectLinks } from '../Utils/ConnectLinks';
import { ThemeColorSwitch } from './ThemeColorSwitch';
import classes from './HeaderMegaMenu.module.css';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              <Text
                size="xl"
                fw={900}
                variant="gradient"
                gradient={{ from: 'teal', to: 'lime', deg: 90 }}
              >
                Ayushi Jha
              </Text>
            </a>
          </Group>

          <ConnectLinks />
          <ThemeColorSwitch />

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <Divider my="sm" />

          <ConnectLinks />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}