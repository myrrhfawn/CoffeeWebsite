import React, { useEffect, useState } from "react";
import "./FeaturedArticles.css"
import { ArticlesCarousel } from "./MainCarousel/ArticlesCarousel/ArticlesCarousel";
import { ArticlesCarouselItem } from "./MainCarousel/ArticlesCarousel/ArticlesCarouselItem"
import { connect } from "react-redux";
import { ArticlesFetchData } from "../../redux/reducers/mainpage-reducer";

function FeaturedArticles({fetchData, articles}) {  
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetchData()

    }, []);

    useEffect(() => {
        setRerender(!rerender);
    }, [articles])

    return(
        <div className="featured_articles">
            <div className="featured_articles_text">
                <div className="featured_articles_title">
                    <h1 className="featured_articles_title_gray">Featured</h1>
                    <h1 className="featured_articles_title_green">Articles</h1>
                </div>
                <div className="featured_articles_description">
                    <p>Visit our shop to see amazing creations from our designers</p>
                </div>
            </div>  
            <div className="featured_articles_carousel">
                    <div className="featured_articles_carousel_container">
                        <ArticlesCarousel>
                        {articles.map((article, index) => {
                                return <div key={index} className="featured_articles_item"><ArticlesCarouselItem article={article} /></div>
                            })}                           
                        </ArticlesCarousel>
                    </div>
                </div> 
        </div>
    )
}


const mapStateToProps = state => {
    return {
        articles: state.mainPageReducer.articles
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(ArticlesFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArticles);
