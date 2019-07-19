import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Theme } from '../theme';

export const useMobileDevice = () => useDevice('sm');
export const useTabletDevice = () => useDevice('md');
export const useNotebookDevice = () => useDevice(1540);

export const useDevice = (size: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
    const theme = useTheme<Theme>();
    // @ts-ignore
    const isMobile = useMediaQuery(theme.breakpoints.down(size));

    return isMobile;
};
