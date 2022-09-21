
export default function Card(props) {
    console.log('props: ',props)
    return (
        <div className=" w-44 mt-12 shrink-0">
            <img src={`/${props.coverImg}`} alt="" className="w-44 h-60"/>
            <div className=" mt-2 flex flex-col text-xs font-light gap-2">
                <div className="flex items-center gap-1">
                    <img src="/star.png" alt="" className="h-3" />
                    <span>{props.rating}</span>
                    <span>({props.reviewCount})</span>
                    <span>{props.location}</span>
                </div>
                <p>
                    {props.title}
                </p>
                <p>
                    <span className="font-semibold">From ${props.price} /</span> person
                </p>
            </div>
        </div>
    )
}