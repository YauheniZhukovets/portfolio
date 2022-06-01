import React, {useState} from 'react';
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {useFormik} from 'formik';
import {AxiosError} from 'axios';
import {portfolioAPI} from '../common/api/portfolio-api';
import {Modal} from '../common/modal/Modal';

const Fade = require('react-reveal/Fade')

export type FormikType = {
    fullName?: string;
    contacts?: string;
    message?: string;
}

export const Contacts = () => {
    const [isShownModal, setIsShownModal] = useState<boolean>(false)
    const closeModal = () => setIsShownModal(false)
    const showModal = () => setIsShownModal(true)

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
        onSubmit: async (values: FormikType, {resetForm}) => {
            const res = await portfolioAPI.sendMessage(values)
            try {
                showModal()
                resetForm()
                console.log(res.data.data);
            } catch (err) {
                let error = err as AxiosError;
                console.log(error);
            }
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
                               placeholder={'Contacts(e-mail or phone)'}
                               {...formik.getFieldProps('contacts')}
                        />
                        {formik.touched.contacts ?
                            <div className={s.errorsContacts}>{formik.errors.contacts}</div> : null}

                        <textarea className={s.formGroupTextarea}
                                  rows={7}
                                  placeholder={'Describe yourself here...'}
                                  {...formik.getFieldProps('message')}
                        >
                        </textarea>
                        {formik.touched.message ? <div className={s.errorsMessage}>{formik.errors.message}</div> : null}
                        <button type={'submit'}>{'Send message'}</button>
                    </form>
                </Fade>
                {isShownModal &&
                    <Modal closeModal={closeModal}>
                        <p>Your message has been sent</p>
                    </Modal>}
            </div>
        </div>
    );
}