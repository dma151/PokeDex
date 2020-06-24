[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Pokedex Lab

Using the [PokéApi](https://pokeapi.co/), create a Pokédex where users can not
only browse a list of Pokémon characters, but also search for their favorites!

Starter code is provided for you, which includes some HTML and CSS. The styling
is provided by [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction),
which is already linked. When you finish the base requirements, look
into Bootstrap for the bonuses!

![Pokédex](img/screenshot2.png)

## Prerequisites

- React
- APIs & AJAX

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Fulfill the listed requirements.
4. Submit your solution with a pull request on this repository.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

1. When the page loads, make a
   request to the PokéApi and list all Pokémon in the browser. Each character
   should appear in `section#results` element.
2. Add an input field/search bar with a submit button called "Search". When the
   user enters the name of the Pokémon and clicks submit, a request is made to
   the PokéApi and the approprate Pokémon's name should appear in the
   `section#results` element. The new results should clear out any existing
   results before displaying the new results.
3. Add a dropdown that includes the following options: Name, Move, Ability, and
   Location.
4. Focus the search based on the option the user selects for the dropdown menu.
   When the Search button is clicked, make a request to the PokéApi to search
   the Pokémon property that matches the selected option for what is in the
   input field.
5. If the input does match any data from the PokéApi, create an alert that says
   "No matches! Try something else!"

## Bonus

- Use [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) to style your form input and
  pokemon search results
- Make your Pokédex responsive using the
  [Bootstrap grid](https://react-bootstrap.netlify.com/layout/grid/#grid)!
- For the "Name" and "Catch 'Em All" searches, show the image of the pokemon in
  the results.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
