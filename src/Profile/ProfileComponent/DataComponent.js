import PropTypes from "prop-types"
function DataComponent({fullName,bio,profession,handleName,children}) {
    return (  
        <div>
            <h1 onClick={e=>handleName(e)} style={{color:"red",textAlign:"center"}}>Hello, i'm {fullName}. I'work as an {profession} and i'm a {bio} </h1>
            {children}
        </div>
    );
}

//default props
DataComponent.defaultProps={
    fullName:"Alex",
    profession:"jobless",
    bio:"not found"
};

//props types
DataComponent.propTypes={
    fullName:PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string
};

export default DataComponent;