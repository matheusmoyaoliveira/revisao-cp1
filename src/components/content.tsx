interface ContentProps {
    title: string
    content: string
}

export function Content(props: ContentProps) {
    return (
        

        <section>

            <div style={{
                border: '1px solid ccc'
            }}>
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>

        </section>

        
    )
}