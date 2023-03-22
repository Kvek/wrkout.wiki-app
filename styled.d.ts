import { ThemeShapeType } from 'shared/hooks';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeShapeType {}
}
