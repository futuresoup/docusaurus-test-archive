import React from 'react'
import styles from "./ImageCard.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { AiOutlineArrowRight } from 'react-icons/ai';

    interface CardProps {
        title: string;
        description: string;
        imageUrl: string;
        linkUrl: string;
    }

    const ImageCard: React.FC<CardProps> = ({
        title,
        description,
        imageUrl,
        linkUrl,
    }) => {
    return (
        <div className={clsx("cardContainer", styles.cardContainer)}>
            <img className={clsx("img", styles.cardImg)} src={imageUrl} alt={title} />
            <div className={clsx("content", styles.content)}>
                <h2>{title}</h2>
                <p>{description}
                    <Link
                        to={linkUrl}
                        className={clsx(
                            styles.cardButton,
                        )}
                    ><AiOutlineArrowRight />
                    </Link>
                </p>
                
            </div>
        </div>
    )
}

export default ImageCard