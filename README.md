# Zoo Functions Project

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## About

This is my 9th project during my journey at Trybe!

I was responsible for developing functions that retrieve information about the zoo animals such as species and place of origin, as well as fetching data about the people who collaborate with the maintenance and care of the zoo. The idea is to use `ES6` and `Higher Order Functions` to organize the information of a zoo. The entire project was structured in a way to provide a test-driven development experience `TDD` ensuring quality code! 🐘

## Repository Structure

- The `src` folder contains all the code

- The `tests` folder contains all the tests

- The database used is located in the `data` folder

<details>
  <summary>
    The file <code>zoo_data.js</code> contains an object in the following format:
  </summary> <br />

  ```js
  {
    species: [
      {
        id: lionId,
        name: 'lions',
        popularity: 4,
        location: 'NE',
        availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
        residents: [
          {
            name: 'Zena',
            sex: 'female',
            age: 12,
          }
        ],
      }
    ],
    employees: [
      {
        id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
        firstName: 'Nigel',
        lastName: 'Nelson',
        managers: [burlId, olaId],
        responsibleFor: [lionId, tigersId],
      }
    ],
    hours: {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    },
    prices: {
      adult: 49.99,
      senior: 24.99,
      child: 20.99,
    },
  }
  ```
<details>
  <summary>
    The <code>species</code> array holds information about each zoo species
  </summary> <br />

  | Key | Description |
  | ------------ | ----------|
  | `id` | the identifier of the species |
  | `name` | name of the species |
  | `popularity` | popularity of that species |
  | `location` | region the animal species came from, with possible values: <br> - `NE`: northeast; <br> - `NW`: northwest; <br> - `SE`: southeast; <br> - `SW`: southwest |
  | `availability` | availability for visiting animals of that species |
  | `residents` | information about animals of that species residing in the zoo, where: <br> - `name`: the name of the animal, like `'Zena'`; <br> - `sex`: the sex of the animal, like `'female'`; <br> - `age`: the age of the animal |

</details>

<br />

<details>
  <summary>
    The <code>employees</code> array holds information about each employee
  </summary> <br />

  | Key | Description |
  | ----------- | ------ |
  | `id` | The identifier of the person |
  | `firstName` | first name of the person |
  | `lastName` | last name of the person |
  | `managers` | the **IDs** of the person's managers |
  | `responsibleFor` | the **IDs** of the species for which the person is responsible |

</details>

<br />

<details>
  <summary>
  The <code>hours</code> object holds information about the zoo's opening hours
  </summary> <br />

  | Key | Description |
  | --------- | -------------------------------------------------- |
  | `Tuesday`<br> `Wednesday`<br> `Thursday`<br> `Friday`<br> `Saturday`<br> `Sunday`<br> `Monday` | **Days of the week:** <br> - `open`: Opening time <br> - `close`: Closing time |

</details>

<br />

<details>
  <summary>
    The <code>prices</code> object holds information about the zoo's ticket prices
  </summary> <br />

  | Key | Description |
  | -------- | ------ |
  | `adult` | price for adults |
  | `senior` | price for seniors |
  | `child` | price for children |

</details>

</details>

## Implemented Functionalities

### Function Get Species By Ids

<details>
  <summary>
    Implemented the function <code>getSpeciesByIds</code> and its tests <code>getSpeciesByIds.spec</code>
  </summary> <br />

  - The function can receive a single `ID` or multiple `IDs`, thus searching for animal species and returning an array containing the found species, displaying the following information:

    - Name of the found species
    - Population of individuals
    - Location in the Zoo
    - Available days for visitation
    - Information about each individual of that species

  - The tests `getSpeciesByIds.spec` ensure that:

    - Returns an empty array if no parameters are passed
    - If passed a single `ID` as a parameter, it returns an array with the species corresponding to that `ID`
    - If passed more than one `ID`, it returns an array with the species corresponding to the `IDs`
</details>

---

### Function Get Animals Older Than

