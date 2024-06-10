import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Container } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeColorSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
            <Container color="transparent" lightHidden>
            <IconSun />
      </Container>
      <Container color="transparent" darkHidden>
            <IconMoon />
      </Container>
    </ActionIcon>
  );
}
