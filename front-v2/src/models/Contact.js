/**
 * Модель контактных данных
 */
export class Contact {
    constructor(name, phone, email, address) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    getPhone() {
        return this.phone;
    }

    getEmail() {
        return this.email;
    }

    getAddress() {
        return this.address;
    }

    getPhoneFormatted() {
        return this.phone.replace(/[^\d+]/g, '');
    }
}
