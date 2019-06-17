

import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal)

export const showErrorAlert= (title) => {
  Swal.fire({
    type: 'error',
    title: 'Oops...',
    text: title
  })
}
export const showSuccessProduct = (title) => {
  MySwal.fire({
    type: 'success',
    title: title,
    confirmButtonText: 'Aceptar'
  });
}


export const showRemoveProduct = () => {
  return MySwal.fire({
    type: 'warning',
    title: '¿Estas seguro de eliminar el producto?',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Eliminado exitosamente!',
        '',
        'success'
      )
      return true;
    }
  });
}
