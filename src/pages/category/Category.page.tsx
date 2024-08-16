import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { selectArticles } from "../../redux/articles/articles.slice"
import IconDisplay from "../../hooks/useGetIcon"
import { useFormatDate } from "../../hooks/useFormatDate"
import { MouseEvent } from "react"
import { useArticles } from "../../hooks/useArticles"
import { selectUI } from "../../redux/ui/ui.slice"
import AddIcon from '@mui/icons-material/Add';
import { Button, ButtonGroup } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useCategories } from "../../hooks/useCategories"

export const CategoriasPage = (): JSX.Element => {

    const category = useAppSelector(selectArticles)

    const { SelectArticleById, DeleteArticle } = useArticles()

    const { DeleteCategory } = useCategories()

    const dispatch = useAppDispatch()

    const { isLoading, mode } = useAppSelector(selectUI)

    const navigate = useNavigate();

    const { FormatDate } = useFormatDate()

    const { id, name, description, icon, articles } = category;

    const handleGoToArticleWithArticle = (e: MouseEvent, id_article: number) => {

        e.preventDefault()

        dispatch(SelectArticleById(id, id_article, name, description, icon, articles))

        navigate(`/category/${id}/article/${id_article}`)

    }

    const handleDestroyCategory = () => {

        Swal.fire({
            title: 'Eliiminar categoría?',
            text: 'No podrás revertirlo!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch(DeleteCategory(id))

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Eliminado",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/')

            }
        });

    }

    const handleGoToEditArticle = () => {

        navigate(`/category/edit/${id}`)

    }

    const handleGoToCreateArticle = () => {
        navigate(`/category/${id}/article/create`)
    }

    const handleClose = (id_art: number) => {

        Swal.fire({
            title: 'Eliiminar artículo?',
            text: 'No podrás revertirlo!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch(DeleteArticle(id_art))

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Eliminado",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/')

            }
        });


    }

    return (

        <>
            {!isLoading ? (
                // 
                <div className={`uk-section ${mode ? 'uk-section-secondary' : 'uk-section-muted'}`}>
                    <div className="uk-container">
                        <ul className="uk-breadcrumb">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><span>{name}</span></li>
                        </ul>
                        <div className="uk-grid-small" data-uk-grid>
                            <div className="uk-width-auto uk-text-primary">
                                <IconDisplay iconName={icon} className="icon-react" />
                            </div>
                            <div className="uk-width-expand">
                                <h1 className="uk-article-title uk-margin-remove">{name}</h1>
                                <p className="uk-text-lead uk-text-muted uk-margin-small-top">{description}</p>
                            </div>

                            <ButtonGroup sx={{ height: '40px' }} aria-label="Basic button group">
                                <Button onClick={handleDestroyCategory} sx={{
                                    color: '#ffffff',
                                    border: 'none',
                                    backgroundColor: "#ff0000",
                                    '&:hover': {
                                        backgroundColor: "#ff0000",
                                        border: 'none',
                                    },
                                    '&.Mui-focused': {
                                        borderColor: 'red',
                                    },
                                }}>
                                    <DeleteIcon />
                                </Button>
                                <Button onClick={handleGoToEditArticle} sx={{
                                    color: '#ffffff',
                                    border: 'none',
                                    backgroundColor: "#583ABC",
                                    '&:hover': {
                                        backgroundColor: "#7A62CA",
                                        border: 'none',
                                    },
                                    '&.Mui-focused': {
                                        borderColor: 'red',
                                    },
                                }}>
                                    <EditIcon />
                                </Button>
                                <Button onClick={handleGoToCreateArticle} sx={{
                                    color: '#ffffff',
                                    border: 'none',
                                    backgroundColor: "#583ABC",
                                    '&:hover': {
                                        backgroundColor: "#7A62CA",
                                        border: 'none',

                                    },
                                    '&.Mui-focused': {
                                        borderColor: 'red',
                                    },
                                }}>
                                    <AddIcon />
                                </Button>
                            </ButtonGroup>
                        </div>

                        <div className="uk-margin-medium-top">
                            {
                                articles.map(({ id, title, description, created_at, updated_at }) => {
                                    return (
                                        <div key={id} className={`uk-card uk-card-category ${mode ? 'uk-card-secondary' : 'uk-card-default'} uk-card-hover uk-card-body uk-inline uk-border-rounded uk-width-1-1`} style={{ boxShadow: mode ? '0 14px 25px rgba(0, 0, 0, 0.16)' : '' }}>
                                            <a onClick={(e) => handleGoToArticleWithArticle(e, id)} className="uk-position-cover"></a>
                                            <Button
                                                onClick={() => handleClose(id)}
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 5,
                                                    right: 5,
                                                    border: 'none',
                                                    borderRadius: '10%',
                                                    minWidth: 'auto',
                                                    padding: 1,
                                                    color: '#dcdcdc',
                                                    '&:hover': {
                                                        backgroundColor: "#ff0000",
                                                        color: '#ffffff',
                                                        border: 'none',
                                                    },
                                                }}
                                            >
                                                <CloseIcon />
                                            </Button>
                                            <h3 className="uk-card-title uk-margin-remove uk-text-primary">{title}</h3>
                                            <p className="uk-margin-small-top">{description}</p>
                                            <div className="uk-article-meta uk-flex uk-flex-middle">
                                                <div>
                                                    Creado el
                                                    <time className="uk-margin-small-right" dateTime="2019-10-05"> {FormatDate(created_at)}</time><br />
                                                    Actualizado el <time dateTime="2019-12-30"> {FormatDate(updated_at)}</time>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                !articles ? (<span>Sin articulos</span>) : ''
                            }
                        </div>
                    </div>
                </div >
            ) : ''}

        </>

    )

}