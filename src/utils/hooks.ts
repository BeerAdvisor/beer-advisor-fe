import { useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { Theme } from '../theme';

export const useMobileDevice = () => {
    const theme = useTheme<Theme>();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return isMobile;
};
