const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

const fetchDrinks = async () => {
  // simulate a slow network call
  // await new Promise(resolve => setTimeout(resolve, 2000));

  // simulate an Error
  // if(!response.ok) throw new Error('Network response was not ok')

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const DrinksPage = async () => {
  const data = await fetchDrinks();
  console.log(data);
  return (
    <div>
      <h1 className="text-7xl">DrinksPage</h1>
    </div>
  )
}

export default DrinksPage