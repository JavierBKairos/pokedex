export const Modal = ({ title, description, onClickClose }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={onClickClose}>Cerrar</button>
    </div>
  );
};
