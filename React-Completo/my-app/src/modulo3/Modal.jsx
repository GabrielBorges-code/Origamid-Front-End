/* eslint-disable react/prop-types */
const Modal = ({ setModal }) => {
  return (
    <>
      <div>
        Modal aberta <button onClick={() => setModal(false)}>fechar</button>
      </div>
    </>
  );
};

export default Modal;
