function Article(props){
    return(
    <article>
        <h2>{props.titulo}</h2>

        <h3>{props.autor}</h3>
      
        <time dateTime={props.data}>{props.data}</time>

        <p>{props.conteudo1}</p>
       
       <p>{props.conteudo2}</p>   

         <figure>
                <img src="/FotoCarroo.png" alt="Foto de um carro da marca Bugatti" />
                <figcaption>
                    Bugatti Chiron Super Sport 300+ correndo a mais de 400km/h.
                </figcaption>
            </figure>          
    </article>
    )
}

export default Article