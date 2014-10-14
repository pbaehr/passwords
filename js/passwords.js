function buildPool(useAlphaLower, useAlphaUpper, useNumeric, useSymbols)
{
    var alphaLower = useAlphaLower ? 'abcdefghijklmnopqrstuvwxyz' : '';
    var alphaUpper = useAlphaUpper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    var numeric = useNumeric ? '0123456789' : '';
    var symbols = useSymbols ? '`~!@#$%^&*()-_=+\\|]}[{;:\',./<>?' : '';
    return(alphaLower + alphaUpper + numeric + symbols);
}

function generateRandomPassword(passwordLength, characterPool)
{
    // make use of local entropy from browser or crypto library if available
    // using seedrandom by David Bau
    Math.seedrandom();


    var password = '';
    for(i=0;i<passwordLength;i++)
    {
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length))
    }
    return password;
}

function calculateEntropy(length, pool)
{
    return(length * Math.log(pool.length) / Math.log(2));
}
