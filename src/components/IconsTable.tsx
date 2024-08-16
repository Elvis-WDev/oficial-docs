
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconDisplay from '../hooks/useGetIcon';
import iconKeys from '../helpers/iconKeys';
import { useAppSelector } from '../hooks/hooks';
import { selectUI } from '../redux/ui/ui.slice';

type Props = {
    selectedIcon: string;
    setSelectedIcon: (icon: string) => void;
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const IconsTable: React.FC<Props> = ({ selectedIcon, setSelectedIcon }) => {

    const { mode } = useAppSelector(selectUI)

    const handleSelectIcon = (name: string) => {

        setSelectedIcon(name);

    }

    return (

        <Box sx={{ mt: 2 }}>
            <Grid container spacing={1}>
                {iconKeys.map(({ name }) => (
                    <Grid xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        xl={1}

                        onClick={() => handleSelectIcon(name)} item key={name} className={`icon-react-container ${selectedIcon === name ? 'selected' : ''}`}>
                        <Item
                            sx={{
                                backgroundColor: mode ? '#333333' : 'none',
                                color: mode ? '#ffffff' : 'none',
                            }}>

                            <IconDisplay iconName={name} className="icon-react-30" />

                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box >

    )
}
