import "./_Loading.scss";

const Loading = () => {
  return (
    <div className="container loader">
      <div className=" text-danger container ball"></div>
      <div className=" text-danger container ball"></div>
      <div className=" text-danger container ball"></div>
      <span>Cargando productos...</span>
    </div>
  );
};

export default Loading;
