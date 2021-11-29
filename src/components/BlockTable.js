function BlockRow({number, hash, timestamp}) {
    return (
        <tr>
            <td>{number}</td>
            <td>{hash}</td>
            <td>{new Date(timestamp * 1000).toLocaleTimeString()}</td>
        </tr>
    );
}

export default function BlockTable({blocks}) {
    if (!blocks){
        return <table></table>
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>number</th>
                    <th>hash</th>
                    <th>timestamp</th>
                </tr>
            </thead>
            <tbody>
                {blocks.map((block) => {
                    return <BlockRow key={block.number} {...block}/>
                })}
            </tbody>
        </table>
    )
}