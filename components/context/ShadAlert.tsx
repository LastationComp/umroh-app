import Swal from 'sweetalert2';

type alertProps = {
  title?: string;
  text?: string;
  icon?: 'error' | 'success' | 'warning' | 'question';
  confirmButtonText?: string | null;
  cancelButtonText?: string | null;
  onSuccess?: () => void;
  onCancel?: () => void;
};
const showAlert = ({ title = 'Apakah anda yakin?', text, icon = 'error', confirmButtonText = 'Oke', cancelButtonText = null, onSuccess, onCancel }: alertProps) => {
  return Swal.fire({
    title: `<span class="text-lg">${title ?? ''}</button`,
    text: text ?? '',
    html: `<span class="text-black/50 text-sm font-small">${text ?? ''}</button`,
    icon: icon,
    showConfirmButton: confirmButtonText !== null,
    showCancelButton: cancelButtonText !== null,
    confirmButtonText: confirmButtonText ?? '',
    cancelButtonText: cancelButtonText ?? '',
    confirmButtonColor: '#2c3442',
    cancelButtonColor: '#747576',

    buttonsStyling: true,
  }).then((result) => {
    if (result.isConfirmed) return onSuccess ? onSuccess() : null;

    return onCancel ? onCancel() : null;
  });
};

export { showAlert };
