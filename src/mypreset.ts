import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import Material from '@primeng/themes/material';
import Lara from '@primeng/themes/lara';
import Nora from '@primeng/themes/nora';

// Define all presets
const AuraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    },
    colorScheme: {
        light: {
            surface: {
                // 0: 'var(--surface-color)',
                // 50: 'var(--surface-color)',
                // 100: 'var(--surface-color)',
                // 200: 'var(--surface-color)',
                // 300: 'var(--surface-color)',
                // 400: 'var(--surface-color)',
                // 500: 'var(--surface-color)',
                // 600: 'var(--surface-color)',
                // 700: 'var(--surface-color)',
                // 800: 'var(--surface-color)',
                // 900: 'var(--surface-color)',
                // 950: 'var(--surface-color)',
            }
        },
        dark: {
            surface: {
              // 0: 'var(--surface-color)',
              // 50: 'var(--surface-color)',
              // 100: 'var(--surface-color)',
              // 200: 'var(--surface-color)',
              // 300: 'var(--surface-color)',
              // 400: 'var(--surface-color)',
              // 500: 'var(--surface-color)',
              // 600: 'var(--surface-color)',
              // 700: 'var(--surface-color)',
              // 800: 'var(--surface-color)',
              // 900: 'var(--surface-color)',
              // 950: 'var(--surface-color)',
            }
        }
    }
  }
});

const MaterialPreset = definePreset(Material, {
  semantic: {
    primary: {
      // 50: 'var(--primary-color)',
      // 100: 'var(--primary-color)',
      // 200: 'var(--primary-color)',
      // 300: 'var(--primary-color)',
      // 400: 'var(--primary-color)',
      // 500: 'var(--primary-color)',
      // 600: 'var(--primary-color)',
      // 700: 'var(--primary-color)',
      // 800: 'var(--primary-color)',
      // 900: 'var(--primary-color)',
      // 950: 'var(--primary-color)'
    },
    colorScheme: {
        light: {
            surface: {
                // 0: '#ffffff',
                // 50: '{zinc.50}',
                // 100: '{zinc.100}',
                // 200: '{zinc.200}',
                // 300: '{zinc.300}',
                // 400: '{zinc.400}',
                // 500: '{zinc.500}',
                // 600: '{zinc.600}',
                // 700: '{zinc.700}',
                // 800: '{zinc.800}',
                // 900: '{zinc.900}',
                // 950: '{zinc.950}'
            }
        },
        dark: {
            surface: {
                // 0: '#ffffff',
                // 50: '{slate.50}',
                // 100: '{slate.100}',
                // 200: '{slate.200}',
                // 300: '{slate.300}',
                // 400: '{slate.400}',
                // 500: '{slate.500}',
                // 600: '{slate.600}',
                // 700: '{slate.700}',
                // 800: '{slate.800}',
                // 900: '{slate.900}',
                // 950: '{slate.950}'
            }
        }
    }
  }
});

const LaraPreset = definePreset(Lara, {
  semantic: {
    primary: {
      // 50: 'var(--primary-color)',
      // 100: 'var(--primary-color)',
      // 200: 'var(--primary-color)',
      // 300: 'var(--primary-color)',
      // 400: 'var(--primary-color)',
      // 500: 'var(--primary-color)',
      // 600: 'var(--primary-color)',
      // 700: 'var(--primary-color)',
      // 800: 'var(--primary-color)',
      // 900: 'var(--primary-color)',
      // 950: 'var(--primary-color)'
    },
    colorScheme: {
        light: {
            surface: {
                // 0: '#ffffff',
                // 50: '{zinc.50}',
                // 100: '{zinc.100}',
                // 200: '{zinc.200}',
                // 300: '{zinc.300}',
                // 400: '{zinc.400}',
                // 500: '{zinc.500}',
                // 600: '{zinc.600}',
                // 700: '{zinc.700}',
                // 800: '{zinc.800}',
                // 900: '{zinc.900}',
                // 950: '{zinc.950}'
            }
        },
        dark: {
            surface: {
                // 0: '#ffffff',
                // 50: '{slate.50}',
                // 100: '{slate.100}',
                // 200: '{slate.200}',
                // 300: '{slate.300}',
                // 400: '{slate.400}',
                // 500: '{slate.500}',
                // 600: '{slate.600}',
                // 700: '{slate.700}',
                // 800: '{slate.800}',
                // 900: '{slate.900}',
                // 950: '{slate.950}'
            }
        }
    }
  }
});

const NoraPreset = definePreset(Nora, {
  semantic: {
    primary: {
      // 50: 'var(--primary-color)',
      // 100: 'var(--primary-color)',
      // 200: 'var(--primary-color)',
      // 300: 'var(--primary-color)',
      // 400: 'var(--primary-color)',
      // 500: 'var(--primary-color)',
      // 600: 'var(--primary-color)',
      // 700: 'var(--primary-color)',
      // 800: 'var(--primary-color)',
      // 900: 'var(--primary-color)',
      // 950: 'var(--primary-color)'
    },
    colorScheme: {
        light: {
            surface: {
                // 0: '#ffffff',
                // 50: '{zinc.50}',
                // 100: '{zinc.100}',
                // 200: '{zinc.200}',
                // 300: '{zinc.300}',
                // 400: '{zinc.400}',
                // 500: '{zinc.500}',
                // 600: '{zinc.600}',
                // 700: '{zinc.700}',
                // 800: '{zinc.800}',
                // 900: '{zinc.900}',
                // 950: '{zinc.950}'
            }
        },
        dark: {
            surface: {
                // 0: '#ffffff',
                // 50: '{slate.50}',
                // 100: '{slate.100}',
                // 200: '{slate.200}',
                // 300: '{slate.300}',
                // 400: '{slate.400}',
                // 500: '{slate.500}',
                // 600: '{slate.600}',
                // 700: '{slate.700}',
                // 800: '{slate.800}',
                // 900: '{slate.900}',
                // 950: '{slate.950}'
            }
        }
    }
  }
});

// Function to switch presets dynamically
function switchPreset(presetName: string) {
  switch (presetName) {
    case 'Aura':
      return AuraPreset;
    case 'Material':
      return MaterialPreset;
    case 'Lara':
      return LaraPreset;
    case 'Nora':
      return NoraPreset;
    default:
      return AuraPreset; // Default to Aura if no match
  }
}

export { switchPreset };
