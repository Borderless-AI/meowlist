export const CatRow = ({ index, name, description, image }) => {
  return (
    <div style={{padding:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h3>{name}</h3>
      <img style={{paddingBottom:"10px"}} src={`http://placecats.com/${image}/200/200`} alt="" />
      <body style={{width:"300px", maxHeight: "50px"}}>{description}</body>
    </div>
  );
};
