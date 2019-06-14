

import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal)

export const showSuccessProduct = (title) => {
    MySwal.fire({
      type: 'success',
      title: title,
      confirmButtonText: 'Aceptar'
    });
}


export const showRemoveProduct = () => {
  MySwal.fire({
    type: 'success',
    title: 'El producto se ha eliminado de la lista',
    confirmButtonText: 'Aceptar'
  });
}