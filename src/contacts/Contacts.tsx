import React, {useState} from 'react';
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {useFormik} from 'formik';
import {portfolioAPI} from '../common/api/portfolio-api';
import {Modal} from '../common/modal/Modal';
import {Loading} from '../common/preloder/Loading';

const Fade = require('react-reveal/Fade')

export type FormikType = {
    fullName?: string;
    contacts?: string;
    message?: string;
}

export const Contacts = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>('idle')
    const [isShownModal, setIsShownModal] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const closeModal = () => {
        setIsShownModal(false)
        setStatus('idle')
    }
    const showModal = () => {
        setIsShownModal(true)
    }

    const formik = useFormik({
        validate: (values) => {
            const errors: FormikType = {};

            if (!values.contacts) {
                errors.contacts = 'Contacts is required'
            }
            if (!values.message) {
                errors.message = 'Message is required'
            }
            return errors
        },
        initialValues: {
            fullName: '',
            contacts: '',
            message: ''
        },
        onSubmit: (values: FormikType, {resetForm}) => {
            setStatus('loading')
            showModal()
            portfolioAPI.sendMessage(values)
                .then(() => {
                    setStatus('succeeded')
                    showModal()
                    resetForm()
                })
                .catch((err) => {
                    setStatus('failed')
                    setError(err.message)
                    showModal()
                })
        }
    })
    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title name={'Contact'}/>
                <Fade bottom>
                    <form className={s.contactForm} onSubmit={formik.handleSubmit}>
                        <input className={s.formGroupInput}
                               type="text"
                               placeholder={'Name'}
                               {...formik.getFieldProps('fullName')}
                        />

                        <input className={s.formGroupInput}
                               type="text"
                               placeholder={'Contacts(e-mail)'}
                               {...formik.getFieldProps('contacts')}
                        />
                        {formik.touched.contacts ?
                            <div className={s.errorsContacts}>{formik.errors.contacts}</div> : null}
                        <textarea className={s.formGroupTextarea}
                                  rows={7}
                                  placeholder={'Your message...'}
                                  {...formik.getFieldProps('message')}
                        >
                        </textarea>
                        {formik.touched.message ? <div className={s.errorsMessage}>{formik.errors.message}</div> : null}
                        <button type={'submit'}>{'Send message'}</button>
                    </form>
                </Fade>
                {status === 'loading' && isShownModal &&
                    <Modal closeModal={closeModal}>
                        <Loading/>
                    </Modal>
                }
                {status === 'succeeded' && isShownModal &&
                    <Modal closeModal={closeModal}>
                        <p>Your message has been sent.</p>
                    </Modal>
                }
                {status === 'failed' && isShownModal &&
                    <Modal closeModal={closeModal}>
                        <p>{error}</p>
                    </Modal>
                }
            </div>
        </div>
    );
}