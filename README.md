# passwordGenerator

# JavaScript: Password Generator

## Description

This application enables users to generate random passwords based on specific criteria that they select. It runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code that has been written. The code defines an array of characters to include in the password and defines a function to generate a password based on user selection. The code prompts the user for the desired length of the password and validates the input. It also prompts the user to confirm uppercase,lowercase,symbols and numbers. Finally, the code generates a password by selecting random characters from the availableCharacters array and writes the generated password to the #password input when the generate button is clicked.

## Table of Contents

.   Installation

.   Usage

.   Features

.   Development

.   Technical Details


## Installation

There is no installation required for this application. Simply click on the deployed link to access the application.

## Usage

1.  Navigate to the Password Generator application in your web browser.

2.  Click on the "Generate Password" button to initiate the password generation process.

3.  Respond to the series of prompts presented in the pop-up window:

        .   Enter the desired length of the password (must be between 8 and 128 characters).

        .   Choose whether to include lowercase letters, uppercase letters, numbers, and special characters.

4.  Once you have ok all of the prompts, your randomly generated password will be displayed in the text area.

5.  To copy the password double-click the text you want to copy, or highlight it. With the text highlighted, press Ctrl + C to copy. Move your cursor to the appropriate location and press Ctrl + V to paste.


## Features

. Allows users to generate random passwords based on specific criteria.

. Provides a responsive user interface that adapts to multiple screen sizes.

. Allows users to select the length of the password (between 8 and 128 characters).

. Allows users to choose whether to include lowercase letters, uppercase letters, numbers, and special characters.

. Allows users to copy the generated password.


## Development

This application was developed using HTML, CSS, and JavaScript. It features a responsive user interface that has been designed using CSS Flexbox. JavaScript has been used to handle user input and generate a random password based on the criteria selected.

1. Visit [Deployed Application](https://shahnazafreen9849.github.io/passwordGenerator/) for Password Generator

2. Application Image

![alt Image of the application](/image.png)


## Technical Details

This code defines an array of characters to be used in generating a password. The array includes lowercase and uppercase letters, numbers, and special characters.

The generatePassword() function is defined to prompt the user for the desired length of the password and which character types to include. It validates the user's input and initializes an array to hold the available characters based on user-selected criteria.

The function generates a password by selecting random characters from the poolOfCharacters.

The writePassword() function is defined to generate a password and write it to the #password input.

The addEventListener() method is used to add an event listener to the "Generate Password" button that calls the writePassword() function when clicked.

