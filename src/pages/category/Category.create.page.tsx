
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconsTable } from '../../components/IconsTable';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useCategories } from '../../hooks/useCategories';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectAuth } from '../../redux/auth/auth.slice';
import { selectArticles } from '../../redux/articles/articles.slice';
import { selectUI } from '../../redux/ui/ui.slice';

type FormValues = {
    name: string;
    description: string;
};

export const CategoryCreate = () => {

    const category = useAppSelector(selectArticles)

    const { mode } = useAppSelector(selectUI)

    const { id, name, description, icon } = category;

    const { id_category } = useParams()

    const { userInfo } = useAppSelector(selectAuth)

    const navigate = useNavigate()

    const { user } = userInfo;

    const { StoreCategories, EditCategories } = useCategories()

    const dispatch = useAppDispatch()

    const [selectedIcon, setSelectedIcon] = useState<string>(id_category ? icon : '');

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {

        const dataToSend = {
            ...data,
            icon: selectedIcon
        }

        if (id_category) {

            dispatch(EditCategories(id, dataToSend.name, dataToSend.description, dataToSend.icon))

        } else {
            dispatch(StoreCategories(user.id, dataToSend.name, dataToSend.description, dataToSend.icon))
        }


        navigate('/')


    }

    return (
        <div className={`uk-section ${mode ? 'uk-section-secondary' : 'uk-section-muted'}`}>
            <div className="uk-container">
                <ul className="uk-breadcrumb">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><span>Registrar categoría</span></li>
                </ul>

                <Box
                    onSubmit={handleSubmit(onSubmit)}
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {
                            width: '100%',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'gray',
                            },
                            '&:hover fieldset': {
                                borderColor: 'gray',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: mode ? '#808080' : '#583ABC',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: mode ? 'white' : 'black',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: mode ? '#C6C6C6' : '#583ABC',
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            type='text'
                            {...register("name", {
                                required: true,
                            })}
                            required
                            id="outlined-required"
                            label="Categoría"
                            defaultValue={id_category ? name : ''}
                            sx={{
                                '& .MuiInputBase-input': {
                                    color: mode ? 'white' : 'black',
                                },
                            }}
                        />
                        <TextField
                            {...register("description", {
                                required: true,
                            })}
                            sx={{
                                mt: 2,
                                '& .MuiInputBase-input': {
                                    color: mode ? 'white' : 'black',
                                },
                            }}
                            required
                            id="outlined-required"
                            label="Descripción"
                            defaultValue={id_category ? description : ''}
                            multiline
                            rows={4}
                        />
                        <IconsTable selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
                        <Button type='submit' variant="contained" sx={{
                            mt: 2,
                            backgroundColor: "#583ABC",
                            '&:hover': {
                                backgroundColor: "#7A62CA"
                            },
                            '&.Mui-focused': {
                                borderColor: 'red',
                            },
                        }}>{id_category ? 'Guardar' : 'Registrar'}</Button>
                    </div>
                </Box>
            </div>
        </div>
    )
}
