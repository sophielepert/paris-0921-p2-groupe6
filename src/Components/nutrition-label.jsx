import React from 'react';

// import CurrentUserNameContext from '../Contexts/userContext';
// import CurrentFinalChoicesContext from '../Contexts/finalChoices';

import './nutrition-label.css';

import LazyGif from '../Assets/lazygif.gif';

function NutritionLabel({ total }) {
  // const { userName } = useContext(CurrentUserNameContext);
  // const { userChoice, setUserChoice } = useContext(CurrentFinalChoicesContext);

  // useEffect(() => {
  //   setUserChoice(userChoice.filter((elt) => elt.username !== userName));
  // }, []);

  const totalCalories = total.reduce((prev, cur) => {
    return prev + cur.calories;
  }, 0);

  const totalFat = total.reduce((prev, cur) => {
    return parseInt(prev) + parseInt(cur.fat);
  }, 0);

  const totalCarbs = total.reduce((prev, cur) => {
    return parseInt(prev) + parseInt(cur.carbs);
  }, 0);

  const totalSugar = total.reduce((prev, cur) => {
    return parseInt(prev) + parseInt(cur.sugar);
  }, 0);

  const totalProtein = total.reduce((prev, cur) => {
    return parseInt(prev) + parseInt(cur.protein);
  }, 0);

  // useEffect(() => {
  //   console.log(userChoice);
  //   console.log(total);
  //   console.log(parseInt(total[0].fat));
  //   console.log(totalFat);
  // });

  return (
    <div>
      <div className="gifcontainer">
        <img className="lazygif" src={LazyGif} alt="LazyGif" />
      </div>
      <section className="performance-facts">
        <header className="performance-facts__header">
          <h1 className="performance-facts__title">Nutrition Facts</h1>
        </header>
        <table className="performance-facts__table">
          <thead>
            <tr>
              <th colSpan="3" className="small-info">
                <tr></tr>
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">
                <b>Calories</b>
              </th>
              <td>
                <b>{totalCalories}Kcal</b>
              </td>
            </tr>
            <tr className="thick-row"></tr>
            <tr>
              <th colSpan="2">
                <b>Total Fat</b>
              </th>
              <td>
                <b>{totalFat} Gr</b>
              </td>
            </tr>
            <tr></tr>

            <tr>
              <th colSpan="2">
                <b>Total Carbohydrate</b>
              </th>
              <td>
                <b>{totalCarbs} Gr</b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Total Sugars</b>
              </th>
              <td>
                <b>{totalSugar} Gr</b>
              </td>
            </tr>
            <tr className="thick-end">
              <th colSpan="2">
                <b>Protein</b>
                <td></td>
              </th>
              <td>{totalProtein} Gr</td>
            </tr>
          </tbody>
        </table>
      </section>
      )
    </div>
  );
}

export default NutritionLabel;
