import { useAppSelector } from "../hooks/hooks";
import { selectUI } from "../redux/ui/ui.slice";

export const Footer = (): JSX.Element => {

    const { mode } = useAppSelector(selectUI)

    return (
        <>
            <footer className={`uk-section uk-text-center uk-text-muted ${mode ? 'dark-mode' : 'light-mode'}`}>
                <div className="uk-container uk-container-small">
                    <div className="uk-margin-medium uk-text-small uk-link-muted"><a href="https://github.com/Elvis-WDev">Elvis Macas</a> software developer.</div>
                </div>
            </footer>

        </>
    );
};