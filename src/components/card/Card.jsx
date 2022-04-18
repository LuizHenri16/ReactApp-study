import './style-card.css'


export function Card(props) {
    return (
        <>
            <div className="card container">
                <div className="header">{props.plan}</div>
                <div className="price">{props.price +"/mo"}</div>
                <div className="services">
                    <div className="item">{props.item1}</div>
                    <div className="item">{props.item2}</div>
                    <div className="item">{props.item3}</div>
                    <div className="item">{props.item4}</div>
                </div>
                <div className="button"><button>{props.button}</button></div>

            </div>
        </>
    )
}