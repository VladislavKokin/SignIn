import "../styles.modules.css"

export const FieldLayout = ({ field, onItemClick, isGameEnded}) => {

    return (
        <div className="playingField">
            {field.map((item, index) => (
                <button className="buttons" key={index} onClick={()=>onItemClick(index)} disabled={item !== '' || isGameEnded}>{item}</button>
            ))}
        </div>
    )
}