$(document).ready(function()
{
    // Show a random password when the page loads
    showNewPassword();

    // Show a new password when the refresh button is clicked
    $('#refresh').bind('click', function()
    {
        showNewPassword();
    });
});

// Check the options on the page and generate an appropriate password
function showNewPassword()
{
    var useAlphaLower = $('#alpha-lower').is(':checked');
    var useAlphaUpper = $('#alpha-upper').is(':checked');
    var useDigits = $('#digits').is(':checked');
    var useSymbols = $('#symbols').is(':checked');
    var passwordLength = parseInt($('#num-chars').val(), 10);
    var newPassword = generateRandomPassword(passwordLength, useAlphaLower, useAlphaUpper, useDigits, useSymbols);
    $("#password").val(newPassword);
}
