import React, { useState, useEffect } from 'react'
import Guardian from 'guardian-js';
import { TextField, Button } from '@material-ui/core'
import ArticleDetail from './ArticleDetails';

function ArticleList() {
    const guardian = new Guardian(process.env.REACT_APP_API_KEY, false);

    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('football')

    useEffect(() => {
        guardian.content.search('football').then(res => {
            let data = JSON.parse(res.body)
            setArticles(data.response.results)
        }).catch(err => console.log(err))
    }, [])

    const handleSearch = () => {
        guardian.content.search(search).then(res => {
            let data = JSON.parse(res.body)
            setArticles(data.response.results)
            setSearch('')
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <TextField value={search} onChange={e => setSearch(e.target.value)} style={{ margin: 10 }} />
            <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
            {articles.length === 0 ? <h4>No Articles found for the realted topic</h4> : articles.map(article => <ArticleDetail key={article.id} data={article} />)}
        </div >
    )
}

export default ArticleList
