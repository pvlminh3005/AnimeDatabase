import React from 'react'
import AnimeCard from './AnimeCard'

export default function MainContent(props) {
    console.log(props.animeList)
    return (
        <main>
            <div className="main-head">
                <form
                    className="search-box"
                    onSubmit={props.HandleSearch}>
                    <input
                        type="search"
                        placeholder="Search film"
                        required
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)} />
                </form>
            </div>
            <div className="anime-list">
                {
                    props.animeList.map(anime => (
                        <AnimeCard
                            key={anime.mal_id}
                            anime={anime}
                        />
                    ))
                }
            </div>
        </main>
    )
}
