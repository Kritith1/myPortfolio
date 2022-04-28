function Card({imageUrl,altText,cardTitle,cardText,gitUrl})
{
    function MouseOver(event) {
        console.log("dfssdf")
      }
      function MouseOut(event){
        console.log("hello")

      }
    return (
        <div className="col-md-3">
            <div className="card" 
            onMouseOver={MouseOver} 
            onMouseOut={MouseOut}
            >
               <img src={imageUrl} class="card-img-top" alt={altText} />
            <div class="card-body">
                  <h5 class="card-title">{cardTitle}</h5>
                  <p class="card-text">{new Date(cardText).toDateString()}</p>
                  <a href={gitUrl} class="btn btn-primary" target="_blank" rel='noreferrer'>Goto Code</a>
            </div>
               </div>
            </div>
    )
}
export default Card