import { useAppSelector } from "../hooks/hooks"
import { selectUI } from "../redux/ui/ui.slice"


export const Preloader = () => {

    const { mode } = useAppSelector(selectUI)

    return (
        <div className={`uk-section ${mode ? 'uk-section-secondary' : 'uk-section-muted'}`}>
            <div className="d-flex justify-content-center align-content-center text-center">
                <div className="spinner-border" role="status">
                </div>
            </div>
        </div>
    )
}
