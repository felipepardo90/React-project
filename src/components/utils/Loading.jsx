

const Loading = () => {
  return (
    <div className="container" style={{backgroundColor:"pink", margin:"auto", height:"100vh", opacity:".5"}}>
      <div className="spinner-border text-danger container" role="status" style={{display:"flex", width:"100px", height:"100px", margin:"auto"}} >
        
      </div>
      <span className="visually-hidden">Cargando productos...</span>
    </div>
  );
};

export default Loading;
