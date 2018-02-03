import React from 'react';
import './NewsPanel.css';
import NewsCard from '../NewsCard/NewsCard';

class NewsPanel extends React.Component {
    constructor(){
        super();
        this.state  = {news:null};
    }

    componentDidMount(){
        this.loadMoreNews();
    }
    loadMoreNews(){
        this.setState({
            news:[]
        })
    }
    renderNews(){
        const news_list = this.state.news.map(news => {
            return(
                <a className = 'list-group-item' key = {news.digest} href = "#">
                <NewsCard news = {news} />
                </a>
            );
            
        });
        return(
            <div className = "container-fluid">
                <div className = "list-group">
                 {news-list}
                </div>
            </div>
        )
    }
    render(){
        if (this.state.news){
            return (
                <div>
                    {this.renderNews()}
                </div>
            );
        }
        else{
            return (
                <div>
                    loading---
                </div>
            )
        }
    }
}
export default NewsPanel;