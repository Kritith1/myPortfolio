import Card from "./Card"
function Services()
{
    return (
    <div className="services">
        <p className="text-muted text-sub-title text-center">My Specialities</p>
        <h2 className="sub-title text-muted">LANGUAGES</h2>
        <br></br>
        <div className="row">
            <Card 
            text="React" 
            img="fas fa-desktop"  
            description="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies"
            />

            <Card 
            text="Node" 
            img="fas fa-code"  
            description="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
             />

            <Card 
            text="Java" 
            img="fas fa-rocket" 
            description="Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
            />
        </div>
     </div>
    )
}
export default Services