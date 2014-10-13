function generateRandomPassword(passwordLength, useAlphaLower, useAlphaUpper, useNumeric, useSymbols)
{
    // make use of local entropy from browser or crypto library if available
    // using seedrandom by David Bau
    Math.seedrandom();

    var alphaLower = useAlphaLower ? 'abcdefghijklmnopqrstuvwxyz' : '';
    var alphaUpper = useAlphaUpper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    var numeric = useNumeric ? '0123456789' : '';
    var symbols = useSymbols ? '`~!@#$%^&*()-_=+\\|]}[{;:\',./<>?' : '';
    var characterPool = alphaLower + alphaUpper + numeric + symbols;
    var password = '';
    for(i=0;i<passwordLength;i++)
    {
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length))
    }
    return password;
}