<details>
  <summary>
    Implemented the function <code>getAnimalsOlderThan</code> and its tests <code>getAnimalsOlderThan.spec</code>
  </summary> <br />

  - The function takes a species and an age as parameters and then:

    - Returns `true` if **all** animals of that species have an age equal or greater than the age passed as a parameter
    - Returns `false` if any animal of the species does not meet the minimum age passed as a parameter

  - The tests in `getAnimalsOlderThan.spec` ensure that:

    - Correctly verifies the age of all animals of the specified species and returns the correct boolean value according to the minimum age passed
</details>

---

### Function Get Employee By Name

<details>
  <summary>
    Implemented the function <code>getEmployeeByName</code> and its tests <code>getEmployeeByName.spec</code>
  </summary> <br />

  - The function receives a `string` as a parameter and if it matches the **first name** or **last name** of a zoo employee, it returns the employee's information in the following format:

    ```js
      {
        id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
        firstName: 'Nigel',
        lastName: 'Nelson',
        managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
        responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
      }
    ```

  - The tests in `getEmployeeByName.spec` ensure that:

    - Return an empty object if no parameters are received
    - Return the employee object if the parameter matches their first name
    - Return the employee object if the parameter matches their last name
</details>

---

### Function Get Related Employees

<details>
  <summary>
    Implemented the function <code>getRelatedEmployees</code> and its tests <code>getRelatedEmployees.spec</code>
  </summary> <br />

  - The function checks if an employee is a manager and which employees they lead. Following the good practice of dividing the code into smaller parts, the file will have two functions:

    - The `isManager` function is responsible for checking if an employee is a manager:

      - Returns `true` if the passed `id` belongs to a manager
      - Returns `false` if the passed `id` does not belong to a manager

    - The `getRelatedEmployees` function is responsible for returning the employees led by the management:

      - Uses the `isManager` function to check if the person is a manager or not
      - If the person is not a manager, it throws an error with the message: **'The inserted ID does not belong to a manager employee!'**
      - If the person is a manager, it returns an array containing the first and last names of the employees managed by that person, for example:

        ```js
        [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
        ```

  - The tests in `getRelatedEmployees.spec` ensure that:

    - The `isManager` function returns `true` if the passed `ID` belongs to a manager employee
    - The `isManager` function returns `false` if the passed `ID` does not belong to a manager employee
    - The `getRelatedEmployees` function, if the passed `ID` belongs to a manager, returns an array containing the first and last names of the employees for whom they are responsible
    - The `getRelatedEmployees` function, if the passed `ID` does **not** belong to a manager, throws an error with the message: `'The inserted ID does not belong to a manager employee!'`
</details>

---

### Function Count Animals

<details>
  <summary>
    Implemented the function <code>countAnimals</code> and its tests <code>countAnimals.spec</code>
  </summary> <br />

  - The function `countAnimals` is responsible for counting the number of animals residing in the zoo, accepting `species` and `sex` as parameters in the format of an object

  - Returns the quantity of animals residing in the zoo of the species passed as a parameter. For example:

    - When receiving the argument `{ species: 'penguins' }`, it returns only the quantity (number) of penguins residing in the zoo
    - When receiving the argument `{ species: 'giraffes', sex: 'female' }`, it returns only the quantity (number) of female giraffes residing in the zoo

  - If no parameters are passed, it returns the quantity of animals residing per species. For example:

    ```javascript
      {
        lions: 4,
        // [...]
      }
    ```

  - The tests in `countAnimals.spec` ensure that:

    - If no parameters are received, it returns all species and the quantity of residents of each
    - If received as a parameter an object with the key `species`, it returns the quantity of animals of that species
    - If received as a parameter an object with the keys `species` and `sex`, it returns the quantity of animals of that species, in the specified sex
</details>

---

### Function Calculate Entry

