
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TextQuill } from '../../components/TextFieldQuill';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useArticles } from '../../hooks/useArticles';
import { selectUI } from '../../redux/ui/ui.slice';
import { selectAuth } from '../../redux/auth/auth.slice';

type FormValues = {
    title: string;
    description: string;
    content: string
};

export const ArticleCreate = () => {

    const { id_article, id_category } = useParams()

    const navigate = useNavigate()

    const { StoreArticle, EditArticle } = useArticles()

    const dispatch = useAppDispatch()

    const { userInfo } = useAppSelector(selectAuth)

    const { selected_article, mode } = useAppSelector(selectUI)

    const { user } = userInfo;

    const { id, title, description, content: contenido } = selected_article;

    const [content, setContent] = useState<string>(id_article ? contenido : '');

    const {
        register,
        handleSubmit,
    } = useForm<FormValues>();


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const dataToSend = {
            ...data,
            content: content,
        }

        if (id_article) {
            dispatch(EditArticle(id, dataToSend.title, dataToSend.description, dataToSend.content))
        } else {

            dispatch(StoreArticle(user.id, dataToSend.title, dataToSend.description, dataToSend.content, id_category))

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
                            type='title'
                            {...register("title", {
                                required: true,
                                minLength: 6,
                            })}
                            required
                            defaultValue={id_article ? title : ''}
                            id="outlined-required"
                            label="Título"
                            sx={{
                                '& .MuiInputBase-input': {
                                    color: mode ? 'white' : 'black',
                                },
                            }}
                        />
                        <TextField
                            type='description'
                            {...register("description", {
                                required: true,
                                minLength: 6,
                            })}
                            sx={{
                                mt: 2,
                                mb: 3,
                                '& .MuiInputBase-input': {
                                    color: mode ? 'white' : 'black',
                                },
                            }}
                            defaultValue={id_article ? description : ''}
                            required
                            id="outlined-required"
                            label="Descripción"
                            multiline
                            rows={4}
                        />
                        <TextQuill content={content} setContent={setContent} />
                        <Button type='submit' variant="contained" sx={{
                            mt: 2,
                            backgroundColor: "#583ABC",
                            '&:hover': {
                                backgroundColor: "#7A62CA"
                            },
                            '&.Mui-focused': {
                                borderColor: 'red',
                            },
                        }}>{id_article ? 'Guardar' : 'Registrar'}</Button>
                    </div>
                </Box>
            </div>
        </div>
    )
}
