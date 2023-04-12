class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  static titleize(str) {
    const forbiddenWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');

    const capitalizedWords = words.map((word, index) => {
      if (forbiddenWords.includes(word) && index !== 0) {
        return word;
      } else {
        return this.capitalize(word);
      }
    });

    return capitalizedWords.join(' ');
  }
}