<details>
  <summary>
    Implemented the function <code>countEntrants</code> and its tests <code>countEntrants.spec</code>
  </summary> <br />

  - The value of zoo entrances is calculated based on age groups, where:

    - `child`: individuals **under** 18 years old
    - `adult`: individuals aged **18 or older** and **under** 50 years old
    - `senior`: individuals aged **50 or older**

  - Considering the good practice of dividing the code into smaller parts, the file will have two functions, called `countEntrants` and `calculateEntry`. Both functions receive an array in the following format:

    ```javascript
    const entrants = [
      { name: 'Lara Carvalho', age: 5 },
      { name: 'Frederico Moreira', age: 5 },
      { name: 'Pedro Henrique Carvalho', age: 5 },
      { name: 'Maria Costa', age: 18 },
      { name: 'Núbia Souza', age: 18 },
      { name: 'Carlos Nogueira', age: 50 },
    ];
    ```

  - The `countEntrants` function is responsible for calculating the quantity of visitors per age group. It receives an array and returns an **object**:

    - It sums up the quantity of visitors per age group
    - It returns an object in the following format: `{ child: 3, adult: 2, senior: 1 }`

  - The `calculateEntry` function is responsible for summing up the value of people's entrance to the zoo. It receives an array and returns the **total** sum of entrance values:

    - It returns `0` if no parameter is passed or an empty array
    - It uses the `countEntrants` function to have the total quantity of people per age group
    - It sums up the entrance values per age group, example of return: `187.94`

  - The tests in `calculateEntry.spec` ensure that:

    - The `countEntrants` function, when receiving an array of visitors, returns an object with the count
    - The `calculateEntry` function returns 0 if no arguments are passed
    - The `calculateEntry` function returns 0 if `countEntrants` returns an empty object
    - The `calculateEntry` function, when receiving multiple arrays of visitors, returns the correct and formatted value
</details>

---

### Function Get Schedule

<details>
  <summary>
    Implemented the function <code>getSchedule</code> and its tests <code>getSchedule.spec</code>
  </summary> <br />

  - Provides a schedule of available visiting hours through a query for people visiting the zoo, who may want access to the schedule for the week, a specific day, or a specific animal

  - Returns an array with the weekdays on which an animal is available for visitation if the function parameter is an animal. For example:

    ```js
      getSchedule('lions');
      // the return will be [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
    ```

  - Returns an object with all available hours for each day of the week if the function receives no parameter or the parameter passed is not an animal or a day

    - There is an object with all weekdays as keys
    - The values for each weekday are an object with keys `officeHour` and `exhibition`:
      - `officeHour` text with the opening and closing hours of the zoo on that weekday
      - `exhibition` an array with the names of all animals available for visitation on that weekday

    - The return is similar to:

      ```javascript
      {
        Tuesday: { // Weekday
          officeHour: 'Open from 8am until 6pm',
          exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
        },
        Wednesday: {
          officeHour: 'Open from 8am until 6pm',
          exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
        },
        // [...]
      }
      ```

  - The tests in `getSchedule.spec` ensure that:

    - If no parameters are received, it returns the hours for each day and which animals will be available
    - If it receives the name of an animal as a parameter, it returns an array with the days it will be on display
    - If it receives a single day as a parameter, it returns the hours for that day and which animals will be on display
    - If it receives parameters that are neither an animal nor a day, it returns the hours for each day and which animals will be on display
</details>

---

### Function Get Oldest From First Species

<details>
  <summary>
    Implemented the function <code>getOldestFromFirstSpecies</code> and its tests <code>getOldestFromFirstSpecies.spec</code>
  </summary> <br />

  - The function finds the oldest animal from the species managed by a collaborating person:

    - It receives an `ID` parameter referring to the collaborating person, and from this ID:
      - Finds the collaborating person with the `ID` passed as a parameter
      - Finds the **first** species of animal that the collaborating person is responsible for
      - Finds the oldest animal of that species
      - Returns an array with the information of the oldest animal of that species

  - The tests in `getOldestFromFirstSpecies.spec` ensure that:

    - Given the `ID`, the function finds the first species of animal managed by that person and returns an array with the name, gender, and age of the oldest animal of that species
</details>

---

### Function Get Employees Coverage

