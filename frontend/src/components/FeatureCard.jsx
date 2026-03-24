
const FeatureCard  = ({ title, description, emoji }) => {
    return ( 
        <div className="feature-card">
         <h3>{title}</h3>
         <p>{description}</p>
         <span>{emoji}</span>
        </div>
     );
}
 
export default FeatureCard ;