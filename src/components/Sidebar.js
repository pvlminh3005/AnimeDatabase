import React from 'react'

export default function Sidebar({ topAnime }) {
    return (
        <aside>
            <nav>
                <h3>Top Anime ⭐</h3>
                {topAnime.map(item => (
                    <a
                        key={item.mal_id}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer">
                        {item.title}
                    </a>
                ))}

            </nav>
        </aside>
    )
}
