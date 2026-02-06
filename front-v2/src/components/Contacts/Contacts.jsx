import React from 'react';
import { COMPANY_INFO } from '../../utils/constants';
import './Contacts.css';

/**
 * Компонент блока контактов
 */
class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                phone: '',
                promo: '',
                wishes: ''
            },
            isSubmitting: false,
            submitMessage: '',
            submitError: false
        };
    }

    // Проверка лимита заявок
    checkSubmissionLimit = () => {
        const STORAGE_KEY = 'lakewood_submissions';
        const MAX_SUBMISSIONS = 3;
        const TIME_WINDOW = 24 * 60 * 60 * 1000;

        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            const now = Date.now();

            if (!stored) {
                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify({
                        count: 1,
                        firstSubmission: now,
                        lastSubmission: now
                    })
                );
                return { allowed: true, remaining: MAX_SUBMISSIONS - 1 };
            }

            const data = JSON.parse(stored);
            const timePassed = now - data.firstSubmission;

            if (timePassed > TIME_WINDOW) {
                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify({
                        count: 1,
                        firstSubmission: now,
                        lastSubmission: now
                    })
                );
                return { allowed: true, remaining: MAX_SUBMISSIONS - 1 };
            }

            if (data.count >= MAX_SUBMISSIONS) {
                const timeLeft = TIME_WINDOW - timePassed;
                const hoursLeft = Math.ceil(timeLeft / (60 * 60 * 1000));
                return {
                    allowed: false,
                    remaining: 0,
                    hoursLeft: hoursLeft
                };
            }

            data.count += 1;
            data.lastSubmission = now;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

            return { allowed: true, remaining: MAX_SUBMISSIONS - data.count };
        } catch (error) {
            console.error('Ошибка проверки лимита:', error);
            return { allowed: true, remaining: MAX_SUBMISSIONS };
        }
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };

    sendToTelegram = async (formData) => {
        const TELEGRAM_BOT_TOKEN = '8308614851:AAHJCjqO_iQyTbLyFlNeHXy73ksvmU6xOtg';
        const TELEGRAM_CHAT_ID = 5031906741;

        const message = `НОВАЯ ЗАЯВКА С САЙТА

Имя: ${formData.name}
Телефон: ${formData.phone}${formData.promo ? `\nПромокод: ${formData.promo}` : ''}${formData.wishes ? `\nПожелания: ${formData.wishes}` : ''}`;

        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message
                })
            });

            const data = await response.json();

            if (!data.ok) {
                throw new Error(data.description || 'Telegram API error');
            }

            return true;
        } catch (error) {
            console.error('Ошибка отправки в Telegram:', error);
            return false;
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const limitCheck = this.checkSubmissionLimit();

        if (!limitCheck.allowed) {
            this.setState({
                submitMessage: `Вы достигли лимита заявок. Попробуйте снова через ${limitCheck.hoursLeft} ч.`,
                submitError: true
            });

            setTimeout(() => {
                this.setState({ submitMessage: '', submitError: false });
            }, 7000);
            return;
        }

        this.setState({ isSubmitting: true, submitError: false });

        const success = await this.sendToTelegram(this.state.formData);

        if (success) {
            this.setState({
                isSubmitting: false,
                submitMessage: `Спасибо! Мы свяжемся с вами в ближайшее время.`,
                submitError: false,
                formData: {
                    name: '',
                    phone: '',
                    promo: '',
                    wishes: ''
                }
            });

            setTimeout(() => {
                this.setState({ submitMessage: '' });
            }, 5000);
        } else {
            this.setState({
                isSubmitting: false,
                submitMessage:
                    'Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.',
                submitError: true
            });

            setTimeout(() => {
                this.setState({ submitMessage: '', submitError: false });
            }, 7000);
        }
    };

    render() {
        const { formData, isSubmitting, submitMessage, submitError } = this.state;

        return (
            <section className="contacts" id="contacts">
                <div className="contacts__container">
                    <div className="contacts__content">
                        {/* Блок 1: Заголовок и описание */}
                        <div className="contacts__header">
                            <h2 className="contacts__title">СВЯЖИТЕСЬ С НАМИ</h2>
                            <p className="contacts__description">
                                Готовы обсудить ваш проект? Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время
                                для консультации.
                            </p>
                        </div>

                        {/* Блок 2: Форма */}
                        <div className="contacts__form-wrapper">
                            <form className="contacts__form" onSubmit={this.handleSubmit}>
                                <div className="contacts__form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Ваше имя *"
                                        className="contacts__input"
                                        value={formData.name}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="contacts__form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Телефон *"
                                        className="contacts__input"
                                        value={formData.phone}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="contacts__form-group">
                                    <input
                                        type="text"
                                        name="promo"
                                        placeholder="Промокод (если есть)"
                                        className="contacts__input"
                                        value={formData.promo}
                                        onChange={this.handleInputChange}
                                    />
                                </div>

                                <div className="contacts__form-group">
                                    <textarea
                                        name="wishes"
                                        placeholder="Особые пожелания"
                                        className="contacts__textarea"
                                        rows="5"
                                        value={formData.wishes}
                                        onChange={this.handleInputChange}
                                    ></textarea>
                                </div>

                                {submitMessage && (
                                    <div className={`contacts__message ${submitError ? 'contacts__message--error' : ''}`}>
                                        {submitMessage}
                                    </div>
                                )}

                                <div className="contacts__form-footer">
                                    <p className="contacts__privacy">
                                        Отправляя заявку, вы соглашаетесь на обработку персональных данных
                                    </p>

                                    <button type="submit" className="contacts__submit" disabled={isSubmitting}>
                                        <span>{isSubmitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ'}</span>
                                        <div className="contacts__submit-circle">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Блок 3: Контактная информация */}
                        <div className="contacts__info-wrapper">
                            <div className="contacts__info">
                                <div className="contacts__info-item">
                                    <div className="contacts__label">ТЕЛЕФОН</div>
                                    <a
                                        href={`tel:${COMPANY_INFO.phone.replace(/[^\d+]/g, '')}`}
                                        className="contacts__link"
                                    >
                                        {COMPANY_INFO.phone}
                                    </a>
                                </div>

                                <div className="contacts__info-item">
                                    <div className="contacts__label">EMAIL</div>
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="contacts__link">
                                        {COMPANY_INFO.email}
                                    </a>
                                </div>

                                <div className="contacts__info-item">
                                    <div className="contacts__label">АДРЕС</div>
                                    <div className="contacts__text">{COMPANY_INFO.address}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contacts__map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=30.516121,59.890573&z=16&l=map&pt=30.516121,59.890573,pm2rdm"
                            width="100%"
                            height="450"
                            frameBorder="0"
                            allowFullScreen
                            title="Карта местоположения"
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacts;