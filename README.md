# Send form with PHPmailer

## Install and init composer with PHPmailer
  - Install composer on unix `sudo apt install composer`
  - Install composer with PHPmailer `composer require phpmailer/phpmailer` in your project folder

## Change to your settings email
  - Account/email with Google Auth `$email = 'example@example.com';`
  - Generated and set your google app password `$password = 'password';`
  - Change to your smtp server if needed `$SMTPServer = 'smtp.gmail.com';`