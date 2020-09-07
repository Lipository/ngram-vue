var AppData = {
    data() {
      return {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", //alphabet to start with
        allowedKeys: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        plaintextabc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        ciphertextabc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        alphaLength: 26,

        orgtxt: "The quick brown fox jumps over the lazy dog",
        codtxt: "The quick brown fox jumps over the lazy dog",
        code: 'encode',
        substitutiontxt: '',
        columns: '',
        matrix: ['A','D','F','G','V','X'],
        mymatrix: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        genKeySquare: '',
        firstKeyword: '',
        secondKeyword: '',

        keyValue: 'CODE',
        countGrams: 4,
        tableLength: 30,

        uppercase: true,
        blanks: false,
        digits: false,
        punctuationmarks: false,
        lowercase: false,
        umlauts: false,
        casesensitive: true,
        signs: true,
        clean: false,
        showGroup: true,
        substitutionGroup: true,
        ignoreSpaces: false,

        show: false,
        toggle: false,
        own: false,
        warningLength: false,
      }
    }
  };
  export default AppData;
