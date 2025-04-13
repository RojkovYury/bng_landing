interface handleMailerProps {
  name: string;
  phone: string;
  check: boolean;
  setMessage: any;
  setOpenSnackbar: any;
  setErrorInput: any;
  onClose?: any;
}

const handleMailer = async ({ name, phone, check, setMessage, setOpenSnackbar, setErrorInput, onClose }: handleMailerProps) => {
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
    setMessage('Проверьте првильность введенного номера');
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

  const response = await fetch('/api/messenger', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone }),
  });
  const data = await response.json();
  if (response.ok) {
    setMessage('Заявка успешно отправлена');
    // При изменении текста обязательно поменять на аналогичный в SingUpSnackbar у переменной currentSeverity
    // Не стал делать "городушки", просто в зависимости от сообщения раскрашиваем Snackbar в зеленный
    setOpenSnackbar(true);
    setTimeout(() => {
      onClose && onClose();
    }, 1200);
  }
  else {
    setMessage(`Error: ${data.message}`);
    setOpenSnackbar(true);
  }
};

export default handleMailer;
