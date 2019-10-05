import React, { Component } from 'react'

export default class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        correct: false,
        errors: {
            nameError: false,
            emailError: false,
            messageError: false,
        },
    }

    errorMessages = {
        nameIncorrect: 'Podaj imię i nazwisko.',
        emailIncorrect: 'Podaj prawidłowy adres email.',
        messageIncorrect: 'Wpisz swoją wiadomość.'
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    formValidation = () => {
        let name = false;
        let email = false;
        let message = false;
        let correct = false;

        if (this.state.name.length > 5 && this.state.name.indexOf(' ') !== -1) {
            name = true
        };

        if(this.state.email.indexOf('@') !== -1) {
            email = true
        };

        if (this.state.message.length > 10) {
            message = true
        };

        if (name && email && message) {
            correct = true
        };

        return ({
            name,
            email,
            message,
            correct
        })
    }

    handleSubmit = (e) => {
        const validation = this.formValidation();

        if(!validation.correct) {
            e.preventDefault();
            this.setState({
                errors: {
                    nameError: !validation.name,
                    emailError: !validation.email,
                    messageError: !validation.message,
                }
            });
        } else {
            this.setState({
                correct: true,
            })
        }
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit} action={this.state.correct ? "https://formspree.io/xqraplqm" : ""} method={this.state.correct ? "POST" : ""}>
                <p className="contact-form__field">
                    <label className="contact-form__label" htmlFor="name">Imię i nazwisko</label>
                    <input className="contact-form__input" type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
                </p>
                <p className="contact-form__field">
                    <label className="contact-form__label" htmlFor="email">Email</label>
                    <input className="contact-form__input" type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                </p>
                <p className="contact-form__field">
                    <label className="contact-form__label" htmlFor="message">Wiadomość</label>
                    <textarea className="contact-form__textarea" name="message" id="message" cols="30" rows="10" value={this.state.message} onChange={this.handleChange}></textarea>
                </p>
                <button type="submit" className="contact-form__btn btn">Wyślij</button>
                
                {this.state.errors.nameError && <span className="contact-form__error">{this.errorMessages.nameIncorrect}</span>}
                {this.state.errors.emailError && <span className="contact-form__error">{this.errorMessages.emailIncorrect}</span>}
                {this.state.errors.messageError && <span className="contact-form__error">{this.errorMessages.messageIncorrect}</span>}
            </form>
        )
    }
}
