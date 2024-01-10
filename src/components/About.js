import React from "react";
import CardData from './CardData';

const About = () => {
    const uniqueAuthors = Array.from(new Set(CardData.map(card => card.author)));

    return (
        <div className="about">
            <section>
                <h2>Author</h2>
                {uniqueAuthors.map((authorName, index) => {
                    const selectedAuthor = CardData.find(card => card.author === authorName);
                        if (!selectedAuthor) {
                            return null;
                        }

                        return (
                            <section key={index}>
                                <h3>{selectedAuthor.author}</h3>
                                <img src={`/images/${selectedAuthor.authorImg}`} className="authorImg" alt="" />
                                <p className="author-description">{selectedAuthor.description}</p>
                            </section>
                        );
                })}
            </section>
        </div>
    );
}

export default About;
