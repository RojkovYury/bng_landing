interface handleMailerProps {
  name: string;
  phone: string;
  check: boolean;
  setMessage: any;
  setOpenSnackbar: any;
  setErrorInput: any;
  onClose?: any;
  setName: any;
  setPhone: any;
  setCheck: any;
  setOpenSuccessSnackbar: any;
  setIsLoading: any;
}

const handleMailer = async ({ name, phone, check, setMessage, setOpenSnackbar, setErrorInput, onClose, setName, setPhone, setCheck, setOpenSuccessSnackbar, setIsLoading }: handleMailerProps) => {
  if (!name) {
    setMessage('Имя не заполнено');
    setOpenSnackbar(true);
    setErrorInput('name');
    return;
  }

  if (!phone) {
    setMessage('Телефон не заполнен');
    setOpenSnackbar(true);
    setErrorInput('phone');
    return;
  }

  if (phone.length < 18 || phone[4] !== '9') {
    setMessage('Проверьте правильность введенного номера');
    setOpenSnackbar(true);
    setErrorInput('phone');
    return;
  }

  if (!check) {
    setMessage('Необходимо дать согласие на обработку и хранение персональных данных');
    setOpenSnackbar(true);
    setErrorInput('check');
    return;
  }

  setIsLoading(true);

  const response = await fetch('/api/messenger', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone }),
  });
  const data = await response.json();

  if (response.ok) {
    setOpenSuccessSnackbar(true);
    setIsLoading(false);
    setName('');
    setPhone('');
    setCheck(false);
    onClose && onClose();
  }
  else {
    setMessage(`Error: ${data.message}`);
    setOpenSnackbar(true);
    setIsLoading(false);
  }
};

export default handleMailer;
