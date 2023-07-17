import React from 'react'
import SolutionsCard from '../SolutionsCard/SolutionsCard'
import styles from "./SolutionsList.module.css";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

const SolutionsList = () => {
  return (
    <div className={clsx("listContainer", styles.listContainer)}>
        <SolutionsCard 
            title="Electricity"
            description="Some quick sample text to build on the card title and made up the bulk of the card's component. Find out more"
            imageUrl={useBaseUrl("https://electriciancourses4u.co.uk/wp-content/uploads/power-poles.jpg")}
            linkUrl="/docs" //{`/docs/sector-${title.toLowerCase()}.md`}
        />
        <SolutionsCard 
            title="Food, Agriculture, and Land Use"
            description="Some quick sample text to build on the card title and made up the bulk of the card's component."
            imageUrl={useBaseUrl("https://img.staticmb.com/mbcontent/images/uploads/2023/1/Tax-on-Income-%20from-Agriculture%20(1).jpg")}
            linkUrl="/docs"
        />
        <SolutionsCard 
            title="Industry"
            description="Some quick sample text to build on the card title and made up the bulk of the card's component."
            imageUrl={useBaseUrl("https://www.silverinstitute.org/wp-content/uploads/2017/05/silverinindustry.jpg")}
            linkUrl="/docs"
        />
        <SolutionsCard 
            title="Transportation"
            description="Some quick sample text to build on the card title and made up the bulk of the card's component."
            imageUrl={useBaseUrl("https://www.silverinstitute.org/wp-content/uploads/2017/05/silverinindustry.jpg")}
            linkUrl="/docs"
        />
    </div>
  )
}

export default SolutionsList