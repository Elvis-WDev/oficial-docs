import { Article } from "./article.model";

export interface Category {
    id: number,
    name: string,
    description: string,
    icon: string,
    articles: Article[],
}