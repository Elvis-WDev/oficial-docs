import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../hooks/hooks"
import { useFormatDate } from "../../hooks/useFormatDate"
import { selected_article, selected_category, selectUI } from "../../redux/ui/ui.slice"
import { RawHtmlComponent } from "../../components/RawHtml"
import { Button } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';

export const ArticlePage = (): JSX.Element => {

    const category = useAppSelector(selected_category)

    const { mode } = useAppSelector(selectUI)

    const navigate = useNavigate()

    const article = useAppSelector(selected_article)

    const { FormatDate } = useFormatDate()

    const { id: id_category, name } = category;

    const { id, title, content, description, created_at, updated_at } = article;

    const handleEditClick = () => {

        navigate(`/category/${id_category}/article/${id}/edit`)

    }

    return (

        <>

            <div className={`uk-section ${mode ? 'uk-section-secondary' : 'uk-section-muted'}`}>
                <div className="uk-container">
                    <ul className="uk-breadcrumb uk-margin-medium-top-">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={`/category/${id}/articles`}>{name}</Link></li>
                        <li><span>{title}</span></li>
                    </ul>
                    <div className={`${mode ? 'uk-background-secondary' : 'uk-background-default'} uk-border-rounded uk-box-shadow-small uk-position-relative`}>
                        {/* Botón de editar */}
                        <Button onClick={handleEditClick} variant="contained" size="large" className="uk-button uk-button-primary uk-position-absolute uk-position-top-right uk-margin-small-top uk-margin-small-right" sx={{
                            backgroundColor: "#583ABC",
                            '&:hover': {
                                backgroundColor: "#583ABC"
                            },
                            '&.Mui-focused': {
                                borderColor: 'red',
                            },
                        }}>
                            <EditIcon />
                        </Button>

                        <div className="uk-container uk-container-xsmall uk-padding-large">
                            <article className="uk-article">
                                <h1 className="uk-article-title">{title}</h1>
                                <p className="uk-text-lead uk-text-muted">{description}</p>
                                <div className="uk-article-meta uk-margin uk-flex uk-flex-middle">
                                    <div>
                                        Creado el
                                        <time className="uk-margin-small-right" dateTime="2019-10-05"> {FormatDate(created_at)}</time><br />
                                        Actualizado el <time dateTime="2019-12-30"> {FormatDate(updated_at)}</time>
                                    </div>
                                </div>
                                <div className="uk-article-content">
                                    <RawHtmlComponent htmlContent={content} />
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}