import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import IconDisplay from "../../hooks/useGetIcon"
import { selectCategories } from "../../redux/categories/categories.slice"
import { useArticles } from "../../hooks/useArticles"
import { MouseEvent, useEffect } from "react"
import { selectUI } from "../../redux/ui/ui.slice"
import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useCategories } from "../../hooks/useCategories"

export const HomePage = (): JSX.Element => {

    const { GetUserCategories } = useCategories()

    const categories = useAppSelector(selectCategories)

    const { isLoading, mode } = useAppSelector(selectUI)

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const { GetUserArticlesByCategory } = useArticles()

    const handleGoToArticles = (e: MouseEvent, id: number) => {

        e.preventDefault()

        dispatch(GetUserArticlesByCategory(id))

        navigate(`/category/${id}/articles`)

    }

    const handleGoToCreateCategory = () => {

        navigate(`/category/create`)

    }

    useEffect(() => {
        dispatch(GetUserCategories())
    }, [])


    return (
        <>
            <div className={mode ? 'uk-section uk-section-secondary' : 'uk-section uk-section-muted'}>

                <div className="uk-container">

                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <Button onClick={handleGoToCreateCategory} variant="contained" size="small" sx={{
                            mb: 1,
                            backgroundColor: "#6D51C9",
                            '&:hover': {
                                backgroundColor: "#7A62CA"
                            },
                            '&.Mui-focused': {
                                borderColor: 'red',
                            },
                        }}>
                            <AddIcon />
                        </Button>
                    </div>
                    <div className="uk-child-width-1-2@m uk-grid-match-uk-grid-small" data-uk-grid>

                        {!isLoading ? (

                            categories.map(({ id, name, description, icon }) => {
                                return (
                                    <div key={id}>
                                        <div className={mode ? 'uk-card uk-card uk-card-secondary uk-card-hover uk-card-body uk-inline uk-border-rounded' : 'uk-card uk-card uk-card-default uk-card-hover uk-card-body uk-inline uk-border-rounded'} style={{ boxShadow: mode ? '0 14px 25px rgba(0, 0, 0, 0.16)' : '' }}>
                                            <a onClick={(e) => handleGoToArticles(e, id)} className="uk-position-cover"></a>
                                            <div className="uk-grid-small" data-uk-grid>
                                                <div className="uk-width-auto uk-text-primary uk-flex uk-flex-middle">
                                                    <IconDisplay iconName={icon} className="icon-react" />
                                                </div>
                                                <div className="uk-width-expand">
                                                    <h3 className="uk-card-title uk-margin-remove uk-text-primary">{name}</h3>
                                                    <p className="uk-text-muted uk-margin-remove">{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : ''}

                        {
                            !categories ? (<span>Sin articulos</span>) : ''
                        }

                    </div>
                </div>
            </div >
        </>
    )
}
