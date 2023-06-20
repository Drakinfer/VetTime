import React from 'react';
import './FaqPage.css'

const FaqPage = () => {
    const faqs = [
        {
            question: "Quels sont les horaires d'ouverture de la clinique vétérinaire ?",
            answer: "La clinique vétérinaire est ouverte du lundi au vendredi de 9h à 18h, et le samedi de 9h à 12h."
        },
        {
            question: "Comment prendre rendez-vous pour mon animal ?",
            answer: "Vous pouvez prendre rendez-vous en utilisant notre formulaire de rendez-vous en ligne ou en appelant au 06 00 00 00 00."
        },
        {
            question: "Quels services vétérinaires proposez-vous ?",
            answer: "Nous proposons une large gamme de services vétérinaires, notamment les consultations, les vaccinations, les chirurgies, les analyses de laboratoire et les soins dentaires pour les animaux de compagnie."
        }
    ];

    return (
        <><div className='container'>
            <div className='mt-2 col-12'>
                <div className='mb-4 homeNav titleRubrique'>
                    <span className='h3'>FAQ</span>
                </div>
            </div>
            <div className="faq-page form-control form-control-lg">
                <hr></hr>
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                        <hr></hr>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default FaqPage;
