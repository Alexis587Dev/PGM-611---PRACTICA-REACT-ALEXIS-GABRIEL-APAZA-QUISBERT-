interface ResultProps{
    result: boolean;
    position: number;
}

//los tipados any se recomienda usar cuando no se sabe el tipo de infomacion que llega
const BynarySearchResult: React.FC<ResultProps> = ({result, position}: ResultProps) => {
    return (
        <div>
            <h2> Resultado: {result ? "SI EXISTE" : "NO EXISTE"}</h2>
            <h2> Posicion: {position}</h2>
        </div>
    );
}

export default BynarySearchResult;