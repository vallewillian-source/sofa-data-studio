import { COLORS } from './colors';

export const GRIDS = {
    // Main grid of interface. 
    // Is divided into a sidenav menu, a header and the frame that will display the application's content.
    main: { 
        nav: {
            background: COLORS.brand,
            width: "350px"
        },
        header: {
            background: COLORS.tertiary,
            height: "70px"
        },
        content: {
            background: COLORS.secondary
        }
    }
}