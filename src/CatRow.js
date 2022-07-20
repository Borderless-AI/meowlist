export const CatRow = ({ index, name, description }) => {
  return (
    <div style={{padding:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h3>{name}</h3>
      <img style={{paddingBottom:"10px"}} alt="kitten" src={`http://placekitten.com/200/200?image=${index}`} />
      <body style={{width:"300px", maxHeight: "50px"}}>{description}</body>
    </div>
  );
};
