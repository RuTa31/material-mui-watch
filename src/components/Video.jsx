import { Paper } from "@mui/material"

// const styles = {
//     videoContainer: {
//         backgroundImage: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXNaADLxnKvHEsJmS7vJSrmXdRTG2X-xyvg&usqp=CAU")
//     }
// }
export const VideoCom = () => {
    const styles = {
        paper: { backgroundColor: 'red', height: 100, width: 100 },
        gb: {
            backgroundColor: 'red',
        },
        responsive: (theme) => ({
            width: 300,
            color: theme.palette.success.main,
        })
    }
    return (
        <Paper sx={styles.paper} >
            jakhsd
        </Paper >
    )
}