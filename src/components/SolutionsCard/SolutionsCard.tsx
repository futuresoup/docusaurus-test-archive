import React from 'react'
import styles from "./SolutionsCard.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";

    interface CardProps {
        title: string;
        description: string;
        imageUrl: string;
        linkUrl: string;
    }

    const SolutionsCard: React.FC<CardProps> = ({
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
                    > ➡
                    </Link>
                </p>
                
            </div>
        </div>
    )
}

export default SolutionsCard