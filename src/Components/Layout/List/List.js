import Styles from "./List.module.css"

export const List = ({listType, listItems}) => {
    
    if (listType == "ul") {
        return (
            <ul>
                {listItems.map(item => <li>{item}</li>)}
            </ul>
        )
    } else if (listType == "ol") {
            <ol>
                {listItems.map(item => {<li>{item}</li>})}
            </ol>
    }
}