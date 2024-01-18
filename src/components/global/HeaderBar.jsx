import {Box, Link, Typography} from "@mui/material";

export const HeaderBar = () => {
    return (
        <Box width="100%" height="50px" bgcolor="#252525" display="flex" alignItems="center">
            <Link href="/" sx={{textDecoration:"none"}} color="#fefefe" fontSize="28px" lineHeight="28px" fontWeight={600} pl={4}>
                HOSTEL HELP
            </Link>
        </Box>
    )
}