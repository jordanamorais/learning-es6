class TextHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static truncate(text, maxLength) {

        return text.length > maxLength
            ? text.substring(0, maxLength) + "..."
            : text;
    }
}
