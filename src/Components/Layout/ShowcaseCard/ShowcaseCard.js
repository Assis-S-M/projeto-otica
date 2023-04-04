import Styles from "./ShowcaseCard.module.css"

export const ShowcaseCard = ({children}) => {
    return (
        <div className={Styles.card}>
            {children}
        </div>
    )
}