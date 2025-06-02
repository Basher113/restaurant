function ContactPage() {
    // Main contact container
    const contact = document.createElement('div');
    contact.className = 'contact';

    
    const contactText = document.createElement('div');
    contactText.className = 'contact-text';

    // h2
    const h2 = document.createElement('h2');
    h2.textContent = 'Book a Table';

    // description
    const textInfo = document.createElement('div');
    textInfo.className = 'text-info';
    textInfo.textContent = 'feel free to use the form or drop as an email. Phone calls work too.';

    // contact info container
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';

    function createContactItem(className, svgPathD, content) {
        const wrapper = document.createElement('div');
        wrapper.className = className;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', svgPathD);
        svg.appendChild(path);

        const div = document.createElement('div');
        div.textContent = content;

        wrapper.appendChild(svg);
        wrapper.appendChild(div);
        return wrapper;
    }

    contactInfo.appendChild(createContactItem(
        'phone',
        'M12,3C7.46,3 3.34,4.78 0.29,7.67C0.11,7.85 0,8.1 0,8.38C0,8.66 0.11,8.91 0.29,9.09L2.77,11.57C2.95,11.75 3.2,11.86 3.5,11.86C3.75,11.86 4,11.75 4.18,11.58C4.97,10.84 5.87,10.22 6.84,9.73C7.17,9.57 7.4,9.23 7.4,8.83V5.73C8.85,5.25 10.39,5 12,5C13.59,5 15.14,5.25 16.59,5.72V8.82C16.59,9.21 16.82,9.56 17.15,9.72C18.13,10.21 19,10.84 19.82,11.57C20,11.75 20.25,11.85 20.5,11.85C20.8,11.85 21.05,11.74 21.23,11.56L23.71,9.08C23.89,8.9 24,8.65 24,8.37C24,8.09 23.88,7.85 23.7,7.67C20.65,4.78 16.53,3 12,3Z M12,12A4,4 0 0,1 16,16A4,4 0 0,1 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12Z',
        '0922554432'
    ));

    contactInfo.appendChild(createContactItem(
        'email',
        'M10 9C8.9 9 8 9.92 8 11.05C8 11.62 8.22 12.12 8.59 12.5L12 16L15.42 12.5C15.78 12.13 16 11.61 16 11.05C16 9.92 15.1 9 14 9C13.46 9 12.95 9.23 12.59 9.6L12 10.2L11.42 9.61C11.05 9.23 10.54 9 10 9Z M20 4C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H20Z',
        'Papuresto@gmail.com'
    ));

    contactInfo.appendChild(createContactItem(
        'location',
        'M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z',
        'Blk 12 Lot 8 Diko alam St. Taguig City.'
    ));

    contactText.appendChild(h2);
    contactText.appendChild(textInfo);
    contactText.appendChild(contactInfo);

    const contactForm = document.createElement('div');
    contactForm.className = 'contact-form';

    const form = document.createElement('form');

    const nameSection = document.createElement('div');
    nameSection.className = 'name-section';
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'first-name');
    nameLabel.textContent = 'Name';
    const nameInputs = document.createElement('div');
    nameInputs.className = 'name-inputs';
    const inputFirst = document.createElement('input');
    inputFirst.type = 'text';
    inputFirst.name = 'first-name';
    inputFirst.id = 'first-name';
    inputFirst.placeholder = 'First';
    inputFirst.required = true;
    const inputLast = document.createElement('input');
    inputLast.type = 'text';
    inputLast.name = 'last-name';
    inputLast.id = 'last-name';
    inputLast.placeholder = 'Last';
    inputLast.required = true;
    nameInputs.appendChild(inputFirst);
    nameInputs.appendChild(inputLast);
    nameSection.appendChild(nameLabel);
    nameSection.appendChild(nameInputs);
    form.appendChild(nameSection);

    // Email section
    const emailSection = document.createElement('div');
    emailSection.className = 'email-section';
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email-input');
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.name = 'email';
    emailInput.id = 'email-input';
    emailInput.placeholder = "email@example.com"
    emailSection.appendChild(emailLabel);
    emailSection.appendChild(emailInput);
    form.appendChild(emailSection);

    // Phone section
    const phoneSection = document.createElement('div');
    phoneSection.className = 'phone-section';
    const phoneLabel = document.createElement('label');
    phoneLabel.setAttribute('for', 'phone-input');
    phoneLabel.textContent = 'Phone (Optional)';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneInput.id = 'phone-input';
    phoneInput.placeholder = 'xxx-xxx-xxx-xxx';
    phoneSection.appendChild(phoneLabel);
    phoneSection.appendChild(phoneInput);
    form.appendChild(phoneSection);

    // Date section
    const dateSection = document.createElement('div');
    dateSection.className = 'date';
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date';
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'date';
    dateInput.id = 'date';
    dateSection.appendChild(dateLabel);
    dateSection.appendChild(dateInput);
    form.appendChild(dateSection);

    // Message section
    const messageSection = document.createElement('div');
    messageSection.className = 'message';
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message';
    const messageInput = document.createElement('textarea');
    messageInput.name = 'message';
    messageInput.id = 'message';
    messageInput.placeholder = 'Type your message.';
    messageSection.appendChild(messageLabel);
    messageSection.appendChild(messageInput);
    form.appendChild(messageSection);

    // Button
    const button = document.createElement('button');
    button.textContent = 'Book a Table';
    form.appendChild(button);

    // Append form to contact form
    contactForm.appendChild(form);

    
    contact.appendChild(contactText);
    contact.appendChild(contactForm);

   
    return contact

}

export default ContactPage;

