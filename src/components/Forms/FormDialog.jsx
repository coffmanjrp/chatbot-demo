// import React, { useState, useEffect, useCallback } from 'react';
// import TextInput from './TextInput';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';

// export const FormDialog = (props) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [description, setDescription] = useState('');

//   const inputName = useCallback(
//     (e) => {
//       setName(e.target.value);
//     },
//     [setName]
//   );
//   const inputEmail = useCallback(
//     (e) => {
//       setEmail(e.target.value);
//     },
//     [setEmail]
//   );
//   const inputDescription = useCallback(
//     (e) => {
//       setDescription(e.target.value);
//     },
//     [setDescription]
//   );

//   const submitForm = () => {
//     const payload = {
//       text: `お問い合わせがありました\n\nお名前：${name}\nEmail：${email}\nお問い合わせ内容：\n${description}`,
//     };

//     const url =
//       'https://hooks.slack.com/services/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';

//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(payload),
//     }).then(() => {
//       alert('送信が完了しました。追ってご連絡いたします。');
//       setName('');
//       setEmail('');
//       setDescription('');
//       return props.handleClose();
//     });
//   };

//   return (
//     <Dialog
//       open={props.open}
//       onClose={props.handleClose}
//       aria-labelledby="alert-dialog-title"
//       aria-describedby="alert-dialog-description"
//     >
//       <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
//       <DialogContent>
//         <TextInput
//           label={'お名前（必須）'}
//           multiline={false}
//           rows={1}
//           value={name}
//           type={'text'}
//           onChange={inputName}
//         />
//         <TextInput
//           label={'メールアドレス（必須）'}
//           multiline={false}
//           rows={1}
//           value={email}
//           type={'email'}
//           onChange={inputEmail}
//         />
//         <TextInput
//           label={'お問い合わせ内容（必須）'}
//           multiline={true}
//           rows={5}
//           value={description}
//           type={'text'}
//           onChange={inputDescription}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={props.handleClose} color="primary">
//           キャンセル
//         </Button>
//         <Button onClick={submitForm} color="primary" autoFocus>
//           送信する
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default FormDialog;

import React, { Component } from 'react';
import TextInput from './TextInput';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      description: '',
    };

    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
  }

  inputName = (e) => {
    this.setState({ name: e.target.value });
  };
  inputEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  inputDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  submitForm = () => {
    const name = this.state.name;
    const email = this.state.email;
    const description = this.state.description;

    const payload = {
      text: `お問い合わせがありました\nお名前：${name}\nEmail：${email}\nお問い合わせ内容：${description}`,
    };

    const url =
      'https://hooks.slack.com/services/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';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(() => {
      alert('送信が完了しました。追ってご連絡いたします。');
      this.setState({ name: '', email: '', description: '' });
      return this.props.handleClose();
    });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <TextInput
            label={'お名前（必須）'}
            multiline={false}
            rows={1}
            value={this.state.name}
            type={'text'}
            onChange={this.inputName}
          />
          <TextInput
            label={'メールアドレス（必須）'}
            multiline={false}
            rows={1}
            value={this.state.email}
            type={'email'}
            onChange={this.inputEmail}
          />
          <TextInput
            label={'お問い合わせ内容（必須）'}
            multiline={true}
            rows={5}
            value={this.state.description}
            type={'text'}
            onChange={this.inputDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={this.submitForm} color="primary" autoFocus>
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default FormDialog;
