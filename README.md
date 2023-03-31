# Ecommerce App

This is an Ecommerce website's HomePage and Cart replica built on React.js .

The website is deployed here : https://ecommerce-app-fho4.onrender.com

## Installation

```bash
  * git clone https://github.com/AyRawat/Ecommerce-Store-
  * cd Ecommerce-Store-
  * npm i
```

To start your server

```
* npm run dev
```

Open up your favorite browser and navigate to http://localhost:5173/ and you should see the Home Page.

##App Structure

```
>Root
 ->App
  -->Navbar
  -->Home
   ---->ProductCard
  -->Checkout
   ---->ProductDetailsCard
```

## Functionality

1. Search function .
2. Should be able to add items and get to Checkout
3. Offers: User should be able to apply the following offers and see the items that were added with offers

- Buy 6 cans of Coca-Cola, and get one free
- Buy 3 croissants and get a free coffee (need to show the additional item being added)

4. We’re able to navigate back and forth between the 2 pages with retain the cart information
5. We’re able to add or remove items smoothly with offers taking effect when applicable and getting removed similarly if not meeting the criteria anymore
6. The subtotal, discount and totals are calculated correctly Pages should be responsive

## Challenges

1. Implementing Search Functionality
   - Since, the API provided, did not have any route for searching a particular item. It was difficult to implement search functionality.

Solution: I found a solution by saving the API data and performing a fuzzy search on the names of the items

2. Managing State
   - Used React's Context API to manage the state of the cart. I stored the wishlisted and cart Items to show and perform various operations that were required.

## Design Choices

1. Why choose a Framework ?
   In the absence of a framework, managing the state of components can be quite challenging, particularly when a database is not in use. In order to tackle this issue, I opted for React as it provided me with the benefit of its robust Context API to handle state management effectively.

2. Why React ?
   React is lightweight and Flexible and it has also a very large community. So, you can get help when you are stuck somewhere.

3. Bootstrap
   Bootstrap makes things easy, as it comes with a lot of prebuilt components. Also, it helps a lot in Layouting the components.

4. Fuzzy-search
   Used it to implement search Functionality.
