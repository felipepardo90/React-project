import './Loading.scss'

const Loading = () => {
  return (
    <div className="container spinner">
      <div className="spinner-border text-danger container" role="status">
        
      </div>
      <span className="visually-hidden">Cargando productos...</span>
    </div>
  );
};

export default Loading;