<details>
  <summary>
    Implemented the function <code>getEmployeesCoverage</code> and its tests <code>getEmployeesCoverage.spec</code>
  </summary> <br />

  - The function receives an object as a parameter and returns information about the employee and which species they are responsible for:

    - It receives an object as a parameter that will determine its behavior, with the following keys:
      - `name`: the first name **or** last name of the person to be searched
      - `id`: the id of the person to be searched
    - Returns the information of the corresponding person when receiving an object with the `name` property
    - Returns the information of the corresponding person when receiving an object with the `id` property

  - **Examples of using the `getEmployeesCoverage` function:**

    **INPUT:**

      ```js
      getEmployeesCoverage({ name: 'Sharonda' }); // receives the first name as parameter or
      getEmployeesCoverage({ name: 'Spry' }); // receives the last name as parameter or
      getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d' }); // receives an id as parameter
      ```

    **OUTPUT:**

      ```json
      {
        "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
        "fullName": "Sharonda Spry",
        "species": [ "otters", "frogs" ],
        "locations": [ "SE", "SW" ]
      }
      ```

  - If the function receives no parameters, it returns an array with the information of **all** employees

  - If no person is found with the given first name, last name, or id, an error is thrown with the message **"Invalid information"**

  - Throws an error if the `name` or `id` is invalid

  - The tests in `getEmployeesCoverage.spec` ensure that:

    - If the object passed as a parameter has the `name` property, it should return only the corresponding person
    - If the object passed as a parameter has the `id` property, it should return only the corresponding person
    - If no parameters are received, it returns a list with the coverage of **all** employees
    - If there are no people with the specified `name` or `id`, an error is thrown
</details>

---

### Function Get Animal Map

<details>
  <summary>
    Implemented the function <code>getAnimalMap</code> and its tests <code>getAnimalMap.spec</code>
  </summary> <br />

  - It is responsible for categorizing animals by location, as well as filtering them by region, name, and sex based on a parameter. The return structure of the function is based on the species' location:

    ```js
      {
        NE: [ /* data here */],
        NW: [/* data here */],
        SE: [/* data here */],
        SW: [/* data here */],
      }
    ```

  - **The function's parameter will be an object that may contain:**

<details>
  <summary>
    <code>includeNames: true</code>, which returns the names of animals in the following format:
  </summary> <br />

```js
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  // [...]
```
</details>

<details>
  <summary>
    <code>sorted: true</code> which returns the names of animals alphabetically in the following format:
  </summary> <br />

```js
  NE: [
    { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
  ],
  // [...]
```
</details>

<details>
  <summary>
    <code>sex: male</code> or <code>sex: female</code> returns the <strong>name</strong> of animals that are males or females in the following format:
  </summary><br />

```js
  NE: [
    { lions: ['Zena', 'Dee'] },
    { giraffes: ['Gracia', 'Vicky'] },
  ],
  // [...]
```
</details>

<br />

  - If the function receives no parameter, the animal species are categorized by location and an object is returned in the following format:

    ```javascript
    {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    }
    ```

  Thus:

  - It returns the species and names of animals if the function receives the parameter `{includeNames: true}`

  - It returns the species and names of animals in alphabetical order if the function receives the parameter `{includeNames: true, sorted: true}`

  - It returns the species of **all** animals categorized by location if the function:

    - receives no parameter
    - receives **only** the parameter `{sex: male/female}`
    - receives **only** the parameter `{sex: male/female}` **and/or** `{sorted: true}`

  - It returns the species and names of animals filtered by sex:

    - If the function's parameter is `{includeNames: true, sex: male/female}`

  - It returns the species and names of animals filtered by sex and in alphabetical order:

    - It returns the species and names of female animals in alphabetical order, if the function's parameter is `{includeNames: true, sex: male/female, sorted: true}`

  - The tests in `getAnimalMap.spec` ensure that:

    - If no parameters are received, it returns animals categorized by location
    - If parameters are received without the `includeNames` option specified, it returns animals categorized by location
    - If parameters are received with the `includeNames: true` option specified, it adds the animal names to the return
    - If parameters are received with the `sorted: true` option specified, it returns the names of the animals sorted
    - If parameters are received with the `sex: 'female'` or `sex: 'male'` option specified, it returns only female/male animals
    - If parameters are received with the `sex: 'female'` or `sex: 'male'` option specified and the `sorted: true` option specified, it returns only female/male animals with sorted names
</details>

---

### 100% Test Coverage

  - Implemented tests for **all** functions to achieve 100% coverage

  - To run and track test coverage, execute the command below:

```bash
  npm run test:coverage
```

---
