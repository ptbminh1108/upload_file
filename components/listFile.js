


export default function FileData({ files }) {


    if (files) {
        return (
            <ul>
                {files.map((name) => {
                    const href = `https://file-server-du.herokuapp.com/${name}`;
                    return (
                        <li key={name}>
                            <a href={href}>{name}</a>
                        </li>
                    )
                })}
            </ul>
        );
    } else {
        return (
            <ul></ul>
        )
    }


}