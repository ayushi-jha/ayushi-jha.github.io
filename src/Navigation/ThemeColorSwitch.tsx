import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Container } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeColorSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="subtle"
      color='var(--custom-color-accent-1)'
      size="xl"
      aria-label="Toggle color scheme"
    >
            <Container lightHidden>
            <IconSun />
      </Container>
      <Container darkHidden>
            <IconMoon />
      </Container>
    </ActionIcon>
  );
}
