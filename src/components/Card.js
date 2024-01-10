import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const [trimmedTitle, setTrimmedTitle] = useState(props.title);

    useEffect(() => {
        const textTrim = () => {
          const wordCount = 40;
          const clamp = '…';

          if (props.title && props.title.length > wordCount) {
            const trimmedStr = props.title.substr(0, wordCount - 1);
            setTrimmedTitle(trimmedStr + clamp);
          }
        };
        textTrim();
    }, [props.title]);

    return (
      <>
        <Link to={`/article/${props.id}`}>
          <div className="swiper-slide">
            <img src={`/images/${props.img}`} className="cardImg" alt="" />
            {/*<div className="cardStats">
              <span>{props.viewCnt}</span>
              <span>{props.commentCnt}</span>
            </div>*/}
            <div className="cardTxt">
              <h3>{trimmedTitle}</h3>
              <p>place: {props.place}</p>
              <p>Author: {props.author}</p>
            </div>
          </div>
        </Link>
      </>
    );
};

export default Card;