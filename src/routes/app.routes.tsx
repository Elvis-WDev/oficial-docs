import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Skeleton } from '../components/skeleton.layout';
import { HomePage } from '../pages/home/Home.page';
import "../assets/scss/index.scss"
import { CategoriasPage } from '../pages/category/Category.page';
import { ArticlePage } from '../pages/article/Article.page';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useEffect } from 'react';
import { selectAuth } from '../redux/auth/auth.slice';
import { CategoryCreate } from '../pages/category/Category.create.page';
import { Preloader } from '../components/Preloader';
import { onSelectMode, selectUI } from '../redux/ui/ui.slice';
import { ArticleCreate } from '../pages/article/Article.create.page';

export const AppRoutes = (): JSX.Element => {

    const darkmode = localStorage.getItem('darkMode')

    // const { GetUserCategories } = useCategories()

    const dispatch = useAppDispatch();

    const { isLoading } = useAppSelector(selectUI)

    const navigate = useNavigate();

    const { userInfo } = useAppSelector(selectAuth);

    useEffect((): void => {
        if (!userInfo) {
            navigate('/login');
        }
    }, [navigate, userInfo]);


    useEffect(() => {

        // dispatch(GetUserCategories())

        let bool = false

        if (darkmode == "true") {
            bool = true
        }

        dispatch(onSelectMode(bool))

    }, [])


    return (
        <Skeleton>

            {isLoading ? (
                <Preloader />
            ) : ''}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:id_category/articles" element={<CategoriasPage />} />
                <Route path="/category/:id_category/article/:id_article" element={<ArticlePage />} />
                <Route path="/category/create" element={<CategoryCreate />} />
                <Route path="/category/edit/:id_category" element={<CategoryCreate />} />
                <Route path="/category/:id_category/article/create" element={<ArticleCreate />} />
                <Route path="/category/:id_category/article/:id_article/edit" element={<ArticleCreate />} />
                {/* Redirect to route */}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </Skeleton>
    );
};
