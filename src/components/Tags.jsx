import "../styles/Tags.scss"

function Tags({ tags, id }) {
    return (
        <div className="tags">
            {tags.map((tag) => (
                <span className="tags__tag" key={`${id}-${tag}`}>
                    {tag}
                </span>
            ))}
        </div>
    )
}

export default Tags
